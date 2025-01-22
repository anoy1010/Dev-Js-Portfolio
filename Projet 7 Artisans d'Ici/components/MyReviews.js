import React, { useState, useCallback, useEffect } from 'react';
import { useWindowDimensions, Dimensions, SafeAreaView, SectionList, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Lightbox from 'react-native-lightbox-v2';
import { Star, CloseSquare } from 'react-native-iconly'
const defaultAvatar = require('../assets/images/default_avatar.jpg')
import { getData, getAvatar, firebaseAuth } from '../firebase';
import TimeAgo from 'react-native-timeago';
import moment from 'moment/min/moment-with-locales'
moment.locale('fr');

const ItemReview = ({ item }) => (
  <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 10 }} >
    <View style={{ flex: 1 }}>
      <Image style={styles.itemReviewAvatar} source={item.avatar} />
    </View>
    <View style={{ flex: 3 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#2B2B2B' }}>{item.name}</Text>
      <Text style={{ fontSize: 18, color: '#4F4F4F' }}>{item.review}</Text>
    </View>
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.rating}/5 <Star style={styles.starIcon} size={17} set='bold' /></Text>
      <Text style={{ fontSize: 13, color: '#4F4F4F' }}><TimeAgo time={item.date} /></Text>
    </View>
  </View>
);

const Reviews = (props) => (
  <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
    <SectionList
      ItemSeparatorComponent={ItemSeparator}
      sections={props.reviews}
      keyExtractor={(item, index) => item + index.toString()}
      renderItem={({ item, section }) => {

        return <ItemReview item={item} />
      }
      }


    />
  </SafeAreaView>
);

const ItemSeparator = () => {
  return (
    //Item Separator
    <View style={styles.listItemSeparatorStyle} />
  );
};



export default function MyReviews({ navigation }) {
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [reviewsItems, setReviewsItems] = useState([]);

  const fetchReviewsItems = async (items) => {
    let reviewsList = [];
  
    await items.forEach((item, index) => {
      reviewsList.push({
        id: index,
        avatar: '',
        name: item.firstName,
        review: item.review,
        reviewer: item.reviewer,
        rating: item.rating,
        date: moment(new Date(item.date)).fromNow()
      })
    });
  
    for (const review in reviewsList) {
      await getAvatar(reviewsList[review].reviewer).then((avatar) => {
        reviewsList[review].avatar = { uri: avatar }
      }).catch(() => {
        reviewsList[review].avatar = defaultAvatar
      })
    }

    console.log('REVIEW LIST')
    console.log(reviewsList)
  
    return [{
      title: 'Avis',
      data: reviewsList
    }]
  }

  const fetchUser = async () => {

    getData('users', firebaseAuth.currentUser.uid).then((data) => {
      fetchReviewsItems(data.reviews).then((data) => {
        setReviewsItems(data)
      })

    });

  };

  useEffect(() => {
    fetchUser();
  }, [])
  
  return (
    <View style={styles.container}>
     <Reviews reviews={reviewsItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  tabs: {
    flex: 4,
  },
  infoTitle: {
    color: '#B0B0B0',
    fontSize: 15
  },
  starIcon: {
    color: '#FFCB55'
  },
  listItemSeparatorStyle: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
  infoValue: {
    color: '#2B2B2B',
    fontSize: 17,
    fontWeight: 'bold'
  },
  itemReviewAvatar: {
    width: 58,
    height: 58,
    borderRadius: 100
  },
  itemPhoto: {
    width: (Dimensions.get('window').width / 2) - 20,
    height: 200,
    margin: 5,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 120,
    textAlign: 'center',

  },
  displayName: {
    color: '#2B2B2B',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5
  },
  job: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
    color: '#2B2B2B',
    fontSize: 14,
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    marginTop: -120
  },
  center: {
    alignItems: 'center',
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
  mainTitle: {
    textAlign: 'center',
    color: '#404040',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Italic'
  },
  profileImage: {
    flex: 1,
    justifyContent: "center",
    height: 440,
    width: '100%'
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
