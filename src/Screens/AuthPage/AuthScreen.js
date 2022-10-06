import React, {useState, useRef} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
  useWindowDimensions,
  Animated,
  Platform,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SignupScreen from '../SignupScreen/SignupScreen';
import SigninScreen from '../SigninScreen/SigninScreen';

// const authArray = [
//   {id: 1, component: <SigninScreen />},
//   {id: 2, component: <SignupScreen />},
// ];

const Paginator = ({data, scrollX}) => {
  const {width} = useWindowDimensions();
  return (
    <View
      style={{
        height: hp(5),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: hp(20),
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

const AuthScreen = props => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const slidesRef = useRef(null);
  const image = require('../../Assets/Images/theme_bg.jpg');
  const {width} = useWindowDimensions();
  const renderItem = ({item}) => {
    return <View style={{width: width}}>{item.component}</View>;
  };

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const getData = () => {
    return [
      {id: 1, component: <SigninScreen setIsSigned={props.setIsSigned} />},
      {id: 2, component: <SignupScreen setIsSigned={props.setIsSigned} />},
    ];
  };

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <ImageBackground source={image} style={styles.image}>
        <View style={{flex: 1}}>
          <FlatList
            style={{flex: 1}}
            data={getData()}
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
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              paddingVertical: hp(2),
              left: (width - hp(20)) / 2,
              bottom: Platform.OS == 'ios' ? hp(4) : 0,
            }}>
            <Paginator data={getData()} scrollX={scrollX} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default AuthScreen;
