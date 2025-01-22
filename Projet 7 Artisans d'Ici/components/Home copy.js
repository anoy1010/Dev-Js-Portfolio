import React, { useState, useEffect, useRef } from 'react';
import { Image, SectionList, FlatList, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, Linking, TextInput } from 'react-native';
import { Search, Location } from 'react-native-iconly'
import { getArtisans, getAvatar, getWordpressPosts } from '../firebase';
const defaultAvatar = require('../assets/images/default_avatar.jpg')
import { decode } from 'html-entities';

const shuffle = (arra1) => {
  var ctr = arra1.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

const groupBy = (list, keyGetter) => {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}


const ArtisansItem = ({ item, navigation, horizontal }) => {
  let itemImage = {
    width: 170,
    height: 125,
    borderRadius: 14
  }
  if (horizontal === false) {
    itemImage = {
      width: Dimensions.get('window').width - 20,
      height: 225,
      borderRadius: 14
    }
  }
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Profile', { userId: item.id })}>
      <View style={styles.item} >
        <Image style={itemImage} source={item.image} />
        <Text style={styles.displayName}>{item.commercialName} </Text>
        <View style={styles.localityContainer}>

          <Text style={{ color: '#A1A1A2', fontSize: 14 }}><Location style={{ color: '#A1A1A2' }} size={14} /> {item.location} </Text>

        </View>
      </View>
    </TouchableOpacity>
  )
};

const WordpressItem = ({ item, navigation }) => {

  return (
    <TouchableOpacity onPress={() => {
      Linking.openURL(item.link).catch((err) =>
        console.error('An error occurred', err),
      );
    }}>
      <View style={styles.item} >
        <Image style={{
          width: Dimensions.get('window').width - 20,
          height: 225,
          borderRadius: 14
        }} source={{ uri: item.image }} />
      </View>
    </TouchableOpacity>
  )
};

const fetchWordpressPosts = async (items) => {
  let posts = [];

  await items.forEach((doc) => {
    let post = doc.data();
    if (post) {
      posts.push({
        type: 'post',
        title: decode(post.title),
        horizontal: false,
        data: [post]
      })
    }
  });

  return posts;

};

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

  const grouped = groupBy(artisansList, artisanList => artisanList.job);

  let jobsList = [];
  for (const [key, value] of grouped) {
    jobsList.push({
      title: key,
      type: 'artisan',
      horizontal: value.length > 1 ? true : false,
      data: value
    })
  }

  return jobsList;

}

export default function Home({ navigation }) {
  const [newsfeed, setNewsfeed] = React.useState([]);
  const [search, onChangeSearch] = React.useState("");

  const fetchArtisans = async () => {

    await getArtisans([
      {
        field: 'is_pro',
        operator: '==',
        value: true

      }
    ]

    ).then((data) => {
      fetchArtisansItems(data).then((items) => {
        fetchWordpress(items).then(() => {

        })

      })
    });
  };

  const fetchWordpress = async (items) => {
    await getWordpressPosts().then((posts) => {
      fetchWordpressPosts(posts).then((result) => {

        setNewsfeed(result.concat(items).reverse());
      })
    })
  };

  useEffect(() => {
    fetchArtisans().then(() => {
      console.log('STEP 2')

    });
  }, [])

  return (
    <View><SafeAreaView>
      <View style={styles.inputContainer}>
        <Search style={styles.inputIcon} size={24} set='light' />
        <TextInput
          onTouchStart={() => navigation.navigate('SearchBar')}
          placeholder="Rechercher un artisan"
          style={styles.input}
          onChangeText={onChangeSearch}
          value={search}
        />
      </View>
      <SectionList
        sections={newsfeed}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({ item, section }) => {

          if (section.type === 'artisan') {
            return (
              <>

                <FlatList
                  data={section.data}
                  horizontal={section.horizontal}
                  renderItem={({ item }) => <ArtisansItem item={item} navigation={navigation} horizontal={section.horizontal} />}
                />
              </>
            )
          } else {
            return <WordpressItem item={item} navigation={navigation} />
          }
        }
        }
        renderSectionHeader={({ section }) => {

          return (
            <>
              <Text style={styles.title}>{section.title}</Text>

            </>
          )
        }}
      />
    </SafeAreaView>
    </View>
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
    marginTop: 10,
    marginLeft: 10,
    color: '#2B2B2B',
    fontSize: 18,
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
  },

  displayName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2B2B2B',
    marginTop: 5,
    marginLeft: 5
  },
  localityContainer: {
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
});
