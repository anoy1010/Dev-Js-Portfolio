import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, TouchableOpacity, Image, ScrollView } from 'react-native';
import ButtonNext from '../../comps/buttonNext';
import HomeStyles from './style';
import { useNavigation } from '@react-navigation/native';



const { width } = Dimensions.get('window');

const data = [
    { text: 'Se deplacer à petit prix.', image: require('./../../assets/1navigation.jpg') },
    { text: 'Des co-voitureurs expérimentés et sympa', image: require('./../../assets/1navigation.jpg') },
];

const CarouselComponent = () => {
  const scrollViewRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

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
    if (activeIndex < data.length - 1) {
      const newIndex = activeIndex + 1;
      setActiveIndex(newIndex);
      scrollViewRef.current.scrollTo({ x: newIndex * width, animated: true });
      Animated.spring(animatedValue, {
        toValue: newIndex,
        useNativeDriver: true,
      }).start();
    } else {
    navigation.navigate('ConnexionScreen'); // Naviguer vers une autre page
  }
  };

  const renderDots = () => {
    return (
      <View style={styles.dotContainer}>
        {data.map((_, index) => {
          const backgroundColor = animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [index === activeIndex ? '#FF4500' : '#D3D3D3', index === activeIndex ? '#FF4500' : '#D3D3D3'],
          });
          return <Animated.View key={index} style={[styles.dot, { backgroundColor }]} />;
        })}
      </View>
    );
  };

  return (
    <View style={HomeStyles.contain}>
         <View style={HomeStyles.viewimage}>
        <Image 
          source={require("./../../assets/logo.png")}
          style={HomeStyles.logo}
        />
      </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => (
          <View style={styles.page} key={index}>
            <View style={HomeStyles.viewImg}>
            <Image source={item.image} style={HomeStyles.img} />
            </View>
            <Text style={HomeStyles.text}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={HomeStyles.Control}>
      {renderDots()}
      </View>
      <ButtonNext onPress={onNextPress} style={HomeStyles.ControlPosition}/>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    marginTop: 20,
  },
  dotContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
  button: {
    backgroundColor: '#FF4500',
    padding: 15,
    borderRadius: 30,
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default CarouselComponent;
