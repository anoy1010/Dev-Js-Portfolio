import React, { useState, useCallback, useEffect } from 'react';
import { Linking, useWindowDimensions, Dimensions, TextInput, SafeAreaView, SectionList, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import { Call, Paper } from 'react-native-iconly'
import { GiftedChat, Send  } from 'react-native-gifted-chat'
import { getData, firebaseAuth, getAvatar, addMessage } from '../firebase';
const defaultAvatar = require('../assets/images/default_avatar.jpg')

const HeaderTitle = ({ item }) => {

  return (
    <View style={{ flex: 1, flexDirection: 'row', marginTop: 13 }}>
      <Image style={styles.itemAvatar} source={item.avatar} />
      <Text style={{ marginLeft: 10, marginTop: 5 }}>{item.name}</Text>
    </View>

  );
};

const HeaderRight = ({ item }) => {
  return false;
  if (item.phone === null) {
    return false;
  }

  return (
    <TouchableOpacity onPress={() => { Linking.openURL(`tel:${item.phone}`) }}>
      <Text style={{ marginRight: 10 }}><Call style={{ color: '#2B2B2B' }} size={24} set='bold' /></Text>
    </TouchableOpacity>
  );
};



export default function ChatDetails({ route, navigation }) {
  const [messages, setMessages] = useState([]);
  const { item, chatId } = route.params;
  navigation.setOptions({ headerTitle: () => <HeaderTitle item={item} /> })
  navigation.setOptions({ headerRight: () => <HeaderRight item={item} /> })

  const [firstName, onChangeFirstName] = useState("");
  const [avatar, setAvatar] = useState(defaultAvatar);

  const fetchUser = async () => {
    getAvatar(firebaseAuth.currentUser.uid).then((data) => {
      setAvatar({ uri: data });
    });

    getData('users', firebaseAuth.currentUser.uid).then((data) => {
      onChangeFirstName(data.first_name);
    });
  };

  useEffect(() => {
    fetchUser().then(() => {
      getData('chat', chatId).then((data) => {
        if (data.messages && Object.keys(data.messages).length !== 0) {
         
          for (const key in data.messages.reverse()) {
            setMessages(prevArray => [...prevArray, {
              _id: data.messages[key]._id,
              createdAt: data.messages[key].createdAt.toDate(),
              text: data.messages[key].text,
              user: data.messages[key].user,
          }])
          }

          
        }

      });
    });
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const { _id, createdAt, text, user, } = messages[0]
    console.log('SEND MSG')
    console.log(chatId);
    addMessage('chat', chatId, { _id, createdAt, text, user })
  }, [])

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={messages => onSend(messages)}
      placeholder="Écrire un message ..."
      renderSend={(props) => (
        <Send
          {...props}
          containerStyle={{
            height: 60,
            width: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
         <Text>Envoyer</Text>
        </Send>
      )}
      user={{
        _id: firebaseAuth.currentUser.uid,
        name: firstName,
        avatar: avatar
      }}
      
    />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  itemAvatar: {
    width: 35,
    height: 35,
    borderRadius: 100
  },
});
