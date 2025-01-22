import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Animated,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";
import { launchImageLibrary } from "react-native-image-picker";
import ButtonNext from "../../../comps/buttonNext";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { COLOR } from "../../../outils/const";

const { width } = Dimensions.get("window");

const AddCar = () => {
  const scrollViewRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const [images, setImages] = useState([]);

  const handleImagePick = async () => {
    try {
      const result = await launchImageLibrary({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      if (result.didCancel) {
        console.log("Annulation de la sélection d'image");
      } else if (result.error) {
        console.log("Erreur lors de la sélection d'image:", result.error);
      } else {
        setImages([...images, result.assets[0].uri]); // Add image URI to the state
      }
    } catch (error) {
      console.log("Erreur lors de la sélection d'image:", error);
    }
  };

  const onScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(scrollPosition / width);
    setActiveIndex(currentIndex);
    Animated.spring(animatedValue, {
      toValue: currentIndex,
      useNativeDriver: true,
    }).start();
  };

  const onNextPress = () => {
    if (activeIndex < 3) {
      // Il y a 4 sections (0, 1, 2, 3)
      const newIndex = activeIndex + 1;
      setActiveIndex(newIndex);
      scrollViewRef.current.scrollTo({ x: newIndex * width, animated: true });
      Animated.spring(animatedValue, {
        toValue: newIndex,
        useNativeDriver: true,
      }).start();
    } else {
      navigation.navigate("ConnexionScreen"); // Naviguer vers une autre page
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Première section: titre <label: pays>  <input icon-close> */}
        <View style={styles.page}>
          <Text style={styles.sectionTitle1}>
            Quel est le numero de la plaque d'immatriculation ?
          </Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pays</Text>
            <Text style={styles.sectionsTitle}>Cote d'Ivoire </Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Sélectionnez un pays"
                placeholderTextColor="#888"
              />
              <TouchableOpacity>
                <MaterialIcons
                  name="close"
                  size={24}
                  color="#888"
                  style={styles.closeIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Deuxième section: titre et input de recherche */}
        <View style={styles.page}>
          <Text style={styles.sectionTitle1}>
            Quelle est la marque de votre vehicule ?
          </Text>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recherche</Text>
            <View style={styles.inputContainer}>
              <TouchableOpacity>
                <MaterialIcons
                  name="search"
                  size={24}
                  color="#888"
                  style={styles.closeIcon}
                />
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                placeholder="Citroen"
                placeholderTextColor="#888"
              />
            </View>
          </View>
        </View>

        {/* Troisième section: titre avec choix de couleurs */}
        <View style={styles.page}>
          <Text style={styles.sectionTitle1}>
            Quelle est la couleur de votre vehicule ?
          </Text>

          <View style={styles.section}>
            <View style={styles.colorContainer}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    columnGap: 8,
                  }}
                >
                  <View
                    style={[styles.colorOption, { backgroundColor: "#FF6347" }]}
                  ></View>
                  <Text style={styles.textcolor}>Noir</Text>
                </View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={18}
                  color="#888"
                  style={styles.closeIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    columnGap: 8,
                  }}
                >
                  <View
                    style={[styles.colorOption, { backgroundColor: "#FF6347" }]}
                  ></View>
                  <Text style={styles.textcolor}>Noir</Text>
                </View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={18}
                  color="#888"
                  style={styles.closeIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    columnGap: 8,
                  }}
                >
                  <View
                    style={[styles.colorOption, { backgroundColor: "#FF6347" }]}
                  ></View>
                  <Text style={styles.textcolor}>Noir</Text>
                </View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={18}
                  color="#888"
                  style={styles.closeIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    columnGap: 8,
                  }}
                >
                  <View
                    style={[styles.colorOption, { backgroundColor: "#FF6347" }]}
                  ></View>
                  <Text style={styles.textcolor}>Noir</Text>
                </View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={18}
                  color="#888"
                  style={styles.closeIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    columnGap: 8,
                  }}
                >
                  <View
                    style={[styles.colorOption, { backgroundColor: "#FF6347" }]}
                  ></View>
                  <Text style={styles.textcolor}>Noir</Text>
                </View>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={18}
                  color="#888"
                  style={styles.closeIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Quatrième section: titre, importation d'images et bouton enregistrer */}
        <View style={styles.page}>
          <Text style={styles.sectionTitle1}>
            Ajouter une photo de votre vehicule ?
          </Text>

          <View style={styles.section1}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.imageContainer}>
                {images.map((imageUri, index) => (
                  <Image
                    key={index}
                    source={{ uri: imageUri }}
                    style={styles.image}
                  />
                ))}
              </View>
              <TouchableOpacity
                style={{ color: COLOR.orangeColor }}
                onPress={handleImagePick}
              >
                <Text style={styles.sectionTitle}>Importer des images</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Enregistrer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {activeIndex !== 3 && <View style={styles.buttonNext}>
        <ButtonNext onPress={onNextPress} />
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    alignItems: "flex-start",
  },
  page: {
    width,
    alignItems: "flex=start",
    padding: 20,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: "100%",
  },
  section1: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "space-between",
  },
  textcolor: {
    fontFamily: "Poppins_600SemiBold",
    color: COLOR.lessGreenColor,
  },
  sectionTitle1: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: "Poppins_600SemiBold",
  },
  sectionTitle: {
    fontSize: 16,
    color: COLOR.lessGreenColor,
    marginBottom: 10,
    fontFamily: "Poppins_600SemiBold",
  },
  sectionsTitle: {
    fontSize: 12,
    color: COLOR.orangeColor,
    marginBottom: 10,
    fontFamily: "Poppins_600SemiBold",
  },
  imageContainer: {
    width: 200,
    height: 200,
    backgroundColor: COLOR.lessGrayColor,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: COLOR.lessGrayColor,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: COLOR.lessGreenColor,
  },
  closeIcon: {
    marginLeft: 10,
    color: COLOR.lessGreenColor,
  },
  colorContainer: {
    width: "100%",
    rowGap: 24,
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 5,
  },
  colorOption: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  uploadButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 10,
  },
  uploadButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  saveButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 10,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default AddCar;
