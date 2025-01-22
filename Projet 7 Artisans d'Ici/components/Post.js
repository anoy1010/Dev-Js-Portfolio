import React, { useState, useEffect } from 'react';
import { TextInput, Dimensions, SafeAreaView, SectionList, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import StarRating from 'react-native-star-rating';
import { CloseSquare } from 'react-native-iconly'
const defaultAvatar = require('../assets/images/default_avatar.jpg');
import { addData, getAvatar, firebaseAuth, updateData } from '../firebase';
import { useForm, Controller } from "react-hook-form";


const HeaderRight = (props) => (
  <TouchableOpacity onPress={() => props.navigation.pop()}>
    <CloseSquare style={{ color: '#7A7A7A', marginRight: 10 }} size={32} set='light' />
  </TouchableOpacity>
)

export default function Post({ route, navigation }) {

  navigation.setOptions({ headerLeft: () => null })
  navigation.setOptions({ headerRight: () => <HeaderRight navigation={navigation} /> })
  const [post, onChangePost] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onBlur' })

  const savePost = (data, navigation) => {

    addData('posts', {
      userId: firebaseAuth.currentUser.uid,
      post: data.post,
      date: new Date(),
    });
    navigation.navigate('Tabs')
  }

  return (
    <SafeAreaView style={styles.container}>
     
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Votre annonce</Text>
          <Controller
            control={control}
            name="post"
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                style={styles.inputTextarea}
                multiline
                numberOfLines={4}
                editable
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
              />

            )}
            rules={{
              required: true,
              maxLength: 100
            }}
          />

        </View>
        {errors.post && <Text style={{ color: 'red', fontSize: 12 }}>Champs obligatoire.</Text>}
      </View>

      <View>
        <GradientButton
          style={{ marginVertical: 8, marginBottom: 20, marginTop: 20 }}
          text="Envoyer"
          textStyle={{ fontSize: 17, fontWeight: 'bold' }}
          gradientBegin="#FB724C"
          gradientEnd="#FE904B"
          gradientDirection="diagonal"
          height={58}
          radius={14}
          impact
          impactStyle='Light'
          onPressAction={handleSubmit(data => savePost(data, navigation))}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  itemAvatar: {
    width: 165,
    height: 165,
    borderRadius: 100
  },
  inputContainer: {
    margin: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 14,
    color: '#2B2B2B'
  },
  inputTextarea: {
    height: 120,
    marginTop: 0,
    borderWidth: 0,
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10
  },
  input: {
    height: 40,
    marginTop: 20,
    borderWidth: 0,
    padding: 10,
  },
  inputLabel: {
    color: '#AEAEB2',
    fontSize: 14,
    position: 'absolute',
    top: 5,
    left: 10
  },
});
