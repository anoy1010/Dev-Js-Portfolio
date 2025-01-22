import React, { useState, useEffect, useRef } from 'react';
import { Image, SafeAreaView, FlatList, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Search, ChevronRight } from 'react-native-iconly'
import SwitchSelector from "react-native-switch-selector";
const JOBS_CREATORS = [
  'Bijoutier-joaillier / Bijoutière-joallière',
  'Bottier / Bottière',
  'Bronzier / Bronzière',
  'Céramiste à la main',
  'Costumière / Costumier',
  'Coutelier / Coutelière',
  'Designer de produit de lunetterie',
  'Designer textile',
  'Doreur / Doreuse',
  'Facteur / Factrice d\'orgues',
  'Facteur / Factrice de piano',
  'Ferronnier / Ferronnière d\'art',
  'Graveur',
  'Luthier / Luthière',
  'Maroquinier / Maroquinière',
  'Menuisier / Menuisière',
  'Miroitier / Miroitière',
  'Modéliste / Prototypiste',
  'Modiste - Chapelier / Chapelière',
  'Peintre en décors',
  'Sculpteur',
  'Staffeur ornemaniste / Staffeuse ornemaniste',
  'Styliste',
  'Tailleur / Tailleuse de pierre',
  'Tapissier / Tapissière d\'ameublement',
  'Verrier / Verrière au chalumeau',
  'Vitrailliste',
  'Autre'
];

const JOBS_REPAIRMAN = [
  'Bijoutier-joaillier / Bijoutière-joallière',
  'Bronzier / Bronzière',
  'Cordonnier / Cordonnière',
  'Coutelier / Coutelière',
  'Doreur / Doreuse',
  'Ebéniste',
  'Facteur / Factrice d\'orgues',
  'Facteur / Factrice de piano',
  'Ferronnier / Ferronnière d\'art',
  'Graveur',
  'Horloger / Horlogère',
  'Luthier / Luthière',
  'Menuisier / Menuisière',
  'Miroitier / Miroitière',
  'Modéliste / Prototypiste',
  'Modiste - Chapelier / Chapelière',
  'Réparateur / Réparatrice d\'instruments de musique',
  'Restaurateur d\'œuvres d\'art',
  'Retoucheuse / Retoucheur',
  'Serrurier dépanneur',
  'Staffeur ornemaniste / Staffeuse ornemaniste',
  'Tapissier / Tapissière d\'ameublement',
  'Autre'
];

const options = [
  { label: "Créateurs", value: "creators" },
  { label: "Dépanneurs", value: "repairman" }
];

const Item = ({ item, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('SearchCategory', { category: item })}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
      <Text style={styles.displayName}>{item} </Text>
      <View style={{ alignItems: 'center' }}>
        <ChevronRight size={20} color="#A1A1A1" />
      </View>
    </View>
  </TouchableOpacity>
);



export default function SearchView({ navigation }) {
  const [search, onChangeSearch] = React.useState("");
  const [artisans, setArtisans] = React.useState('creators');

  useEffect(() => {
    //fetchArtisans();
  }, [])

  return (
    <SafeAreaView>
<ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Search style={styles.inputIcon} size={24} set='light' />
        <TextInput
          onTouchStart={() => navigation.navigate('SearchBar')}
          placeholder="Rechercher un artisan"
          style={styles.input}
          value={search}
        />
      </View>

      <View style={{ margin: 10 }}>
        <SwitchSelector
          options={options}
          initial={0}
          buttonColor='#FB724C'
          selectedColor
          bold={true}
          selectedColor='#FFFFFF'
          onPress={value => setArtisans(value)}
        />
      </View>

      {artisans === 'creators' && <FlatList
        data={JOBS_CREATORS}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <Item item={item} navigation={navigation} />
        )}
      />}

      {artisans !== 'creators' && <FlatList
        data={JOBS_REPAIRMAN}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <Item item={item} navigation={navigation} />
        )}
      />}

    </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10
  },
  subtitle: {
    marginBottom: 10,
    marginLeft: 10,
    color: '#7A7A7A',
    fontSize: 17
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
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
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 14,
    color: '#2B2B2B',
    borderWidth: 1,
    borderColor: '#A1A1A1'
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
    fontSize: 14,
    color: '#2B2B2B',
    margin: 5,
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
