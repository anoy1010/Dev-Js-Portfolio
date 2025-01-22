import React, { useState, useCallback, useEffect } from 'react';
import { Dimensions, SafeAreaView, SectionList, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Star } from 'react-native-iconly'
const defaultAvatar = require('../assets/images/default_avatar.jpg')
import { getData, getAvatar, getArtisans, getUserLocalData } from '../firebase';
import { documentId } from 'firebase/firestore';
import moment from 'moment/min/moment-with-locales'
moment.locale('fr');


const DirectoryItem = ({ item, navigation }) => {
  let itemImage = {
    width: 70,
    height: 70,
    borderRadius: 100
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Profile', { userId: item.id })}>
      <View style={styles.item} >
        <Image style={itemImage} source={item.image} />
        <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
          <Text style={{ fontSize: 12, color: '#A1A1A1', }}>{item.commercialName} </Text>
        </View>

      </View>
    </TouchableOpacity>
  )
};

const Directory = (props) => (
  <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
    <SectionList
      ItemSeparatorComponent={ItemSeparator}
      sections={props.items}
      keyExtractor={(item, index) => item + index.toString()}
      renderItem={({ item, section }) => {

        return <DirectoryItem item={item} />
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

export default function MyDirectory({ navigation }) {
  const [user, setUser] = useState();
  const [directoryList, setDirectoryList] = React.useState([]);

  const fetchArtisansItems = async (items, title, type) => {
    let artisansList = [];

    await items.forEach((doc) => {
      let user = doc.data();
      if (user) {
        artisansList.push({ id: doc.id, job: user.job, commercialName: user.commercial_name, image: '', location: user.address.country })
      }
    });

    for (const artisan in artisansList) {
      await getAvatar(artisansList[artisan].id).then((avatar) => {
        artisansList[artisan].image = { uri: avatar }
      }).catch(() => {
        artisansList[artisan].image = defaultAvatar
      })
    }

    return [{
      title: 'Annuaire',
      data: artisansList
    }];

  }

  const fetchDirectory = async () => {
    if (!user.directory) {
      return null;
    }

    await getArtisans([
      {
        field: 'is_pro',
        operator: '==',
        value: true
      },
      {
        field: documentId(),
        operator: 'in',
        value: user.directory ?? []

      }
    ]
    ).then((data) => {
      fetchArtisansItems(data, 'Mon annuaire', 'directory').then((items) => {
        console.log('ANNAUAIRE')
        console.log(items);
        setDirectoryList(items);
      })
    });
  };

  useEffect(() => {
    getUserLocalData().then(data => {
      console.log(data)
      setUser(data)
    })
  }, [])

  useEffect(() => {
    fetchDirectory()
  }, [user])

  return (
    <View style={styles.container}>
      <Directory items={directoryList} />
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
