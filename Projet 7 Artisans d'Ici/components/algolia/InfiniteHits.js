import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Search, ChevronRight } from 'react-native-iconly'
import { connectInfiniteHits } from 'react-instantsearch-native';
import { getAvatar } from '../../firebase';
const defaultAvatar = require('../../assets/images/default_avatar.jpg')
import Highlight from './Highlight';
const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
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
  titleText: {
    fontWeight: 'bold',
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
});

const Item = ({ item, navigation }) => {
  let avatar = defaultAvatar
  getAvatar(item.objectID).then((url) => {
    avatar = { uri: url }
  }).catch(() => {
    avatar = defaultAvatar
  })
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Profile', { userId: item.objectID })}>
      <View style={styles.item} >
        <Image style={styles.itemImage} source={avatar} />
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.displayName}>{item.commercial_name} </Text>
          <Text style={{ fontSize: 10 }}>{item.job} </Text>
        </View>

        <View style={styles.localityContainer}>
          <ChevronRight size={20} color="#A1A1A1" />
        </View>
      </View>
    </TouchableOpacity>
  )
};

const InfiniteHits = ({ hits, hasMore, refine, navigation }) => {

  console.log('HITS')
  console.log(hits)
  return (
   
      <FlatList
      data={hits}
      keyExtractor={(item, index) => item.objectID}
      onEndReached={() => hasMore && refine()}
      renderItem={({ item }) => 
        (
          <Item item={item} navigation={navigation} />
        )
      }
    />

  )
};

InfiniteHits.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasMore: PropTypes.bool.isRequired,
  refine: PropTypes.func.isRequired,
};

export default connectInfiniteHits(InfiniteHits);