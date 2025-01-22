import algoliasearch from 'algoliasearch/lite';
import React, { useState, useEffect, useRef } from 'react';
import { Image, SectionList, FlatList, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Search, ChevronRight } from 'react-native-iconly'
import { getArtisans, getAvatar } from '../firebase';
const defaultAvatar = require('../assets/images/default_avatar.jpg')
import { InstantSearch, Configure } from 'react-instantsearch-native';
import SearchBox from './algolia/SearchBox';
import InfiniteHits from './algolia/InfiniteHits';
import { SafeAreaView } from 'react-native-safe-area-context';

const searchClient = algoliasearch(
  'VA5TGHC25I',
  '0323fa64a407817bd8d978e4d674940e'
);


export default function SearchBar({ navigation }) {
  const [search, onChangeSearch] = React.useState("");
  const [artisans, setArtisans] = React.useState();

  navigation.setOptions({ headerShown: false })
  



  return (
    <SafeAreaView>
       <InstantSearch
            searchClient={searchClient}
            indexName="users"
          >
            <Configure filters="is_pro = 1"/>
            <SearchBox navigation={navigation} autofocus={true}/>
            <InfiniteHits navigation={navigation}/>
            
          </InstantSearch>
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
  center: {
    alignItems: 'center',
  },
  orange: {
    color: '#FB724C',
    fontWeight: 'bold'
  },
  displayName: {
    fontSize: 17,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#2B2B2B',
    marginTop: 5,
    marginLeft: 5
  },
  localityContainer: {
    alignItems: 'center',
  },
  locality: {
    fontSize: 14,
    color: '#A1A1A1'
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  item: {
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
