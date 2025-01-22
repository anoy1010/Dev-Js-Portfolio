import React, { useState, useEffect } from 'react';
import { useWindowDimensions, Dimensions, SafeAreaView, SectionList, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import Lightbox from 'react-native-lightbox-v2';
import { Plus, CloseSquare } from 'react-native-iconly'
import { launchImageLibrary } from 'react-native-image-picker';
import { uploadGallery, getGallery, deleteFile, firebaseAuth } from '../firebase';

export default function MyGallery({ navigation }) {
  const [gallery, setGallery] = useState('');

  const fetchGallery = async () => {
    getGallery(firebaseAuth.currentUser.uid).then((data) => {
      let images = [];
      data.forEach((item, i) => {
        images.push({ id: i, image: item })

      })

      setGallery(images)

    });
  };

  useEffect(() => {
    fetchGallery();
  }, [])

  const handlePicker = () => {
    launchImageLibrary({ includeBase64: true }, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {

        // here we can call a API to upload image on server
        uploadGallery(firebaseAuth.currentUser.uid, response.assets[0]).then(() => {
          fetchGallery();
        });
      }
    });
  };

  const HeaderRight = () => {
    return (
      <TouchableOpacity onPress={() => handlePicker()}>
        <Text style={{ marginRight: 20, marginTop: 10 }}><Plus style={{ color: '#2B2B2B' }} size={30} set='light' /></Text>
      </TouchableOpacity>
    );
  };

  const handleDeleteFile = (file) => {
    deleteFile(file).then(() => {
      fetchGallery();
    });
  }

  const ItemPhoto = (props) => (
    <View style={styles.item} >
      <TouchableOpacity style={{ position: 'absolute', zIndex: 100, zIndex: 100, top: 10, right: 10 }} onPress={() => handleDeleteFile(props.item.image)}>
        <CloseSquare style={{ color: 'white' }} size={32} set='bold' />
      </TouchableOpacity>

      <Image style={styles.itemPhoto} source={{ uri: props.item.image }} />

    </View>
  );

  const Photos = (props) => (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
      <FlatList
        data={props.gallery}
        numColumns={2}
        renderItem={({ item }) => <ItemPhoto item={item} />}
      />
    </SafeAreaView>
  );


  navigation.setOptions({ headerRight: () => <HeaderRight /> })





  return (
    <View style={styles.container}>
      <Photos gallery={gallery} />
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
