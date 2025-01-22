import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, SectionList, TouchableOpacity } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
const paymentValidated = require('../assets/images/validation.jpg')
import {  firebaseAuth } from '../firebase';

export default function MySubscriptionValidated({ navigation }) {
  
  navigation.setOptions({ headerShown: false })
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image style={{ width: 200, height: 200 }} source={paymentValidated} />
      </View>

      <View style={{ flex: 2, marginTop: 13, alignItems: 'center', textAlign: 'center' }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FB724C', textAlign: 'center' }}>Paiement en cours de validation</Text>
        
      </View>

      <GradientButton
        style={{ marginVertical: 8, marginBottom: 10 }}
        text="Voir mon profil"
        textStyle={{ fontSize: 17, fontWeight: 'bold' }}
        gradientBegin="#FB724C"
        gradientEnd="#FE904B"
        gradientDirection="diagonal"
        height={58}
        radius={14}
        impact
        impactStyle='Light'
        onPressAction={() => navigation.navigate('Profile', { userId:  firebaseAuth.currentUser.uid})}
      />


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
  listItemSeparatorStyle: {
    height: 1,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
  itemAvatar: {
    width: 65,
    height: 65,
    borderRadius: 100
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
