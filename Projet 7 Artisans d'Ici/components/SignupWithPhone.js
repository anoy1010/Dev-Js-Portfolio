import React, { useState, useEffect, useRef } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import { Entypo } from '@expo/vector-icons';
import { Hide, CloseSquare } from 'react-native-iconly'
import PhoneInput from 'react-native-phone-number-input';
import { signinWithPhone } from '../firebase';
import { firebaseAuth, getAvatar, getData } from '../firebase';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
const defaultAvatar = require('../assets/images/default_avatar.jpg')
GoogleSignin.configure({
  webClientId: '386814027399-dvi66oobi48kgc081pom7nr465b20hsa.apps.googleusercontent.com',
  offlineAccess: true,
  hostedDomain: '',
  forceConsentPrompt: true,
});

export default function SignupWithPhone({ route, navigation }) {

  if (firebaseAuth.currentUser !== null) {
    navigation.navigate('Tabs')
  }

  const [phoneNumber, setPhoneNumber] = useState("");
  const [token, setToken] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const phoneInput = useRef(null);
  const [code, setCode] = useState('');
  const [errorMessage, setErrorMessage] = React.useState("");

  const google = require('../assets/images/google.png')
  const { isPro } = route.params;

  const GetRecaptcha = (props) => {
    const onMessage = (data) => {

      console.log('recaptcha', data.nativeEvent.data)
      //here you can put your action to perform(check validation on your server or somthing)
      props.action(data.nativeEvent.data);
    };

    return <View style={{}}>
      <WebView
        style={{ height: 200 }}
        onMessage={async (e) => await onMessage(e)}
        containerStyle={{ height: 200 }}
        source={{
          html: `
          <!DOCTYPE html>
          <html lang="fr">
          
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
              <title>Entering captcha</title>
          </head>
          
          <body>
              <p style="text-align: center; font-size: 1.2em;">Please, enter captcha for continue</p>
                  <button id="continue-btn" style="display:none">Continue to app</button>
                  
                  <script src="https://www.gstatic.com/firebasejs/5.10.1/firebase-app.js"></script>
                  <script src="https://www.gstatic.com/firebasejs/5.10.1/firebase-auth.js"></script>
                  <script>
                      // Initialize Firebase
                      var config = {
                          apiKey: "AIzaSyAFHmJUcUngVZ8T62PovQG64qkJzAEfqI0",
                          authDomain: "artisansdici-b963c.firebaseapp.com",
                          projectId: "artisansdici-b963c",
                          storageBucket: "artisansdici-b963c.appspot.com",
                          messagingSenderId: "386814027399",
                          appId: "1:386814027399:web:d314eea70b0c3393edfa22",
                          measurementId: "G-Q61Y9VT61N"
                      };
                      firebase.initializeApp(config);
              
                      function getToken(callback) {
                          var container = document.createElement('div');
                          container.id = 'captcha';
                          document.body.appendChild(container);
                          
                          var captcha = new firebase.auth.RecaptchaVerifier('captcha', {
                              'size': 'invisible',
                              'callback': function (token) {
                                  callback(token);
                              },
                              'expired-callback': function () {
                                  callback('');
                              }
                          });

                          captcha.render().then(function () {
                              captcha.verify();
                          });
                      }
                      function sendTokenToApp(token) {
                      
                        window.ReactNativeWebView.postMessage(token);
                      }
                      document.addEventListener('DOMContentLoaded', function () {
                          getToken(sendTokenToApp);
                      });
                  </script>
          </body>
          
          </html>`
          , baseUrl: 'https://lesartisansdici.net',
        }} />


    </View>;
  };

  
  const fetchUser = async () => {

    getData('users', firebaseAuth.currentUser.uid).then((data) => {

      if (data === null) {
        navigation.navigate('MyInfos', { isPro: isPro, fromSignup: true })
      }

      getAvatar(firebaseAuth.currentUser.uid).then(url => {
        data.avatar = url;
        data.reviews = data.reviews ?? [];
        data.directory = data.directory ?? [];
        const jsonValue = JSON.stringify(data)
        AsyncStorage.setItem('@user', jsonValue)

        if (data.name === null) {
          navigation.navigate('MyInfos', { isPro: isPro, fromSignup: true })
        } else {
          navigation.navigate('Tabs')
        }
      }).catch(error => {
        data.avatar = defaultAvatar;
        data.reviews = data.reviews ?? [];
        data.directory = data.directory ?? [];
        const jsonValue = JSON.stringify(data)
        AsyncStorage.setItem('@user', jsonValue)

        if (data.name === null) {
          navigation.navigate('MyInfos', { isPro: isPro, fromSignup: true })
        } else {
          navigation.navigate('Tabs')
        }
      })


    }).catch(error => {
      navigation.navigate('MyInfos', { isPro: isPro, fromSignup: true })
    });

  };


  const handleSignUpGoogle = async (navigation) => {
    console.log('handleSignUpGoogle')
    signupWithGoogle().then((result) => {
      console.log('signupWithGoogle');
      fetchUser(navigation)
    });

  };

  const handleSignUpFacebook = async (navigation) => {
    console.log('handleSignUpFB')
    signupWithFacebook().then((result) => {
      fetchUser(navigation)
    });
  };


  const handleSignup = async (navigation) => {
    let phoneCode = phoneInput.current?.getCallingCode()
    console.log('+' + phoneCode + phoneNumber);

    if (confirm) {
      try {
        confirm.confirm(code).then((result) => {
        
          signinWithPhone('+' + phoneCode + phoneNumber, token, confirm, code).then((result) => {
            fetchUser(navigation)
          });
          
          // ...
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
      } catch (error) {
        console.log('Invalid code.');
      }
    } else {
      try {
        const confirmation = await signinWithPhone('+' + phoneCode + phoneNumber, token);
        setConfirm(confirmation);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const handleToken = (token) => {
    setToken(token)
  }

  return (
    <View style={styles.container}>

      <GetRecaptcha action={handleToken} />

      <View>
        <Text style={styles.subtitle}>Remplissez le formulaire pour continuer</Text>

        <View style={styles.inputContainer}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="CI"
            layout="first"
            placeholder='Téléphone'
            textContainerStyle={{
              backgroundColor: '#F0F0F0',

            }}
            containerStyle={{
              backgroundColor: '#F0F0F0',
              borderRadius: 14,
            }}
            onChangeText={(text) => {
              setPhoneNumber(text);
            }}
          />
        </View>

        {confirm && <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Code de vérification</Text>
          <TextInput
            autoFocus
            value={code}
            onChangeText={setCode}
            keyboardType="numeric"
            style={styles.input}
          /></View>}


        {errorMessage.length > 0 &&
          <View style={{ margin: 10 }}>
            <Text style={{ color: 'red' }}>{errorMessage}</Text>
          </View>
        }

        <GradientButton
          style={{ marginVertical: 8, marginBottom: 10 }}
          text={confirm ? 'Valider' : "Envoyer"}
          textStyle={{ fontSize: 17, fontWeight: 'bold' }}
          gradientBegin="#FB724C"
          gradientEnd="#FE904B"
          gradientDirection="diagonal"
          height={58}
          radius={14}
          impact
          impactStyle='Light'
          onPressAction={() => handleSignup(navigation)}
        />


        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          underlayColor='#fff'
        >
          <Text style={{
            textAlign: 'center',
            fontSize: 17,
            color: '#8E8E93',
            fontSize: 13,
            marginTop: 10
          }}>Me connecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10

  },
  subtitle: {
    margin: 10,
    color: '#7A7A7A',
    fontSize: 17
  },
  inputContainer: {
    margin: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 14,
    color: '#2B2B2B'
  },
  submit: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    marginVertical: 8,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#fff',
  },
  submitText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 15
  },
  facebook: {
    backgroundColor: '#3B5998',
  },
  facebookText: {
    color: '#fff',
  },
  google: {
    backgroundColor: '#fff',
    borderColor: '#B0B0B0',
    color: '#2B2B2B'
  },
  googleText: {
    color: '#2B2B2B',
  },
  logoGoogle: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  icon: {
    marginRight: 10
  },
  inputLabel: {
    color: '#AEAEB2',
    fontSize: 14,
    position: 'absolute',
    top: 5,
    left: 10
  },
  inputIcon: {
    color: '#AEAEB2',
    fontSize: 24,
    position: 'absolute',
    top: 15,
    right: 15
  },
  input: {
    height: 40,
    marginTop: 20,
    borderWidth: 0,
    padding: 10,

  },
  orText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17
  },
  cgvText: {
    textAlign: 'center',
    fontSize: 17,
    color: '#8E8E93',
    fontSize: 13
  },
  bold: {
    fontWeight: 'bold'
  },
  darkColor: {
    color: '#2B2B2B'
  },
  orange: {
    color: '#FB724C',
    fontWeight: 'bold'
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  }

});
