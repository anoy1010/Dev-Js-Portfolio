import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://6397ac3496cd4a4c91c4297d7d96f68a@o1087628.ingest.sentry.io/6101123",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Onboarding from './components/Onboarding'
import Login from './components/Login'
import Signup from './components/Signup'
import HomeView from './components/Home'
import ChatView from './components/Chat'
import MyProfileView from './components/MyProfile'
import ProfileView from './components/Profile'
import ChatDetailsView from './components/ChatDetails'
import MyInfosView from './components/MyInfos'
import { getUserLocalData, firebaseAuth } from './firebase';
import { Home, Search, Send, User, Plus } from 'react-native-iconly'
import Logout from './components/Logout';
import MyReviews from './components/MyReviews';
import MyGallery from './components/MyGallery';
import Artisans from './components/Search';
import AddReview from './components/AddReview'
import MySubscriptionView from './components/MySubscription';
import MySubscriptionValidatedView from './components/MySubscriptionValidated';
import SearchBar from './components/SearchBar';
import SearchCategoryView from './components/SearchCategory';
import Post from './components/Post';
import MyDirectory from './components/MyDirectory';
import MySearches from './components/MySearches';
import SignupWithPhone  from './components/SignupWithPhone';
import ForgetPassword from './components/ForgetPassword'

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs({ navigation }) {
    const [isPro, setIsPro] = useState(false);
    const fetchUser = async () => {
        getUserLocalData().then(data => {
            if (data) {
                setIsPro(data.is_pro)
            }

        })
    };

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#2B2B2B',
                tabBarInactiveTintColor: '#AEAEB2',
                tabBarStyle: { borderTopColor: "transparent" },
                tabBarIconStyle: {
                    marginTop: 0
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginBottom: 5

                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconFocused = focused ? 'bold' : 'light';

                    if (route.name === 'Home') {
                        return <Home size={size} primaryColor={color} set={iconFocused} />;
                    } else if (route.name === 'Rechercher') {
                        return <Search size={size} primaryColor={color} set={iconFocused} />;
                    } else if (route.name === 'Chat') {
                        return <Send size={size} primaryColor={color} set={iconFocused} />;
                    } else if (route.name === 'MyProfile') {
                        return <User size={size} primaryColor={color} set={iconFocused} />;
                    } else if (route.name === 'Annonce') {
                        return <Plus size={size} primaryColor={color} set={iconFocused} />;
                    }
                },
            })}
        >
            <Tab.Screen name="Home" options={{ title: 'Accueil', headerShown: false }} component={HomeView} />
            <Tab.Screen name="Rechercher" options={{ headerShown: false }} component={Artisans} />
            {!isPro && <Tab.Screen
                name="Annonce"
                component={Post}
                options={{ headerShadowVisible: false }}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        if (firebaseAuth.currentUser === null) {
                            e.preventDefault();
                            navigation.navigate('Signup', { isPro: false });
                        }
                    },
                })}
            />}
            <Tab.Screen
                name="Chat"
                options={{ headerShown: false }}
                component={ChatView}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        if (firebaseAuth.currentUser === null) {
                            e.preventDefault();
                            navigation.navigate('Signup', { isPro: false });
                        }
                    },
                })}
            />
            <Tab.Screen
                name="MyProfile"
                options={{ title: 'Profil', headerShown: false }}
                component={MyProfileView}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        if (firebaseAuth.currentUser === null) {
                            e.preventDefault();
                            navigation.navigate('Signup', { isPro: false });
                        }
                    },
                })}
            />
        </Tab.Navigator>
    );
}


function App() {
    let defaultRoute = 'Onboarding';
    if (firebaseAuth.currentUser !== null) {
        defaultRoute = 'Tabs';
    }
    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });
   
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={defaultRoute}>
                <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={Onboarding} />
                <Stack.Screen name="Login" options={{ gestureEnabled: false, title: 'Connexion', headerShadowVisible: false }} component={Login} />
                <Stack.Screen name="ForgetPassword" options={{ gestureEnabled: false, title: 'Mot de passe perdu', headerShadowVisible: false }} component={ForgetPassword} />
                <Stack.Screen name="Signup" options={{ gestureEnabled: false, title: 'Inscription', headerShadowVisible: false }} component={Signup} />
                <Stack.Screen name="SignupWithPhone" options={{ gestureEnabled: false, title: 'Inscription', headerShadowVisible: false }} component={SignupWithPhone} />
                <Stack.Screen name="Home" options={{ title: 'Accueil', headerShadowVisible: false, headerLeft: null }} component={HomeView} />
                <Stack.Screen name="ChatDetails" options={{ title: 'Chat', headerShadowVisible: false }} component={ChatDetailsView} />
                <Stack.Screen name="Profile" options={{ title: 'Profil', headerShadowVisible: false }} component={ProfileView} />
                <Stack.Screen name="MyInfos" options={{ title: 'Mes informations', headerShadowVisible: false }} component={MyInfosView} />
                <Stack.Screen name="MyReviews" options={{ title: 'Mes avis', headerShadowVisible: false }} component={MyReviews} />
                <Stack.Screen name="MyDirectory" options={{ title: 'Mon annuaire', headerShadowVisible: false }} component={MyDirectory} />
                <Stack.Screen name="MySearches" options={{ title: 'Mes annonces', headerShadowVisible: false }} component={MySearches} />
                <Stack.Screen name="MySubscription" options={{ title: 'Mon abonnement', headerShadowVisible: false }} component={MySubscriptionView} />
                <Stack.Screen name="MySubscriptionValidated" options={{ title: 'Mon abonnement', headerShadowVisible: false }} component={MySubscriptionValidatedView} />
                <Stack.Screen name="AddReview" options={{ title: 'Ajouter un avis', headerShadowVisible: false }} component={AddReview} />
                <Stack.Screen name="MyGallery" options={{ title: 'Mes photos', headerShadowVisible: false }} component={MyGallery} />
                <Stack.Screen name="SearchBar" options={{ cardStyleInterpolator: forFade, title: 'Recherche', headerShadowVisible: false }} component={SearchBar} />
                <Stack.Screen name="SearchCategory" options={{ cardStyleInterpolator: forFade, title: 'Categorie', headerShadowVisible: false }} component={SearchCategoryView} />
                <Stack.Screen name="Tabs" options={{ headerShown: false }} component={MyTabs} />
                <Stack.Screen name="Logout" options={{ headerShown: false }} component={Logout} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Sentry.wrap(App);



