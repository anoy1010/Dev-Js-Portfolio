import React, { useState, useEffect, useRef } from 'react';
import { Image, SectionList, FlatList, ScrollView, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Search, Location } from 'react-native-iconly'
import { getArtisans, getAvatar } from '../firebase';
const defaultAvatar = require('../assets/images/default_avatar.jpg')

const Item = ({ item, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Profile', { userId: item.id })}>
    <View style={styles.item} >
      <Image style={styles.itemImage} source={item.image} />
      <Text style={styles.displayName}>{item.commercialName} </Text>
      <View style={styles.localityContainer}>
        <Location size={20} color="#A1A1A1" />
        <Text style={styles.locality}>{item.location} </Text>
      </View>
    </View>
  </TouchableOpacity>
);

const fetchArtisansItems = async (items) => {
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
    title: "Près de chez vous",
    horizontal: false,
    data: artisansList
  }];

}

const HeaderTitle = (props) => {

  return (
    <View style={{ flex: 1, flexDirection: 'row', marginTop: 13 }}>
      <Text style={{ marginLeft: 10, marginTop: 5 }}>{props.category}</Text>
    </View>

  );
};

export default function SearchCategory({ navigation, route }) {
  const [search, onChangeSearch] = React.useState("");
  const [artisans, setArtisans] = React.useState();
  const { category } = route.params;

  navigation.setOptions({ headerTitle: () => <HeaderTitle category={category} /> })

  const handleChangeSearch = (event) => {

    console.log('CHANGE ' + search)
    fetchArtisans();
  }

  const fetchArtisans = async () => {
    let filters = [
      {
        field: 'is_pro',
        operator: '==',
        value: true

      },
      {
        field: 'job',
        operator: '==',
        value: category 

      }
    ];

   
    console.log(filters)
    getArtisans(filters).then((data) => {

      fetchArtisansItems(data).then((items) => {
        console.log('ARTISANS')
        console.log(items);
        setArtisans(items)
      })
    });
  };

  useEffect(() => {
    fetchArtisans();
  }, [])

  return (
    <SafeAreaView>
        <ScrollView style={styles.container}>
            
            <SectionList
              sections={artisans}
              keyExtractor={(item, index) => item + index.toString()}
              renderItem={({ item, section }) => {
                return null;
              }
              }
              renderSectionHeader={({ section }) => (
                <>
                  <FlatList
                    data={section.data}
                    numColumns={2}
                    renderItem={({ item }) => <Item item={item} navigation={navigation} />}
                  />
                </>
              )}
            />
          </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  subtitle: {
    marginBottom: 10,
    marginLeft: 10,
    color: '#7A7A7A',
    fontSize: 17
  },
  title: {
    margin: 10,
    color: '#2B2B2B',
    fontSize: 34,
    fontWeight: 'bold'
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
  center: {
    alignItems: 'center',
  },
  orange: {
    color: '#FB724C',
    fontWeight: 'bold'
  },
  displayName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2B2B2B',
    marginTop: 5,
    marginLeft: 5
  },
  localityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locality: {
    fontSize: 14,
    color: '#A1A1A1'
  },
  itemImage: {
    width: 170,
    height: 125,
    borderRadius: 14
  },
  item: {
    margin: 10,
    width: 170
  },
  button: {
    width: '70%',
    height: 45,
  },
  text: {
    color: 'white',
    fontSize: 16
  },

  mainTitle: {
    textAlign: 'center',
    color: '#404040',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Italic'
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