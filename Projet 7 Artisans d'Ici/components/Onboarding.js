import React, {useEffect} from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import {firebaseAuth} from '../firebase'
const onboardingImage = require('../assets/images/onboarding.png')
const logo = require('../assets/images/logo.png')
const numbering = require('../assets/images/numbering.png')

export default function Onboarding({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
       <ImageBackground source={onboardingImage} resizeMode="cover" style={styles.onboardingImage}>
            <Image style={styles.logo} source={logo} />

            <View style={styles.footer}>
                
                <View style={{marginBottom: 20}}>
                    <Text style={styles.mainTitle}>Trouver en un clic</Text>
                    <Text style={styles.mainTitle}>les meilleurs artisans</Text>
                    <Text style={styles.mainTitle}>de Côte d’Ivoire</Text>
                </View>

                <GradientButton
                      style={{ marginVertical: 8, marginBottom: 20 }}
                      text="Je recherche un artisan"
                      textStyle={{ fontSize: 17, fontWeight: 'bold' }}
                      gradientBegin="#FB724C"
                      gradientEnd="#FE904B"
                      gradientDirection="diagonal"
                      height={58}
                      radius={14}
                      impact
                      impactStyle='Light'
                      onPressAction={() => navigation.navigate('Tabs')}
                    />

                    <View style={styles.footerText}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <View style={styles.center}>
                                <Text>
                                   <Text>Déjà inscrit ? </Text>
                                   <Text style={styles.orange}>Me connecter</Text>

                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginTop: 5}} onPress={() => navigation.navigate('Signup', {isPro: true})}>
                            <View style={styles.center}>
                                <Text>
                                    <Text>Je suis un artisan,</Text> <Text style={styles.orange}>M'inscrire</Text>
                                 </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
            </View>

          </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  center: {
    alignItems:'center',
  },
  orange: {
    color: '#FB724C',
    fontWeight: 'bold'
  },
  gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 5
    },
    button: {
      width: '70%',
      height: 45,
    },
    text: {
      color: 'white',
      fontSize: 16
    },
  footer: {
      flex: 1,
      justifyContent: 'flex-end'
  },
  footerText: {
   marginBottom: 40
  },
  mainTitle:{
      textAlign: 'center',
      color: '#404040',
      fontSize: 22,
      fontWeight: 'bold',
      fontFamily: 'Poppins-Italic'
  },
  logo: {
    alignSelf: 'center',
    marginTop: 20
  },
  numbering: {
      alignSelf: 'center',
      margin: 20
    },
  onboardingImage: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
});
