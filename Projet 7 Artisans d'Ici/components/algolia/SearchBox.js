import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connectSearchBox } from 'react-instantsearch-native';
import { Search, ChevronRight } from 'react-native-iconly'
const styles = StyleSheet.create({
    inputContainer: {
        flex: 2,
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
    inputIcon: {
        color: '#AEAEB2',
        fontSize: 24,
        position: 'absolute',
        top: 15,
        left: 15
    },
});


const SearchBox = ({ currentRefinement, refine, navigation }) => {
    //  useEffect(() => {
    //fetchArtisans();
    //setTimeout(() => searchInput.current.focus(), 40);
  //}, [searchInput])
    return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.inputContainer}>
            <Search style={styles.inputIcon} size={24} set='light' />
            <TextInput
                placeholder="Rechercher un artisan"
                style={styles.input}
                onChangeText={(value) => refine(value)}
                value={currentRefinement}
            />

        </View>
        <TouchableOpacity onPress={() => navigation.goBack(null)} >
            <Text style={{ paddingRight: 5 }}>Annuler</Text>
        </TouchableOpacity>
    </View>
)};

SearchBox.propTypes = {
    currentRefinement: PropTypes.string.isRequired,
    refine: PropTypes.func.isRequired,
};

export default connectSearchBox(SearchBox);
