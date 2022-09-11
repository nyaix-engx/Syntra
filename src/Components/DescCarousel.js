import React, {useState, useRef} from 'react';
import {
  FlatList,
  Pressable,
  View,
  Dimensions,
  Image,
  useWindowDimensions,
  Animated,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {imageArray} from '../Utils/arrays';
import {useNavigation} from '@react-navigation/native';

const Paginator = ({data, scrollX}) => {
  const {width} = useWindowDimensions();
  return (
    <View
      style={{
        height: '6%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
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
            style={{
              height: hp(1),
              width: dotWidth,
              borderRadius: hp(1),
              backgroundColor: '#949494',
              marginHorizontal: hp(0.7),
              opacity: dotOpacity,
            }}
          />
        );
      })}
    </View>
  );
};

const Carousel = (props) => {
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
          <Image source={item.img} style={{width, height: '100%'}} />
      </Pressable>
    );
  };

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  return (
    <View style={props.style}>
      <FlatList
        style={{height: '90%'}}
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
      <Paginator data={imageArray} scrollX={scrollX} />
    </View>
  );
};

export default Carousel;
