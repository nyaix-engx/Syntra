import React, {useRef} from 'react';
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
    <View style={styles.paginatorContentWrapper}>
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
              styles.paginatorView,
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

const AuthScreen = props => {
  const scrollX = useRef(new Animated.Value(0)).current;
  // const [currentIndex, setCurrentIndex] = useState(0);
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const slidesRef = useRef(null);
  const image = require('../../Assets/Images/theme_bg.jpg');
  const {width} = useWindowDimensions();
  const renderItem = ({item}) => {
    return <View style={{width: width}}>{item.component}</View>;
  };

  // const viewableItemsChanged = useRef(({viewableItems}) => {
  //   setCurrentIndex(viewableItems[0].index);
  // }).current;

  const getData = () => {
    return [
      {id: 1, component: <SigninScreen setIsSigned={props.setIsSigned} />},
      {id: 2, component: <SignupScreen setIsSigned={props.setIsSigned} />},
    ];
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.contentWrapper}>
          <FlatList
            style={styles.flatlistStyle}
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
            onViewableItemsChanged={() => {}}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          />
          <View style={[styles.paginatorWrapper, {left: (width - hp(20)) / 2}]}>
            <Paginator data={getData()} scrollX={scrollX} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, position: 'relative'},
  contentWrapper: {flex: 1},
  flatlistStyle: {flex: 1},
  tab: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  paginatorWrapper: {
    position: 'absolute',
    paddingVertical: hp(2),
    bottom: Platform.OS === 'ios' ? hp(4) : 0,
  },
  paginatorContentWrapper: {
    height: hp(5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: hp(20),
  },
  paginatorView: {
    height: hp(1),
    borderRadius: hp(1),
    backgroundColor: '#949494',
    marginHorizontal: hp(0.7),
  },
});

export default AuthScreen;
