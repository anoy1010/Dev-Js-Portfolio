import React, { useState, useEffect } from 'react';
import { TextInput, ActivityIndicator, SafeAreaView, SectionList, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import { CloseSquare } from 'react-native-iconly'

export default function Loading() {

  return (
    <SafeAreaView style={styles.container}>
     
     <ActivityIndicator size="large" color="#00ff00" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

});
