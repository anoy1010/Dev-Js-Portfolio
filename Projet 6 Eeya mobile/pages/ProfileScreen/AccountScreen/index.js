import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import accountStyles from './styles'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { COLOR } from '../../../outils/const'
import { useNavigation } from "@react-navigation/native";




const Account = () => {
  const navigation = useNavigation();
  const onNextPassword = () => {
    navigation.navigate('Password'); // Remplacez 'NextScreen' par l'écran approprié
  };
  const onNextPayment = () => {
    navigation.navigate('Payment'); // Remplacez 'NextScreen' par l'écran approprié
  };
  const onNextPublishRide = () => {
    navigation.navigate('PublishRide'); // Remplacez 'NextScreen' par l'écran approprié
  };
  const onNextBalance = () => {
    navigation.navigate('Balance'); // Remplacez 'NextScreen' par l'écran approprié
  };
  const onNextBecomeDriver = () => {
    navigation.navigate('BecomeDriver'); // Remplacez 'NextScreen' par l'écran approprié
  };
  return (
    <View style={{ flex:1, justifyContent:'flex-start', alignItems:'center', backgroundColor:'white',}}>
      <View style={accountStyles.Container}>
        <TouchableOpacity style={accountStyles.accountTouch} onPress={onNextPassword}>
          <Text style={accountStyles.accountText}>Mots de passe</Text>
          <AntDesignIcon name='right' size={20} color="#898989'"/>
        </TouchableOpacity>
        <TouchableOpacity style={accountStyles.accountTouch} onPress={onNextPayment}>
          <Text style={accountStyles.accountText}>Mode de paiement</Text>
          <AntDesignIcon name='right' size={20} color="#898989'"/>
        </TouchableOpacity>
        <TouchableOpacity style={accountStyles.accountTouch} onPress={onNextBalance}>
          <Text style={accountStyles.accountText}>Mon solde</Text>
          <AntDesignIcon name='right' size={20} color="#898989'"/>
        </TouchableOpacity>
        <TouchableOpacity style={accountStyles.accountTouch}onPress={onNextPublishRide}>
          <Text style={accountStyles.accountText}>Mes tajets publiés</Text>
          <AntDesignIcon name='right' size={20} color="#898989'"/>
        </TouchableOpacity>
        <TouchableOpacity style={accountStyles.accountTouch} onPress={onNextBecomeDriver}>
          <Text style={accountStyles.accountText}>Devenir Chauffeur</Text>
          <AntDesignIcon name='right' size={20} color="#898989'"/>
        </TouchableOpacity>
        <TouchableOpacity style={accountStyles.accountTouch}>
          <Text style={accountStyles.accountText}>Conditions Générales</Text>
          <AntDesignIcon name='right' size={20} color="#898989'"/>
        </TouchableOpacity>
        <TouchableOpacity style={accountStyles.accountTouch}>
          <Text style={accountStyles.accountText}>Deconnexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Account;