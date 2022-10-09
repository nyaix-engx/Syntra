import React, {useState, useRef} from 'react';
import {
  FlatList,
  View,
  Dimensions,
  Image,
  Animated,
  Pressable,
  StyleSheet,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Fontisto from 'react-native-vector-icons/Fontisto';

const ImageDisplay = ({route, navigation}) => {
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
      <View style={styles.imageWrapper}>
        <Image source={item.img} style={[styles.image, {width}]} />
      </View>
    );
  };

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.listStyle}
        contentContainerStyle={styles.listContentStyle}
        data={imageArray}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
        style={[
          styles.goBackButton,
          {
            top: insets.top,
          },
        ]}>
        <Fontisto name="plus-a" size={hp(3)} style={styles.crossIcon} />
      </Pressable>
      <View style={[styles.ctaWrapper, {width}]}>
        <Pressable onPress={() => handleDec()} style={styles.angleButton}>
          <Fontisto name="angle-left" size={hp(2.5)} style={styles.angleIcon} />
        </Pressable>
        <Pressable onPress={() => handleInc()} style={styles.angleButton}>
          <Fontisto
            name="angle-right"
            size={hp(2.5)}
            style={styles.angleIcon}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', position: 'relative'},
  listStyle: {backgroundColor: 'white'},
  listContentStyle: {display: 'flex', alignItems: 'center'},
  goBackButton: {
    position: 'absolute',
    paddingHorizontal: hp(1.5),
    paddingVertical: hp(2),
    transform: [{rotateZ: '45deg'}],
  },
  crossIcon: {color: '#757575'},
  ctaWrapper: {
    height: hp(10),
    position: 'absolute',
    zIndex: 34,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  angleButton: {justifyContent: 'center', paddingHorizontal: hp(2)},
  angleIcon: {color: '#757575'},
  imageWrapper: {
    display: 'flex',
    height: hp(70),
    justifyContent: 'center',
  },
  image: {height: '100%'},
});

export default ImageDisplay;
