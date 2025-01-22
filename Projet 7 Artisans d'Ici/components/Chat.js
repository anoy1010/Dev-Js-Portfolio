import React, { useState, useCallback, useEffect } from 'react';
import { RefreshControl, Dimensions, TextInput, SafeAreaView, SectionList, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import { Star, Search } from 'react-native-iconly'
import { db, firebaseAuth, getAvatar, getData } from '../firebase';
import { getDocs, query, where, collection, documentId } from 'firebase/firestore';
const defaultAvatar = require('../assets/images/default_avatar.jpg')
import LottieView from 'lottie-react-native';
const ItemSeparator = () => {
  return (
    //Item Separator
    <View style={styles.listItemSeparatorStyle} />
  );
};

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


export default function Chat({ navigation }) {
  if(firebaseAuth.currentUser === null){
    navigation.navigate('Signup', {isPro: false})
  }
  
  const [search, onChangeSearch] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const fetchChannelsItems = async (items) => {
    let channelList = [];
    let channelIds = []

    await items.forEach((doc) => {
      let docId = doc.id;
      docId = docId.replace(firebaseAuth.currentUser.uid, '')
      docId = docId.replace('_', '')
      channelIds.push({id: docId, channelId: doc.id, data: doc.data()});
    });

    console.log(channelIds)

    for (const channel in channelIds) {
      await getAvatar(channelIds[channel].id).then((avatar) => {
        channelIds[channel].avatar = { uri: avatar }
      }).catch(() => {
        channelIds[channel].avatar = defaultAvatar
      })

      await getData('users', channelIds[channel].id).then((data) => {
        channelIds[channel].name = data.first_name
      })

      channelIds[channel].review = channelIds[channel].data.messages.reverse()[0].text;
      //channelIds[channel].date = channelIds[channel].data.messages.reverse()[0].createdAt.toDate();
    }

    return [{
      title: 'Chat',
      data: channelIds
    }];

  }

  const getChannels = async () => {
    const channelRef = collection(db, "chat");

    const q = query(channelRef, where(documentId(), "<=", firebaseAuth.currentUser.uid + '~'));

    const querySnapshot = await getDocs(q);

    return new Promise(function (resolve, reject) {
      resolve(querySnapshot)
    }).catch((error) => {
      // Uh-oh, an error occurred!
      reject(error)
    });
  };


  useEffect(() => {
    getChannels().then((data) => {
      fetchChannelsItems(data).then((items) => {
        console.log('LIST CHAT');
        console.log(items)
        setMessages(items)
      })


    }).catch(error => {

    })

  }, [refreshing])



  const ItemMessage = ({ item, navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ChatDetails', { item: item, chatId: item.channelId })}>
      <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, marginTop: 10 }} >
        <View style={{ flex: 1 }}>
          <Image style={styles.itemAvatar} source={item.avatar} />
        </View>
        <View style={{ flex: 3 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#2B2B2B' }}>{item.name}</Text>
          <Text style={{ fontSize: 18, color: '#4F4F4F' }}>{item.review}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 13, color: '#4F4F4F' }}>{item.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <SafeAreaView style={{ justifyContent: 'center', padding: 10 }}>
        <View style={{  alignItems: 'center'}}>
        
        {messages.length === 0 && <View style={{alignItems: 'center'}}><Text>Pas de messages</Text><TouchableOpacity onPress={() => navigation.navigate('SearchBar')}><GradientButton
                      style={{ width:200, marginVertical: 8, marginBottom: 20 }}
                      text="Rechercher un artisan"
                      textStyle={{ fontSize: 17, fontWeight: 'bold' }}
                      gradientBegin="#FB724C"
                      gradientEnd="#FE904B"
                      gradientDirection="diagonal"
                      height={58}
                      radius={14}
                      impact
                      impactStyle='Light'
                      onPressAction={() => navigation.navigate('SearchBar')}
                    /></TouchableOpacity></View>}


        </View>
      
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
          sections={messages}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={({ item, section }) => {
            return <ItemMessage item={item} navigation={navigation} />
          }
          }

        />
      </ScrollView>
       
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  itemAvatar: {
    width: 58,
    height: 58,
    borderRadius: 100
  },
  inputIcon: {
    color: '#AEAEB2',
    fontSize: 24,
    position: 'absolute',
    top: 15,
    left: 15
  },
  inputContainer: {
    margin: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 14,
    color: '#2B2B2B'
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 0,
    padding: 10,
    paddingLeft: 40

  },
  listItemSeparatorStyle: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
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
