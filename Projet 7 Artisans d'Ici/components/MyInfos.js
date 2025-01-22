import React, { useState, useEffect, useRef } from 'react';
import { Image, StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import PhoneInput from 'react-native-phone-number-input';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SelectDropdown from 'react-native-select-dropdown'
import { ChevronDown, CloseSquare } from 'react-native-iconly'
import { setData, updateData, getAvatar, firebaseAuth, uploadAvatar, getUserLocalData } from '../firebase';
import { launchImageLibrary } from 'react-native-image-picker';
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from '@react-native-async-storage/async-storage';
const defaultAvatar = require('../assets/images/default_avatar.jpg')

const GOOGLE_PLACES_API_KEY = 'AIzaSyARZSumpA7YEfONKPl5zk8gJ_lG24NOSSI';

//@TODO : mettre liste des jobs en bdd
const JOBS = [
  'Bijoutier-joaillier / Bijoutière-joallière',
  'Bottier /Bottière',
  'Bronzier / Bronzière',
  'Céramiste à la main',
  'Cordonnier / Cordonnière',
  'Costumière / Costumier',
  'Coutelier / Coutelière',
  'Designer de produit de lunetterie',
  'Designer textile',
  'Doreur / Doreuse',
  'Ebéniste',
  'Facteur / Factrice d\'orgues',
  'Facteur / Factrice de piano',
  'Ferronnier / Ferronnière d\'art',
  'Graveur',
  'Horloger / Horlogère',
  'Luthier / Luthière',
  'Maroquinier / Maroquinière',
  'Menuisier / Menuisière',
  'Miroitier / Miroitière',
  'Modéliste / Prototypiste',
  'Modiste - Chapelier / Chapelière',
  'Peintre en décors',
  'Réparateur / Réparatrice d\'instruments de musique',
  'Restaurateur d\'œuvres d\'art',
  'Retoucheuse / Retoucheur',
  'Sculpteur',
  'Serrurier dépanneur',
  'Staffeur ornemaniste / Staffeuse ornemaniste',
  'Styliste',
  'Tailleur / Tailleuse de pierre',
  'Tapissier / Tapissière d\'ameublement',
  'Verrier / Verrière au chalumeau',
  'Vitrailliste',
  'Autre'
]


const HeaderRight = (props) => {

  return (
    <TouchableOpacity onPress={() => firebaseAuth.currentUser === null ? navigation.navigate('Onboarding') : props.navigation.pop()}>
      <CloseSquare style={{ color: '#7A7A7A', marginRight: 10 }} size={32} set='light' />
    </TouchableOpacity>
  )
}

export default function MyInfos({ route, navigation }) {
  navigation.setOptions({ headerLeft: () => null })
  navigation.setOptions({ headerRight: () => <HeaderRight navigation={navigation} /> })

  let { isPro, fromSignup } = route.params;
  const [user, setUser] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, onChangeDescription] = useState("");
  const [addressFormated, setAddressFormated] = useState("");
  const phoneInput = useRef(null);
  const addressInput = useRef(null);
  const [job, setJob] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  const [avatar, setAvatar] = useState(defaultAvatar);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ mode: 'onBlur' })

  const handlePicker = () => {
    launchImageLibrary({ includeBase64: true }, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setAvatar({ uri: response.assets[0].uri });
        // here we can call a API to upload image on server
        uploadAvatar(firebaseAuth.currentUser.uid, response.assets[0])

      }
    });
  };

  const fetchUser = async () => {
    getUserLocalData().then(data => {
      if(data === null){
        setIsLoading(false);
      }else{
        getAvatar(firebaseAuth.currentUser.uid).then((data) => {
          setAvatar({ uri: data });
        });
        onChangeDescription(data.description)
        setPhoneNumber(data.phone.value)
        setJob(data.job);
  
        let street = data.address.street ? data.address.street + ', ' : ''
        let city = data.address.city ? data.address.city + ', ' : ''
        let country = data.address.country ? data.address.country : ''
        setAddressFormated(street + city + country);
        addressInput.current?.setAddressText(street + city + country);
  
        setUser({
          name: data.name ?? '',
          first_name: data.first_name ?? '',
          commercial_name: data.commercial_name ?? '',
          description: data.description ?? '',
          job: data.job ?? '',
          phone: data.phone.value,
          address: data.address
        })
  
        setIsLoading(false);
      }
      
    }).catch(e => {
      console.log(e)
    })
  };

  useEffect(() => {
    if (fromSignup) {
      //disable back 
      //navigation.setOptions({ headerLeft: () => null })
      setIsLoading(false);
    } else {
      fetchUser();
    }
  }, [])

  useEffect(() => {
    // reset form with user data
    reset(user);
  }, [user]);

  const handleSaveUser = (data, navigation, fromSignup) => {
    console.log('fromSignup');
    let code = phoneInput.current?.getCallingCode()
    setIsLoading(true);

    data.reviews = [];
    data.directory = [];
    data.phone = { code: code, value: data.phone };
    data.is_pro = isPro;

    console.log(data)
    console.log('FROM SIGNUP : ' + fromSignup);
    
    const jsonValue = JSON.stringify(data)
    AsyncStorage.setItem('@user', jsonValue)

    if (fromSignup) {
      setData('users', firebaseAuth.currentUser.uid, data);
      setIsLoading(false);
      navigation.navigate('Tabs');
    } else {
      updateData('users', firebaseAuth.currentUser.uid, data);
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container} >
      {isLoading && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size="large" color="#FB724C" /><Text>Chargement</Text></View>}

      {!isLoading && <ScrollView keyboardShouldPersistTaps='always'>
        <Text style={styles.subtitle}>Remplissez vos informations</Text>

        <TouchableOpacity onPress={() => handlePicker()} style={{ alignItems: 'center' }}>
          <Image style={styles.itemAvatar} source={avatar} PlaceholderContent={<ActivityIndicator />} />
        </TouchableOpacity>

        {isPro && <View style={{ flex: 1, margin: 10, }}>
          <View style={styles.inputNameContainer}>
            <Text style={styles.inputLabel}>Nom Commercial</Text>
            <Controller
              control={control}
              name="commercial_name"
              render={({ field: { onChange, value, onBlur } }) => (
                <TextInput
                  style={styles.input}
                  onChangeText={value => onChange(value)}
                  value={value}
                  onBlur={onBlur}
                />

              )}
              rules={{
                required: true,
                maxLength: 100
              }}
            />
          </View>
          {errors.name && <Text style={{ color: 'red', fontSize: 12 }}>Champs obligatoire.</Text>}
        </View>}

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, margin: 10, }}>
            <View style={styles.inputNameContainer}>
              <Text style={styles.inputLabel}>Nom</Text>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    style={styles.input}
                    onChangeText={value => onChange(value)}
                    value={value}
                    onBlur={onBlur}
                  />

                )}
                rules={{
                  required: true,
                  maxLength: 100
                }}
              />
            </View>
            {errors.name && <Text style={{ color: 'red', fontSize: 12 }}>Champs obligatoire.</Text>}
          </View>

          <View style={{ flex: 1, margin: 10, }}>
            <View style={styles.inputNameContainer}>
              <Text style={styles.inputLabel}>Prénom</Text>
              <Controller
                control={control}
                name="first_name"
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    style={styles.input}
                    onChangeText={value => onChange(value)}
                    value={value}
                    onBlur={onBlur}
                  />

                )}
                rules={{
                  required: true,
                  maxLength: 100
                }}
              />
            </View>
            {errors.name && <Text style={{ color: 'red', fontSize: 12 }}>Champs obligatoire.</Text>}
          </View>
        </View>

        <View style={{ margin: 10 }}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Adresse</Text>
            <Controller
              control={control}
              name="address"
              render={({ field: { onChange, value, onBlur } }) => (
                <GooglePlacesAutocomplete
                  ref={addressInput}
                  placeholder={addressFormated}
                  minLength={2}
                  autoFocus={false}
                  returnKeyType={'search'}
                  keyboardAppearance={'light'}
                  listViewDisplayed={false}
                  fetchDetails={true}
                  enablePoweredByContainer={false}

                  currentLocation={false}
                  currentLocationLabel="Current location"
                  nearbyPlacesAPI='GooglePlacesSearch' //'GoogleReverseGeocoding
                  GooglePlacesDetailsQuery={{
                    fields: ['formatted_address'],
                  }}
                  filterReverseGeocodingByTypes={[]}
                  predefinedPlaces={[]}
                  debounce={200}
                  query={{
                    key: GOOGLE_PLACES_API_KEY,
                    language: 'fr', // language of the results
                    components: 'country:CI',
                  }}
                  styles={{
                    textInputContainer: {
                      marginTop: 20,
                      backgroundColor: '#F0F0F0',
                      borderRadius: 14,
                      color: '#AEAEB2'
                    },
                    row: {
                      backgroundColor: '#F0F0F0',
                      padding: 13,
                      height: 44,
                      flexDirection: 'row',
                    },
                    textInput: {
                      height: 38,
                      color: '#AEAEB2',
                      fontSize: 16,
                      backgroundColor: 'transparent'
                    },
                    predefinedPlacesDescription: {
                      color: '#1faadb',
                    },
                  }}
                  onPress={(data, details = null) => {
                    console.log(details)
                    let streetName = '';
                    let streetNumber = '';
                    let zipCode = '';
                    let city = '';
                    let state = '';
                    let country = '';
                    let subLocality = '';
                    for (const a in details.address_components) {
                      let loc = details.address_components[a];
                      console.log(loc.types)
                      console.log(loc.long_name)
                      if (loc.types.includes('street_number')) {
                        streetNumber = loc.long_name;
                      } else if (loc.types.includes('route')) {
                        streetName = loc.long_name;
                      } else if (loc.types.includes('locality')) {
                        city = loc.long_name;
                      } else if (loc.types.includes('administrative_area_level_1')) {
                        state = loc.long_name;
                      } else if (loc.types.includes('sublocality_level_1')) {
                        subLocality = loc.long_name;
                      } else if (loc.types.includes('postal_code')) {
                        zipCode = loc.long_name;
                      } else if (loc.types.includes('country')) {
                        country = loc.long_name;
                      }
                    }

                    let addr = {
                      street: streetNumber + ' ' + streetName,
                      city: city,
                      state: state,
                      zipCode: zipCode,
                      country: country,
                      subLocality: subLocality
                    }

                    onChange(addr)
                  }}
                  onFail={(error) => console.error(error)}
                  requestUrl={{
                    url:
                      'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
                    useOnPlatform: 'web',
                  }} // this in only required for use on the web. See https://git.io/JflFv more for details.
                />

              )}
              rules={{
                required: true,
                maxLength: 100
              }}
            />

          </View>
          {errors.address !== undefined && <Text style={{ color: 'red', fontSize: 12 }}>Champs obligatoire.</Text>}
        </View>

        <View style={{ flex: 1, margin: 10 }}>
          <View style={styles.inputContainer}>
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, value, onBlur } }) => (
                <PhoneInput
                  ref={phoneInput}
                  defaultValue={phoneNumber}
                  defaultCode="CI"
                  layout="first"
                  placeholder='Téléphone'
                  textContainerStyle={{
                    backgroundColor: '#F0F0F0',

                  }}
                  containerStyle={{
                    backgroundColor: '#F0F0F0',
                    borderRadius: 14,
                  }}
                  onChangeText={(text) => {
                    onChange(text);
                  }}
                />

              )}
              rules={{
                required: true,
                maxLength: 100
              }}
            />

          </View>
          {errors.phone && <Text style={{ color: 'red', fontSize: 12 }}>Champs obligatoire.</Text>}
        </View>

        {isPro && <View>
          <View style={{ flex: 1, margin: 10, }}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Métier</Text>
              <Controller
                control={control}
                name="job"
                render={({ field: { onChange, value, onBlur } }) => (
                  <SelectDropdown
                    data={JOBS}
                    defaultValue={job}
                    onSelect={(selectedItem, index) => {
                      onChange(selectedItem)
                    }}
                    renderDropdownIcon={() => {
                      return (
                        <ChevronDown style={{ color: '#2B2B2B' }} size={18} set='light' />
                      );
                    }}
                    buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    dropdownIconPosition={"right"}
                    dropdownStyle={styles.dropdown4DropdownStyle}
                    rowStyle={styles.dropdown4RowStyle}
                    rowTextStyle={styles.dropdown4RowTxtStyle}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      // text represented after item is selected
                      // if data array is an array of objects then return selectedItem.property to render after item is selected
                      return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                      // text represented for each item in dropdown
                      // if data array is an array of objects then return item.property to represent item in dropdown
                      return item
                    }}
                  />

                )}
                rules={{
                  required: true
                }}
              />

            </View>
            {errors.job && <Text style={{ color: 'red', fontSize: 12 }}>Champs obligatoire.</Text>}
          </View>

          <View style={{ flex: 1, margin: 10, }}>
            <View style={styles.inputNameContainer}>
              <Text style={styles.inputLabel}>Description</Text>
              <Controller
                control={control}
                name="description"
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextInput
                    style={styles.inputTextarea}
                    multiline
                    numberOfLines={4}
                    editable
                    onChangeText={value => onChange(value)}
                    value={value}
                    onBlur={onBlur}
                  />

                )}
                rules={{
                  required: true,
                  maxLength: 100
                }}
              />
            </View>
            {errors.description && <Text style={{ color: 'red', fontSize: 12 }}>Champs obligatoire.</Text>}
          </View>
        </View >}

        <GradientButton
          style={{ marginVertical: 8, marginBottom: 20 }}
          text="Enregistrer"
          textStyle={{ fontSize: 17, fontWeight: 'bold' }}
          gradientBegin="#FB724C"
          gradientEnd="#FE904B"
          gradientDirection="diagonal"
          height={58}
          radius={14}
          impact
          impactStyle='Light'
          onPressAction={handleSubmit(data => handleSaveUser(data, navigation, fromSignup))}
        />
      </ScrollView>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: 10

  },
  dropdown4DropdownStyle: {
    color: 'red',
    width: (Dimensions.get('window').width) - 20
  },
  dropdown4RowStyle: {
    backgroundColor: "#F0F0F0",
    borderBottomColor: "#C5C5C5",
    width: (Dimensions.get('window').width) - 20
  },
  dropdown4RowTxtStyle: {
    textAlign: "left"
  },
  itemAvatar: {
    width: 165,
    height: 165,
    borderRadius: 100,
    alignItems: 'center'
  },
  phoneContainer: {
    width: '75%',
    height: 50,
  },
  subtitle: {
    margin: 10,
    color: '#7A7A7A',
    fontSize: 17
  },
  inputContainer: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    borderRadius: 14,
    color: '#2B2B2B'
  },
  inputNameContainer: {
    flex: 1,
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
  icon: {
    marginRight: 10
  },
  inputLabel: {
    zIndex: 10,
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
  inputTextarea: {
    height: 120,
    marginTop: 0,
    borderWidth: 0,
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10
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
  },
  dropdown1BtnStyle: {
    width: '100%',
    backgroundColor: '#F0F0F0',
    borderRadius: 14,
    color: '#2B2B2B',
    height: 40,
    marginTop: 20,
    borderWidth: 0,
    padding: 10,
  },
  dropdown1BtnTxtStyle: { fontSize: 14, textAlign: "left" },

});
