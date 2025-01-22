# artisansdici

## Android 
npm run android 

### Déploiement pour tests interne (APK)
cd android 
./gradlew assembleRelease

### Uploader la version de test sur firebase 
artisansdici\android\app\build\outputs\apk\release

### Déploiement pour production (AAB)
cd android 
./gradlew bundleRelease

### Upload de la version sur google play store 
artisansdici\android\app\build\outputs\bundle\release

##iOS
npm run ios 

### Lancer Xcode et lancer run pour tester sur le device ou archiver pour déployer la version sur l'app Store