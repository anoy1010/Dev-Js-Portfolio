import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, SectionList, TouchableOpacity, ActivityIndicator, Linking } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import { Location, User, ChevronRight, Star, Image2, TicketStar, Logout, People, Document } from 'react-native-iconly'
const defaultAvatar = require('../assets/images/default_avatar.jpg')
import { getUserLocalData, firebaseAuth, getAvatar } from '../firebase';


const iconMenu = (icon) => {
  if (icon === 'User') {
    return <User style={{ flex: 1, color: '#2B2B2B' }} size={17} set='bold' />
  }

  if (icon === 'Star') {
    return <Star style={{ flex: 1, color: '#2B2B2B' }} size={17} set='bold' />
  }

  if (icon === 'Image2') {
    return <Image2 style={{ flex: 1, color: '#2B2B2B' }} size={17} set='bold' />
  }

  if (icon === 'People') {
    return <People style={{ flex: 1, color: '#2B2B2B' }} size={17} set='bold' />
  }

  if (icon === 'TicketStar') {
    return <TicketStar style={{ flex: 1, color: '#2B2B2B' }} size={17} set='bold' />
  }

  if (icon === 'Document') {
    return <Document style={{ flex: 1, color: '#2B2B2B' }} size={17} set='bold' />
  }

  if (icon === 'Logout') {
    return <Logout style={{ flex: 1, color: '#2B2B2B' }} size={17} set='bold' />
  }
};

export default function MyProfile({ navigation }) {
  const [name, onChangeName] = useState("");
  const [firstName, onChangeFirstName] = useState("");
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [address, setAddress] = useState("");
  const [isPro, setIsPro] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const MENU = [{
    title: 'Menu',
    data: [
      {
        id: 1,
        title: 'Mes informations',
        icon: 'User',
        redirect: 'MyInfos',
        show: ['customer', 'pro']
  
      },
      {
        id: 2,
        icon: 'Star',
        title: 'Mes avis',
        redirect: 'MyReviews',
        show: ['pro']
      },
      {
        id: 3,
        icon: 'People',
        title: isPro ? 'Mémos' : 'Mon annuaire',
        redirect: 'MyDirectory',
        show: ['customer', 'pro']
      },
      {
        id: 4,
        icon: 'Document',
        title: 'Mes annonces',
        redirect: 'MySearches',
        show: ['customer']
      },
      {
        id: 5,
        icon: 'Image2',
        title: 'Ma galerie photos',
        redirect: 'MyGallery',
        show: ['pro']
      },
      /* {
         id: 6,
         icon: 'TicketStar',
         title: 'Mon abonnement',
         redirect: 'MySubscription',
         show: ['pro']
       },*/
      {
        id: 7,
        icon: 'Logout',
        title: 'Deconnexion',
        redirect: 'Logout',
        show: ['customer', 'pro']
      }
    ]
  }];

  const fetchUser = async () => {
    getUserLocalData().then(data => {
      if(!data){
        setIsLoading(false)
      }else{
        getAvatar(firebaseAuth.currentUser.uid).then(url => {
          setAvatar( { uri: url });
        }).catch(e => {
          setAvatar(defaultAvatar)
        })
        
        onChangeName(data.name);
        onChangeFirstName(data.first_name);
        setAddress(data.address)
        setIsPro(data.is_pro)
        setIsLoading(false)
      }
      
    })
  };

  useEffect(() => {
    fetchUser();
  }, [])

  const ItemMenu = ({ navigation, item }) => {

    return (
      <TouchableOpacity onPress={() => { navigation.navigate(item.redirect, { isPro: isPro, fromSignup: false }) }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, marginTop: 20 }} >
          {iconMenu(item.icon)}
          <Text style={{ flex: 2, textAlign: 'left' }}> {item.title}</Text>
          <ChevronRight style={{ flex: 1, color: '#2B2B2B' }} size={17} set='light' />
        </View>
      </TouchableOpacity>
    );
  };


  const ItemSeparator = () => {
    return (
      //Item Separator
      <View style={styles.listItemSeparatorStyle} />
    );
  };

  const Menu = ({ navigation }) => (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
      <SectionList
        ItemSeparatorComponent={ItemSeparator}
        sections={MENU}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({ item, section }) => {
          let user = isPro ? 'pro' : 'customer';
          if(!item.show.includes(user)){ return null;}
          return <ItemMenu item={item} navigation={navigation} />
        }
        }


      />

<TouchableOpacity onPress={() => {
      Linking.openURL('https://lesartisansdici.net/cgu-application-les-artisans-dici/').catch((err) =>
        console.error('An error occurred', err),
      );
    }}>
<Text style={{textAlign: 'center', marginBottom: 20}}>Conditions générales d'utilisation</Text>
    </TouchableOpacity>

    </SafeAreaView>
  );

  const ProfileButton = ({ navigation }) => {
    if (!isPro) {
      return null
    }

    return (<GradientButton
      style={{ marginVertical: 8, marginBottom: 10 }}
      text="Voir mon profil"
      textStyle={{ fontSize: 17, fontWeight: 'bold' }}
      gradientBegin="#FB724C"
      gradientEnd="#FE904B"
      gradientDirection="diagonal"
      height={58}
      radius={14}
      impact
      impactStyle='Light'
      onPressAction={() => navigation.navigate('Profile', { userId: firebaseAuth.currentUser.uid })}
    />)
  }

  return (
    <SafeAreaView style={styles.container}>

      {isLoading && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size="large" color="#FB724C" /><Text>Chargement</Text></View>}

      {!isLoading && <View style={{flex: 1}}><View style={{ flexDirection: 'row', marginTop: 13, alignItems: 'center' }}>
        <Image style={styles.itemAvatar} source={avatar} />
        <View>
          <Text style={{ color: '#2B2B2B', fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginTop: 5 }}>{firstName} {name}</Text>
          <Text style={{ color: '#A1A1A2', fontSize: 17, marginLeft: 10 }}><Location style={{ color: '#A1A1A2' }} size={17} set='light' /> {address.country}</Text>
        </View>
      </View>

      <View style={{ flex: 2, marginTop: 13 }}>

        <Menu navigation={navigation} />

      </View>
      <ProfileButton navigation={navigation} />
      </View>}


    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10
  },
  listItemSeparatorStyle: {
    height: 1,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
  itemAvatar: {
    width: 65,
    height: 65,
    borderRadius: 100
  },
  subtitle: {
    margin: 10,
    color: '#7A7A7A',
    fontSize: 17
  },
  inputContainer: {
    margin: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 14,
    color: '#2B2B2B'
  },
  submit: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    marginVertical: 8,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#fff',
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
  google: {
    backgroundColor: '#fff',
    borderColor: '#B0B0B0',
    color: '#2B2B2B'
  },
  googleText: {
    color: '#2B2B2B',
  },
  logoGoogle: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  icon: {
    marginRight: 10
  },
  inputLabel: {
    color: '#AEAEB2',
    fontSize: 14,
    position: 'absolute',
    top: 5,
    left: 10
  },
  inputIcon: {
    color: '#AEAEB2',
    fontSize: 24,
    position: 'absolute',
    top: 15,
    right: 15
  },
  input: {
    height: 40,
    marginTop: 20,
    borderWidth: 0,
    padding: 10,

  },
  orText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17
  },
  forgetPasswordText: {
    textAlign: 'center',
    fontSize: 17,
    color: '#8E8E93',
    fontSize: 13,
    marginTop: 10
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
  }

});
