import React, { useState, useEffect } from 'react';
import { TextInput, Dimensions, SafeAreaView, SectionList, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import StarRating from 'react-native-star-rating';
import { Location } from 'react-native-iconly'
const defaultAvatar = require('../assets/images/default_avatar.jpg');
import { getData, getAvatar, firebaseAuth, updateData } from '../firebase';
import { useForm, Controller } from "react-hook-form";

export default function AddReview({ route, navigation }) {
  const { userId } = route.params;
  const [review, onChangeReview] = useState("");
  const [starCount, setStarCount] = useState(0);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onBlur' })

  const onStarRatingPress = (rating) => {
    setStarCount(rating)
  }

  const [commercialName, setCommercialName] = useState("");
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [address, setAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameReviewer, setFirstNameReviewer] = useState("");
  const [reviews, setReviews] = useState([]);

  const fetchUser = async () => {
    getAvatar(userId).then((data) => {
      setAvatar({ uri: data });
    });

    getData('users', userId).then((data) => {
      setCommercialName(data.commercial_name);
      setAddress(data.address)
      setReviews(data.reviews)
    });

    getData('users', firebaseAuth.currentUser.uid).then((data) => {
      setFirstNameReviewer(data.first_name);
    });
  };

  useEffect(() => {
    fetchUser();
  }, [])

  const saveReview = (data, navigation) => {
    console.log('REVIEWS')
    console.log(reviews)
    let reviewsList = reviews ?? [];

    reviewsList.push({
      reviewer: firebaseAuth.currentUser.uid,
      rating: starCount,
      review: data.review,
      date: new Date(),
      firstName: firstNameReviewer
    });

    updateData('users', userId, { reviews: reviewsList });
    navigation.navigate('Profile', { userId: userId })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, marginTop: 13, alignItems: 'center', }}>
        <Image style={styles.itemAvatar} source={avatar} />
        <Text style={{ color: '#2B2B2B', fontSize: 34, fontWeight: 'bold', marginLeft: 10, marginTop: 5 }}>{commercialName}</Text>
        <Text style={{ color: '#A1A1A2', fontSize: 17, marginLeft: 10 }}><Location style={{ color: '#A1A1A2' }} size={17} set='light' /> {address.country}</Text>
      </View>

      <View style={{ margin: 10 }}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={starCount}
          fullStarColor={'#FFCB55'}
          selectedStar={(rating) => onStarRatingPress(rating)}
        />
      </View>

      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Votre avis</Text>
          <Controller
            control={control}
            name="review"
            defaultValue={review}
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                style={styles.inputTextarea}
                multiline
                numberOfLines={4}
                editable
                onChangeText={onChangeReview}
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
        {errors.review && <Text style={{ color: 'red', fontSize: 12 }}>Champs obligatoire.</Text>}
      </View>

      <View>
        <GradientButton
          style={{ marginVertical: 8, marginBottom: 20, marginTop: 20 }}
          text="Enregistrer"
          textStyle={{ fontSize: 17, fontWeight: 'bold' }}
          gradientBegin="#FB724C"
          gradientEnd="#FE904B"
          gradientDirection="diagonal"
          height={58}
          radius={14}
          impact
          impactStyle='Light'
          onPressAction={handleSubmit(data => saveReview(data, navigation))}
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
