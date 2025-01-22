import React from 'react';
import { Image, SectionList, FlatList, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
const clovis = require('../assets/images/clovis/clovis.jpg')
import { Location } from 'react-native-iconly'

const DATA = [
  {
    title: "Près de chez vous",
    horizontal: true,
    data: [
      { id: 1, displayName: 'Clovis TCHOUFAK', image: clovis, location: 'Abidjan' },
      { id: 2, displayName: 'Clovis TCHOUFAK2', image: clovis, location: 'Abidjan' },
      { id: 3, displayName: 'Clovis TCHOUFAK2', image: clovis, location: 'Abidjan' },
      { id: 4, displayName: 'Clovis TCHOUFAK2', image: clovis, location: 'Abidjan' }
    ]
  },
  {
    title: "Suggéré",
    horizontal: true,
    data: [
      { id: 1, displayName: 'Clovis TCHOUFAK', image: clovis, location: 'Abidjan' },
      { id: 2, displayName: 'Clovis TCHOUFAK2', image: clovis, location: 'Abidjan' },
      { id: 3, displayName: 'Clovis TCHOUFAK2', image: clovis, location: 'Abidjan' },
      { id: 4, displayName: 'Clovis TCHOUFAK2', image: clovis, location: 'Abidjan' }
    ]
  },

];



export default function ProfileCards({ navigation }) {
  const [search, onChangeSearch] = React.useState("");
  return (
    <View><SafeAreaView>

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({ item, section }) => {
          if (section.horizontal) {
            return null;
          }
          return <Item item={item} navigation={navigation} />
        }
        }
        renderSectionHeader={({ section }) => (
          <>
            <Text style={styles.title}>{section.title}</Text>
            <FlatList
              data={section.data}
              horizontal
              renderItem={({ item }) => <Item item={item} navigation={navigation} />}
            />
          </>
        )}
      />
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 10,
    width: 170
  },
  title: {
    margin: 10,
    color: '#2B2B2B',
    fontSize: 34,
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

});
