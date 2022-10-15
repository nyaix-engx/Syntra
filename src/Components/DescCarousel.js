import React, {useState, useRef} from 'react';
import {
  FlatList,
  Pressable,
  View,
  Dimensions,
  Image,
  useWindowDimensions,
  Animated,
  StyleSheet,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

import {imageArray} from '../Utils/arrays';

const Paginator = ({data, scrollX}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.dotContainer}>
      {data.map((item, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        //initial scroll value is 0 and index is 0 as well so for 0th index the scrollX interpolated value will be hp(2)
        // as the index increases the scrollX value will map to the index*width as the index is increasing as well
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [hp(1.1), hp(2), hp(1.1)],
          extrapolate: 'clamp',
        });
        const dotOpacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={index}
            style={[
              styles.dotView,
              {
                width: dotWidth,
                opacity: dotOpacity,
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const Carousel = props => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const slidesRef = useRef(null);
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    const width = Dimensions.get('window').width;
    return (
      <Pressable
        onPress={() => navigation.push('ImageDisplayPage', {imageArray})}>
        <Image source={item.img} style={[{width}, styles.productImage]} />
      </Pressable>
    );
  };

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  return (
    <View style={props.style}>
      <FlatList
        style={styles.flatlistStyle}
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
      <Paginator data={imageArray} scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  flatlistStyle: {height: '90%'},
  productImage: {height: '100%'},
  dotContainer: {
    height: '6%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dotView: {
    height: hp(1),
    borderRadius: hp(1),
    backgroundColor: '#949494',
    marginHorizontal: hp(0.7),
  },
});

export default Carousel;
