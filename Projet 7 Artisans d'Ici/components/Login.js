import React, { useState, useEffect, useRef } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { Hide, CloseSquare } from 'react-native-iconly'
import { signin, getAvatar, getData, firebaseAuth, signupWithGoogle, signupWithFacebook, signupWithApple } from '../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
const defaultAvatar = require('../assets/images/default_avatar.jpg')

const HeaderRight = (props) => (
  <TouchableOpacity onPress={() => props.navigation.pop()}>
    <CloseSquare style={{ color: '#7A7A7A', marginRight: 10 }} size={32} set='light' />
  </TouchableOpacity>
)

export default function Login({ navigation }) {
  navigation.setOptions({ headerLeft: () => null })
  navigation.setOptions({ headerRight: () => <HeaderRight navigation={navigation} /> })

  if(firebaseAuth.currentUser !== null){
    navigation.navigate('Tabs')
  }

  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const google = require('../assets/images/google.png')
  const [errorMessage, setErrorMessage] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const fetchUser = async () => {

    getData('users', firebaseAuth.currentUser.uid).then((data) => {

      if (data === null) {
        navigation.navigate('MyInfos', { isPro: false, fromSignup: true })
      }

      getAvatar(firebaseAuth.currentUser.uid).then(url => {
        data.avatar = url;
        data.reviews = data.reviews ?? [];
        data.directory = data.directory ?? [];
        const jsonValue = JSON.stringify(data)
        AsyncStorage.setItem('@user', jsonValue)

        if (data.name === null) {
          navigation.navigate('MyInfos', { isPro: false, fromSignup: true })
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
          navigation.navigate('MyInfos', { isPro: false, fromSignup: true })
        } else {
          navigation.navigate('Tabs')
        }
      })


    }).catch(error => {
      navigation.navigate('MyInfos', { isPro: false, fromSignup: true })
    });

  };

  const handleSignUpGoogle = async (navigation) => {
    console.log('handleSignUpGoogle')
    signupWithGoogle().then((result) => {
      console.log('signupWithGoogle');
      fetchUser(navigation)
    });
   
  };

  const handleSecureText = () => {
    console.log('secureText')
    setSecureTextEntry(!secureTextEntry)
  }

  const handleSignUpApple = async (navigation) => {
    console.log('handleSignUpApple')
    signupWithApple().then((result) => {
      console.log(result)
      fetchUser(navigation)
    });
  };

  const handleSignUpFacebook = async (navigation) => {
    console.log('handleSignUpFB')
    signupWithFacebook().then((result) => {
      console.log('signupWithFB');
      console.log(result)
      fetchUser(navigation)
    });
  };

  const handleSignIn = (navigation, email, password, setErrorMessage) => {
    let errorMessage = '';
    signin(email, password)
      .then(() => {
        fetchUser().then(() => {
          navigation.navigate('Tabs')
        });
  
      })
      .catch((error) => {
        let errorCode = error.code;
  
        switch (errorCode.substr(5)) {
          case 'ERROR_EMAIL_ALREADY_IN_USE':
          case 'account-exists-with-different-credential':
          case 'email-already-in-use':
            errorMessage = 'Adresse e-Mail déjà utilisée. Aller à la page de connexion.';
            break;
          case 'ERROR_WRONG_PASSWORD':
          case 'wrong-password':
            errorMessage = 'Mauvaise combinaison e-mail/mot de passe.';
            break;
          case 'ERROR_USER_NOT_FOUND':
          case 'user-not-found':
            errorMessage = 'Aucun utilisateur trouvé avec cet email.';
            break;
          case 'ERROR_USER_DISABLED':
          case 'user-disabled':
            errorMessage = 'Utilisateur désactivé.';
            break;
          case 'ERROR_TOO_MANY_REQUESTS':
          case 'operation-not-allowed':
            errorMessage = 'Trop de demandes pour se connecter à ce compte.';
            break;
          case 'ERROR_OPERATION_NOT_ALLOWED':
          case 'operation-not-allowed':
            errorMessage = 'Erreur de serveur, veuillez réessayer plus tard.';
            break;
          case 'ERROR_INVALID_EMAIL':
          case 'invalid-email':
            errorMessage = 'Adresse email invalide.';
            break;
          case 'weak-password':
            errorMessage = 'Mot de passe trop faible.';
            break;
          default:
            errorMessage = 'Échec de la connexion. Veuillez réessayer.';
        }
        setErrorMessage(errorMessage);
      });
  }


  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Remplissez le formulaire pour continuer</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>E-mail</Text>
        <TextInput
          keyboardType='email-address'
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Mot de passe</Text>
        <TouchableOpacity
          onPress={() => handleSecureText()}
          style={styles.inputIconContainer}
        >
          <Hide style={styles.inputIcon} size={24} color="#7A7A7A" set='light' />
        </TouchableOpacity>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
        />
      </View>

      {errorMessage.length > 0 &&
        <View style={{ margin: 10 }}>
          <Text style={{ color: 'red' }}>{errorMessage}</Text>
        </View>
      }

      <GradientButton
        style={{ marginVertical: 8, marginBottom: 10 }}
        text="Se connecter"
        textStyle={{ fontSize: 17, fontWeight: 'bold' }}
        gradientBegin="#FB724C"
        gradientEnd="#FE904B"
        gradientDirection="diagonal"
        height={58}
        radius={14}
        impact
        impactStyle='Light'
        onPressAction={() => handleSignIn(navigation, email, password, setErrorMessage)}
      />

      <Text style={styles.orText}>Ou</Text>

      <TouchableOpacity
          style={[styles.submit, styles.google]}
          onPress={() => navigation.navigate('SignupWithPhone', { isPro: false })}
          underlayColor='#fff'
        >
          <Entypo style={styles.icon} name="phone" size={24} color="black" />
          <Text style={[styles.submitText, styles.googleText]}>Se connecter via téléphone</Text>
        </TouchableOpacity>

      <TouchableOpacity
        style={[styles.submit, styles.facebook]}
        onPress={() => handleSignUpFacebook(navigation)}
        underlayColor='#fff'
      >
        <Entypo style={styles.icon} name="facebook-with-circle" size={24} color="white" />
        <Text style={[styles.submitText, styles.facebookText]}>Se connecter avec Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.submit, styles.google]}
        onPress={() => handleSignUpGoogle(navigation)}
        underlayColor='#fff'
      >
        <Image style={styles.logoGoogle} source={google} />
        <Text style={[styles.submitText, styles.googleText]}>Se connecter avec Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('ForgetPassword')}
        underlayColor='#fff'
      >
        <Text style={styles.forgetPasswordText}>Mot de passe perdu ?</Text>
      </TouchableOpacity>
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
  inputIconContainer: {
    position: 'absolute',
    top: 15,
    right: 15
  },
  inputIcon: {
    color: '#AEAEB2',
    fontSize: 24,
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
  forgetPasswordText: {
    textAlign: 'center',
    fontSize: 17,
    color: '#8E8E93',
    fontSize: 13,
    marginTop: 10
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
