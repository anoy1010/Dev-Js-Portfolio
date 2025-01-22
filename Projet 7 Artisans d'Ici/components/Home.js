import React, { useState, useEffect, useCallback } from 'react';
import { Image, ActivityIndicator, FlatList, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, Linking, TextInput, RefreshControl } from 'react-native';
import { Search, Location, Bookmark } from 'react-native-iconly'
import { getArtisans, getAvatar, getUserLocalData, getWordpressPosts } from '../firebase';
import { documentId } from 'firebase/firestore';
const defaultAvatar = require('../assets/images/default_avatar.jpg')
const imgBlog = require('../assets/images/blog.png')
const imgFacebook = require('../assets/images/facebook.png')
import { decode } from 'html-entities';
import { ScrollView } from 'react-native-gesture-handler';
import GradientButton from 'react-native-gradient-buttons';
import { Entypo } from '@expo/vector-icons';
import { BannerAd, BannerAdSize } from '@react-native-admob/admob';

const JOBS_CREATORS = [
  // 'Bijoutier-joaillier / Bijoutière-joallière',
  // 'Bottier / Bottière',
  // 'Bronzier / Bronzière',
  // 'Céramiste à la main',
  'Costumière / Costumier',
  // 'Coutelier / Coutelière',
  // 'Designer de produit de lunetterie',
  // 'Designer textile',
  // 'Doreur / Doreuse',
  // 'Facteur / Factrice d\'orgues',
  // 'Facteur / Factrice de piano',
  // 'Ferronnier / Ferronnière d\'art',
  // 'Graveur',
  // 'Luthier / Luthière',
  // 'Maroquinier / Maroquinière',
  // 'Menuisier / Menuisière',
  // 'Miroitier / Miroitière',
  // 'Modéliste / Prototypiste',
  // 'Modiste - Chapelier / Chapelière',
  // 'Peintre en décors',
  // 'Sculpteur',
  // 'Staffeur ornemaniste / Staffeuse ornemaniste',
  // 'Styliste',
  // 'Tailleur / Tailleuse de pierre',
  // 'Tapissier / Tapissière d\'ameublement',
  // 'Verrier / Verrière au chalumeau',
  // 'Vitrailliste',
  'Autre'
];

const JOBS_REPAIRMAN = [
  // 'Bijoutier-joaillier / Bijoutière-joallière',
  // 'Bronzier / Bronzière',
  // 'Cordonnier / Cordonnière',
  // 'Coutelier / Coutelière',
  // 'Doreur / Doreuse',
  // 'Ebéniste',
  // 'Facteur / Factrice d\'orgues',
  // 'Facteur / Factrice de piano',
  // 'Ferronnier / Ferronnière d\'art',
  // 'Graveur',
  // 'Horloger / Horlogère',
  // 'Luthier / Luthière',
  // 'Menuisier / Menuisière',
  // 'Miroitier / Miroitière',
  // 'Modéliste / Prototypiste',
  // 'Modiste - Chapelier / Chapelière',
  // 'Réparateur / Réparatrice d\'instruments de musique',
  // 'Restaurateur d\'œuvres d\'art',
  // 'Retoucheuse / Retoucheur',
  // 'Serrurier dépanneur',
  // 'Staffeur ornemaniste / Staffeuse ornemaniste',
  // 'Tapissier / Tapissière d\'ameublement',
  'Autre'
];

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

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

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

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
      width: Dimensions.get('window').width - 40,
      height: 225,
      borderRadius: 14
    }
  }
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Profile', { userId: item.id })}>
      <View style={styles.item} >
        <Image style={itemImage} source={item.image} />
        <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
          <Text style={styles.displayName}>{item.commercialName} </Text>
        </View>
        <View style={styles.localityContainer}>

          <Text style={{ color: '#A1A1A2', fontSize: 14 }}>{item.job} </Text>

        </View>
      </View>
    </TouchableOpacity>
  )
};

const WordpressItem = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => {
      Linking.openURL(item.link).catch((err) =>
        console.error('An error occurred', err),
      );
    }}>
      <View style={{ backgroundColor: '#fff', margin: 5, borderRadius: 14, borderWidth: 1, borderColor: '#E5E5E5' }} >

        <Image style={{
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          height: 225,
          padding: 10
        }} source={{ uri: item.image }} />
        <View style={{ margin: 10 }}>
          <Text style={styles.title}>{decode(item.title)}</Text>
        </View>
      </View>

    </TouchableOpacity>
  )
};

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

  return artisansList;

}

export default function Home({ navigation }) {
  const [user, setUser] = React.useState(null)

  const [creators, setCreators] = React.useState([]);
  const [repairman, setRepairman] = React.useState([]);
  const [search, onChangeSearch] = React.useState("");
  const [directoryList, setDirectoryList] = React.useState([]);

  const [lastDoc, setLastDoc] = useState(null);
  const [newsfeed, setNewsfeed] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setCreators([])
    setRepairman([]);
    setDirectoryList([]);
    setNewsfeed([]);
    setLastDoc(null)
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const fetchArtisans = async (title, type) => {
    console.log('GET ARTISANS');
    let creators_list = shuffle(JOBS_CREATORS);
    creators_list = creators_list.slice(0, 10);

    let repairman_list = shuffle(JOBS_REPAIRMAN);
    repairman_list = repairman_list.slice(0, 10);

    if(!creators_list.includes('Autre')){
      creators_list.push('Autre');
    }

    if(!repairman_list.includes('Autre')){
      repairman_list.push('Autre');
    }

    let filters = [
      {
        field: 'is_pro',
        operator: '==',
        value: true
      }
    ];

    if (type === 'creators') {
      filters.push({
        field: 'job',
        operator: 'in',
        value: creators_list
      })
    }

    if (type === 'repairman') {
      filters.push({
        field: 'job',
        operator: 'in',
        value: repairman_list
      })
    }

    console.log(filters)

    await getArtisans(filters).then((data) => {
      fetchArtisansItems(data, title, type).then((items) => {
        console.log('GET ARTISANS');
        console.log(items);
        if (type === 'creators') {
          setCreators(items);
        } else {
          setRepairman(items);
        }
      })
    });
  };

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
        setDirectoryList(items);
      })
    });
  };

  const fetchWordpressPosts = async (items) => {
    let posts = [];

    await items.forEach((doc) => {
      let post = doc.data();
      if (post) {
        setNewsfeed(oldArray => [...oldArray, post])
      }
    });

    return posts;

  };

  const fetchWordpress = async () => {

    await getWordpressPosts(!lastDoc, lastDoc, 5).then((result) => {
      setLastDoc(result.lastVisible);

      fetchWordpressPosts(result.data)
    })
  };

  useEffect(() => {
    getUserLocalData().then(data => {
      setUser(data)

      fetchArtisans('Artisans créateurs', 'creators')
      fetchArtisans('Artisans dépanneurs', 'repairman')

    })
  }, [])

  useEffect(() => {
    fetchArtisans('Artisans créateurs', 'creators')
  }, [creators])

  useEffect(() => {
    fetchArtisans('Artisans dépanneurs', 'repairman')
  }, [repairman])

  useEffect(() => {
    fetchDirectory()
  }, [user])

  return (
    <SafeAreaView >

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

      <ScrollView
        style={{ margin: 10, marginBottom: 100 }}
      
      >

        {(directoryList.length === 0 && creators.length === 0 && repairman.length === 0 && newsfeed.length === 0) && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size="large" color="#FB724C" /><Text>Chargement</Text></View>}

        {directoryList.length > 0 && <View style={{ backgroundColor: '#fff', borderRadius: 14, borderWidth: 1, borderColor: '#E5E5E5', marginBottom: 5 }}>
          <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', margin: 10 }}>
            <Text>
              <Bookmark style={{ color: '#FD8D4B', marginRight: 5 }} set="bold" size={20} />
            </Text>
            <Text style={styles.title}> Mon annuaire</Text>
          </View>

          <FlatList
            data={directoryList}
            horizontal={directoryList.length > 1}
            renderItem={({ item }) => <DirectoryItem item={item} navigation={navigation} />}
          />
          <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
            <Text style={{ backgroundColor: '#FD8D4B', color: '#fff', padding: 10, borderRadius: 100, fontSize: 12 }}>Voir tout</Text>
          </View>
        </View>
        }

        {creators.length > 0 && <View style={{ backgroundColor: '#fff', borderRadius: 14, borderWidth: 1, borderColor: '#E5E5E5', marginBottom: 5 }}>
          <View style={{ margin: 10 }}>
            <Text style={styles.title}>Artisans créateurs</Text>
          </View>

          <FlatList
            data={creators}
            horizontal={creators.length > 1}
            renderItem={({ item }) => <ArtisansItem item={item} navigation={navigation} horizontal={creators.length > 1} />}
          />
        </View>
        }

        <View style={{ flex: 1, marginBottom: 5 }}>
          <TouchableOpacity
            style={[styles.submit, styles.facebook]}
            onPress={() => {Linking.openURL("https://www.facebook.com/Les-artisans-dici-110262020694976").catch((err) =>
            console.error('An error occurred', err),
          );}}
            underlayColor='#fff'
          >
            <Entypo style={styles.icon} name="facebook-with-circle" size={24} color="white" />
            <Text style={[styles.submitText, styles.facebookText]}>Nous rejoindre sur Facebook</Text>
          </TouchableOpacity>
          <Image style={{ borderRadius: 14, width: Dimensions.get('window').width - 20 }} source={imgFacebook} />
        </View>


        {repairman.length > 0 && <View style={{ backgroundColor: '#fff', borderRadius: 14, borderWidth: 1, borderColor: '#E5E5E5', marginBottom: 5 }}>
          <View style={{ margin: 10 }}>
            <Text style={styles.title}>Artisans dépanneurs</Text>
          </View>

          <FlatList
            data={repairman}
            horizontal={repairman.length > 1}
            renderItem={({ item }) => <ArtisansItem item={item} navigation={navigation} horizontal={repairman.length > 1} />}
          />
        </View>
        }

        <View style={{ flex: 1, marginBottom: 5 }}>
          <GradientButton
            style={{ zIndex: 100, width: Dimensions.get('window').width - 40, position: "absolute", marginVertical: 8, marginBottom: 10, top: 70 }}
            text="Voir le blog"
            textStyle={{ fontSize: 17, fontWeight: 'bold' }}
            gradientBegin="#FB724C"
            gradientEnd="#FE904B"
            gradientDirection="diagonal"
            height={58}
            radius={14}
            impact
            impactStyle='Light'
            onPressAction={() => {
              Linking.openURL("https://lesartisansdici.net").catch((err) =>
                console.error('An error occurred', err),
              );
            }}
          />
          <Image style={{ borderRadius: 14, width: Dimensions.get('window').width - 20 }} source={imgBlog} />
        </View>


      <View style={{ flex: 1, marginBottom: 5 }}>
        <BannerAd size={BannerAdSize.BANNER} unitId="ca-app-pub-6580569087131534/9162304451" />
      </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FD8D4B'
  },
  subtitle: {
    marginBottom: 10,
    marginLeft: 10,
    color: '#7A7A7A',
    fontSize: 17
  },
  title: {

    color: '#2B2B2B',
    fontSize: 18,
    fontWeight: 'bold',

  },
  inputIcon: {
    color: '#AEAEB2',
    fontSize: 24,
    position: 'absolute',
    top: 15,
    left: 15
  },
  inputContainer: {
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 14,
    color: '#2B2B2B',
    borderWidth: 1,
    borderColor: '#A1A1A1'
  },
  input: {
    height: 40,
    color: '#2B2B2B',
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
  submit: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginVertical: 8,
    borderRadius: 14,
    position: "absolute",
    zIndex: 100,
    width: Dimensions.get('window').width - 40,
    top: 70
  },
  submitText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 15
  },
  facebook: {
    backgroundColor: '#3B5998',
  },
  facebookText: {
    color: '#fff',
  },
  icon: {
    marginRight: 10
  },
});
