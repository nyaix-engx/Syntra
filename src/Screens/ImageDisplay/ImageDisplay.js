import React, {useState, useRef} from 'react';
import {
  FlatList,
  View,
  Dimensions,
  Image,
  Animated,
  Pressable,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Fontisto from 'react-native-vector-icons/Fontisto';

const ImageDisplay = ({route,navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const slidesRef = useRef(null);
  const width = Dimensions.get('window').width;
  const insets = useSafeAreaInsets();
  const {imageArray} = route.params;
  const handleInc = () => {
    if (currentIndex + 1 < imageArray.length) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    }
  };

  const handleDec = () => {
    if (currentIndex > 0) {
      slidesRef.current.scrollToIndex({index: currentIndex - 1});
    }
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          display: 'flex',
          height: hp(70),
          justifyContent: 'center',
        }}>
          <Image source={item.img} style={{width, height: '100%'}} />
      </View>
    );
  };

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', position: 'relative'}}>
      <FlatList
        style={{backgroundColor: 'white'}}
        contentContainerStyle={{display: 'flex', alignItems: 'center'}}
        data={imageArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {
            useNativeDriver: false,
          },
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <Pressable
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          top: insets.top,
          paddingHorizontal: hp(1.5),
          paddingVertical: hp(2),
          transform: [{rotateZ: '45deg'}],
        }}>
        <Fontisto name="plus-a" size={hp(3)} style={{color: '#757575'}} />
      </Pressable>
      <View
        style={{
          height: hp(10),
          position: 'absolute',
          zIndex: 34,
          width,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Pressable
          onPress={() => handleDec()}
          style={{justifyContent: 'center', paddingHorizontal: hp(2)}}>
          <Fontisto
            name="angle-left"
            size={hp(2.5)}
            style={{color: '#757575'}}
          />
        </Pressable>
        <Pressable
          onPress={() => handleInc()}
          style={{justifyContent: 'center', paddingHorizontal: hp(2)}}>
          <Fontisto
            name="angle-right"
            size={hp(2.5)}
            style={{color: '#757575'}}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ImageDisplay;
