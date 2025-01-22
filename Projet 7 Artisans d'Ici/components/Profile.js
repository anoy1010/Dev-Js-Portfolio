import React, { useState, useEffect } from 'react';
import { useWindowDimensions, Keyboard, Dimensions, SafeAreaView, SectionList, FlatList, Image, RefreshControl, ScrollView, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Lightbox from 'react-native-lightbox-v2';
import { Star, CloseSquare, Bookmark } from 'react-native-iconly'
const defaultAvatar = require('../assets/images/default_avatar.jpg')
import { getData, getAvatar, getGallery, firebaseAuth, updateData } from '../firebase';
import TimeAgo from 'react-native-timeago';
import moment from 'moment/min/moment-with-locales'
moment.locale('fr');

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const ItemPhoto = ({ item }) => (
  <View style={styles.item} >
    <Lightbox>
      <Image style={styles.itemPhoto} source={{ uri: item.image }} />
    </Lightbox>
  </View>
);

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

const AddReviewBtn = (props) => {
  if (props.userId === firebaseAuth.currentUser) {
    return null
  }
  return (<GradientButton
    style={{ marginVertical: 8, marginBottom: 20, marginTop: 20 }}
    text="Ajouter un avis"
    textStyle={{ fontSize: 17, fontWeight: 'bold' }}
    gradientBegin="#FB724C"
    gradientEnd="#FE904B"
    gradientDirection="diagonal"
    height={58}
    radius={14}
    impact
    impactStyle='Light'
    onPressAction={() => {
      props.navigation.navigate('AddReview', { userId: props.userId })

    }}
  />)

}

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

  return [{
    title: 'Avis',
    data: reviewsList
  }]
}



const ItemSeparator = () => {
  return (
    //Item Separator
    <View style={styles.listItemSeparatorStyle} />
  );
};

const HeaderRight = (props) => (
  <TouchableOpacity onPress={() => props.navigation.pop()}>
    <CloseSquare style={{ color: '#7A7A7A', marginRight: 10 }} size={32} set='light' />
  </TouchableOpacity>
)

const HeaderTitle = ({ commercialName }) => {

  return (
    <View style={{ flex: 1, flexDirection: 'row', marginTop: 13 }}>
      <Text style={styles.displayName}>{commercialName}</Text>
    </View>

  );
};

const _renderLabel = ({ route, focused }) => { if (focused) { return <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, minWidth: 100, textAlign: 'center' }}> {route.title} </Text>; } return <Text style={{ color: '#B0B0B0', fontSize: 15, minWidth: 100, textAlign: 'center' }}> {route.title} </Text>; }


export default function Profile({ route, navigation }) {
  const { userId } = route.params;
  const layout = useWindowDimensions();

  navigation.setOptions({ headerRight: () => <HeaderRight navigation={navigation}/> })
 

  Keyboard.dismiss()

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'A propos' },
    { key: 'second', title: 'Photos' },
    { key: 'third', title: 'Avis' },
  ]);

  const [name, onChangeName] = useState("");
  const [firstName, onChangeFirstName] = useState("");
  const [commercialName, setCommercialName] = useState("");
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [address, setAddress] = useState("");
  const [description, onChangeDescription] = useState("");
  const [job, setJob] = useState('')
  const [age, setAge] = useState('')
  const [gallery, setGallery] = useState('');
  const [isPro, setIsPro] = useState('');
  const [reviews, setReviews] = useState([]);
  const [directory, setDirectory] = useState([]);
  const [isInDirectory, setIsInDirectory] = useState(false);
  const [reviewsItems, setReviewsItems] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  navigation.setOptions({ headerTitle: () => <HeaderTitle commercialName={commercialName} /> })

  const fetchUser = async () => {
    getAvatar(userId).then((data) => {
      setAvatar({ uri: data });
    });

    getData('users', userId).then((data) => {
      onChangeName(data.name);
      onChangeFirstName(data.first_name);
      onChangeDescription(data.description)
      setCommercialName(data.commercial_name)
      setJob(data.job);
      setAddress(data.address)
      setIsPro(data.is_pro)
      setReviews(data.reviews)
      setDirectory(data.directory)
      let directoryList = data.directory ?? [];

      if(directoryList.includes(userId)){
        setIsInDirectory(true);
      }

      fetchReviewsItems(data.reviews).then((data) => {
        setReviewsItems(data)
      })

    });

    getGallery(userId).then((data) => {
      let images = [];
      data.forEach((item, i) => {
        images.push({ id: i, image: item })
      })

      setGallery(images)

    });


  };

  useEffect(() => {
    fetchUser();
  }, [refreshing])


  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <About name={firstName} avatar={avatar} job={job} description={description} age={age} userId={userId} navigation={navigation} isPro={isPro} />;
      case 'second':
        return <Photos gallery={gallery} />;
      case 'third':
        return <Reviews userId={userId} navigation={navigation} reviews={reviewsItems} />;
      default:
        return null;
    }
  };

  const About = (props) => {

    let btnTxt = 'Contacter';
    if (firebaseAuth.currentUser !== null && props.userId === firebaseAuth.currentUser.uid) {
      btnTxt = 'Modifier';
    }

    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>

            <View style={{ flex: 1 }}>
              <Text style={styles.infoTitle}>Métier</Text>
              <Text style={styles.infoValue}>{props.job}</Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text>{props.description}</Text>
          </View>

          <GradientButton
            style={{ marginVertical: 8, marginBottom: 20, marginTop: 20 }}
            text={btnTxt}
            textStyle={{ fontSize: 17, fontWeight: 'bold' }}
            gradientBegin="#FB724C"
            gradientEnd="#FE904B"
            gradientDirection="diagonal"
            height={58}
            radius={14}
            impact
            impactStyle='Light'
            onPressAction={() => {
              if (props.userId === firebaseAuth.currentUser.uid) {
                props.navigation.navigate('MyInfos', { isPro: props.isPro, fromSignup: false })
              } else {
                const chatterID = firebaseAuth.currentUser.uid;
                const chateeID = props.userId;
                const chatIDpre = [];
                chatIDpre.push(chatterID);
                chatIDpre.push(chateeID);
                chatIDpre.sort();

                props.navigation.navigate('ChatDetails', { item: { name: props.name, avatar: props.avatar }, chatId: chatIDpre.join('_') })
              }
            }}
          />
        </ScrollView>
      </SafeAreaView>
    )
  };

  const Reviews = (props) => {

    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <SectionList
            ItemSeparatorComponent={ItemSeparator}
            sections={props.reviews}
            keyExtractor={(item, index) => item + index.toString()}
            renderItem={({ item, section }) => {

              return <ItemReview item={item} />
            }
            }
          />


        </ScrollView>
        <AddReviewBtn userId={props.userId} navigation={props.navigation} />
      </SafeAreaView>
    )
  };

  const Photos = (props) => (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <FlatList
          data={props.gallery}
          numColumns={2}
          renderItem={({ item }) => <ItemPhoto item={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const saveDirectory = () => {

    if(firebaseAuth.currentUser === null) return null;
    
    let directoryList = directory ?? [];

    if(!directoryList.includes(userId)){
      directoryList.push(userId);

      setDirectory(directoryList)
      setIsInDirectory(true);
  
      updateData('users', firebaseAuth.currentUser.uid, { directory: directoryList });
      //TODO mettre toast confirmation
    }else{
      directoryList = directoryList.filter(item => item !== userId)

      setDirectory(directoryList)
      setIsInDirectory(false);
  
      updateData('users', firebaseAuth.currentUser.uid, { directory: directoryList });
      //TODO mettre toast confirmation
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <View>
        {firebaseAuth.currentUser !== null && firebaseAuth.currentUser.uid !== userId && <View style={{ flex: 1, position: 'absolute', top: 5, right: 0, zIndex: 100 }}>
          <TouchableOpacity onPress={() => { saveDirectory() }}>
            <Text style={{ marginRight: 10 }}>
              <Bookmark style={{ color: 'white', marginRight: 10 }} set={isInDirectory ? "bold" : "light"} size={32} />
            </Text>
          </TouchableOpacity>
        </View>}


      </View>
      <Image source={avatar} resizeMode="cover" style={styles.profileImage} />


      <View style={styles.profileContainer}>

        <View style={styles.header}>
          
          <View style={{
            flexDirection: 'row', flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={styles.job}>4.4</Text>
            <Star style={{ color: '#A1A1A1' }} size={14} set='bold' />
            <Text> | {address.country}</Text>
          </View>
        </View>


        <TabView
          style={styles.tabs}
          renderTabBar={props => (
            <TabBar
              {...props}

              indicatorStyle={{ backgroundColor: 'white' }}
              renderLabel={_renderLabel}
              style={{ backgroundColor: 'white', elevation: 0 }}
            />
          )}

          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
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
  tabs: {
    flex: 7,
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
    height: 100,
    textAlign: 'center',

  },
  displayName: {
    color: '#2B2B2B',
    fontSize: 20,
    fontWeight: 'bold',
 
  },
  job: {
    color: '#2B2B2B',
    fontSize: 14,
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    marginTop: -100
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
