import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signOut, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    resetEmailPassword, 
    signInWithPhoneNumber, 
    signInWithCredential, 
    GoogleAuthProvider, 
    FacebookAuthProvider, 
    PhoneAuthProvider, 
    OAuthProvider 
} from 'firebase/auth';
import { 
    initializeFirestore, 
    getDoc, 
    getDocs, 
    updateDoc, 
    doc, 
    setDoc, 
    query, 
    where, 
    collection, 
    arrayUnion, 
    orderBy, 
    addDoc, 
    limit, 
    startAfter 
} from 'firebase/firestore';
import { 
    getStorage, 
    ref, 
    uploadBytes, 
    getDownloadURL, 
    list, 
    deleteObject 
} from "firebase/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { appleAuth } from '@invertase/react-native-apple-authentication';

GoogleSignin.configure({
    webClientId: '386814027399-dvi66oobi48kgc081pom7nr465b20hsa.apps.googleusercontent.com',
    offlineAccess: true,
    hostedDomain: '',
    forceConsentPrompt: true,
});

const firebaseConfig = {
    apiKey: "AIzaSyAFHmJUcUngVZ8T62PovQG64qkJzAEfqI0",
    authDomain: "artisansdici-b963c.firebaseapp.com",
    projectId: "artisansdici-b963c",
    storageBucket: "artisansdici-b963c.appspot.com",
    messagingSenderId: "386814027399",
    appId: "1:386814027399:web:d314eea70b0c3393edfa22",
    measurementId: "G-Q61Y9VT61N"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const db = initializeFirestore(firebaseApp, { experimentalForceLongPolling: true })
const storage = getStorage();

//FIRESTORE
export const addData = (docRef, data) => {
    addDoc(collection(db, docRef), data);
};

export const setData = (docRef, id, data) => {
    setDoc(doc(db, docRef, id), data, { merge: true });
};

export const updateData = (docRef, id, data) => {
    updateDoc(doc(db, docRef, id), data);
};

export const addMessage = (docRef, id, data) => {
    setDoc(doc(db, docRef, id), {
        messages: arrayUnion(data)
    }, { merge: true });
};

export const getMessages = async (docRef, id) => {
    const data = await getDoc(doc(db, docRef, id));

    if (data.exists()) {
        return data.data();
    } else {
        return null;
    }
};

export const getData = async (docRef, id) => {
    const data = await getDoc(doc(db, docRef, id));

    if (data.exists()) {
        return data.data();
    } else {
        return null;
    }
};

export const getSearches = async (userId, maxResult = 10) => {
    const ref = collection(db, "posts");

    let q = query(ref, where('userId', '==', userId), orderBy("id"), limit(maxResult))

    const querySnapshot = await getDocs(q);

    return new Promise(function (resolve, reject) {
        resolve(querySnapshot)
    }).catch((error) => {
        // Uh-oh, an error occurred!
        reject(error)
    });
};

export const getWordpressPosts = async (init, lastDoc, maxResult = 10) => {
    const wpRef = collection(db, "wordpress");

    let q = null

    if (init) {
        q = query(wpRef, orderBy("id"), limit(maxResult))
    } else {
        q = query(wpRef, orderBy("id"), startAfter(lastDoc), limit(maxResult))
    }

    const querySnapshot = await getDocs(q);

    const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    console.log("last", lastVisible);
    return new Promise(function (resolve, reject) {
        resolve({ data: querySnapshot, lastVisible: lastVisible })
    }).catch((error) => {
        // Uh-oh, an error occurred!
        reject(error)
    });
};

export const getArtisans = async (filters, maxResults = 10) => {

    const artisansRef = collection(db, "users");

    let q = '';

    if (filters.length > 0) {
        for (const key in filters) {
            q = query(artisansRef, where(filters[key].field, filters[key].operator, filters[key].value, limit(maxResults)));
            console.log(filters[key].value);
        }
    }

    console.log('QUERY')
    console.log(q)

    const querySnapshot = await getDocs(q);

    return new Promise(function (resolve, reject) {
        resolve(querySnapshot)
    }).catch((error) => {
        // Uh-oh, an error occurred!
        reject(error)
    });
}

//STORAGE

export const uploadAvatar = async (userId, file) => {
    const { uri } = file;
    const storageRef = ref(storage, userId + '/profile/avatar.jpg');

    const response = await fetch(uri);
    const blob = await response.blob();

    uploadBytes(storageRef, blob).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });
}

export const uploadGallery = async (userId, file) => {
    const { uri } = file;
    const storageRef = ref(storage, userId + '/gallery/' + Date.now() + '.jpg');

    const response = await fetch(uri);
    const blob = await response.blob();

    return new Promise(function (resolve, reject) {
        uploadBytes(storageRef, blob).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            resolve(true)
        }).catch((error) => {
            // Uh-oh, an error occurred!
            reject(error)
        });
    });
}

export const deleteFile = (file) => {
    return new Promise(function (resolve, reject) {
        const imageRef = ref(storage, file);

        deleteObject(imageRef).then((res) => {
            // File deleted successfully
            resolve(res)
        }).catch((error) => {
            // Uh-oh, an error occurred!
            reject(error)
        });
    });
}

export const getGallery = (userId) => {
    const folderRef = ref(storage, userId + '/gallery');

    return list(folderRef).then(result => {
        return Promise.all(result.items.map(imgRef => getDownloadURL(imgRef)));
    })
}

export const getAvatar = async (userId) => {
    const folderRef = ref(storage, userId + '/profile/avatar.jpg');

    return getDownloadURL(folderRef)
}

export const getUserLocalData = async () => {
    const jsonValue = await AsyncStorage.getItem('@user')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
}

export const getFile = (folder, userId) => {
    return new Promise(function (resolve, reject) {
        const folderRef = ref(storage, userId + '/' + folder + '/');
        let imageItems = [];
        listAll(folderRef)
            .then((res) => {

                res.items.forEach((itemRef) => {
                    // All the items under listRef.
                    console.log('item');
                    getDownloadURL(itemRef)
                        .then((url) => {
                            imageItems.push(url);

                        }).catch((error) => {
                            reject(error);
                        });
                    console.log(imageItems)
                    resolve(imageItems)
                });
            }).catch((error) => {
                // Uh-oh, an error occurred!
                reject(error)
            });


    });
}

//AUTH

export const logout = () => {
    return new Promise(function (resolve, reject) {
        signOut(firebaseAuth)
            .then(() => {
                AsyncStorage.setItem('@user', "")
                resolve(true)
            })
            .catch(error => {
                reject(error)
            });
    });

};


export const signup = (email, password) => {
    return new Promise(function (resolve, reject) {
        createUserWithEmailAndPassword(firebaseAuth, email, password)
            .then(userCredential => {
                resolve(userCredential);
            })
            .catch(error => {
                reject(error)
            });
    });
};

export const signin = (email, password) => {
    return new Promise(function (resolve, reject) {
        signInWithEmailAndPassword(firebaseAuth, email, password)
            .then(userCredential => {
                resolve(userCredential);
            })
            .catch(error => {
                reject(error)
            });
    });
};

export const resetPassword = (email, password) => {
    return new Promise(function (resolve, reject) {
        resetEmailPassword(firebaseAuth, email)
            .then(userCredential => {
                resolve(userCredential);
            })
            .catch(error => {
                reject(error)
            });
    });
};

export const signinWithPhone = async (phone, token, code = null, confirmation = null) => {

    if (code) {
        //var credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, code);
        
        const credential = PhoneAuthProvider.credential(confirmation.verificationId, code)
        // login with credential
        const firebaseUserCredential = await signInWithCredential(firebaseAuth, credential);

        return firebaseUserCredential;
    } else {
        const captchaVerifier = {
            type: 'recaptcha',
            verify: () => Promise.resolve(token),
            _reset: () => { return null }
        }
        return new Promise(function (resolve, reject) {
            signInWithPhoneNumber(firebaseAuth, phone, captchaVerifier)
                .then(userCredential => {
                    resolve(userCredential);
                })
                .catch(error => {
                    reject(error)
                });
        });
    }


};

export const signupWithGoogle = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log(userInfo)
        //navigation.navigate('MyInfos', { isPro: isPro, fromSignup: true })
        const credential = GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken)
        // login with credential
        const firebaseUserCredential = await signInWithCredential(firebaseAuth, credential);

        return firebaseUserCredential;
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
        } else {
            // some other error happened
        }
        console.log(error)
        return null;
    }
};

export const signupWithFacebook = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
        throw 'User cancelled the login process';
        return null;
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
        throw 'Something went wrong obtaining access token';
        return null;
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = FacebookAuthProvider.credential(data.accessToken);

    // Sign-in the user with the credential
    const firebaseUserCredential = await signInWithCredential(firebaseAuth, facebookCredential);

    return firebaseUserCredential;

};

export const signupWithApple = async () => {
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
    
      // Ensure Apple returned a user identityToken
      if (!appleAuthRequestResponse.identityToken) {
        throw new Error('Apple Sign-In failed - no identify token returned');
      }
    
      // Create a Firebase credential from the response
      const { identityToken, nonce } = appleAuthRequestResponse;
      
      const provider = new OAuthProvider('apple.com');
      const authCredential = provider.credential({
          idToken: identityToken,
          rawNonce: nonce,
        });

      // Sign the user in with the credential
      return signInWithCredential(firebaseAuth, authCredential);

  
};
