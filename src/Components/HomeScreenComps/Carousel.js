/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {
  Image,
  FlatList,
  Dimensions,
  Animated,
  View,
  StyleSheet,
  Platform,
} from 'react-native';
import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {carouselImages} from '../../Utils/arrays';

const VISIBLE_ITEMS = 3;

export default function NewCarousel() {
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const width = Dimensions.get('window').width;
  const [index, setIndex] = React.useState(0);
  const setActiveIndex = React.useCallback(activeIndex => {
    scrollXIndex.setValue(activeIndex);
    setIndex(activeIndex);
  });

  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  return (
    <View style={styles.container}>
      <FlingGestureHandler
        key="left"
        direction={Directions.LEFT}
        onHandlerStateChange={ev => {
          if (ev.nativeEvent.state === State.END) {
            if (index === carouselImages.length - 1) {
              return;
            }
            setActiveIndex(index + 1);
          }
        }}>
        <FlingGestureHandler
          key="right"
          direction={Directions.RIGHT}
          onHandlerStateChange={ev => {
            if (ev.nativeEvent.state === State.END) {
              if (index === 0) {
                return;
              }
              setActiveIndex(index - 1);
            }
          }}>
          <FlatList
            data={carouselImages}
            keyExtractor={item => item.img}
            horizontal
            contentContainerStyle={styles.flatlistContainerStyle}
            scrollEnabled={false}
            removeClippedSubviews={false}
            CellRendererComponent={({
              item,
              index,
              children,
              style,
              ...props
            }) => {
              const newStyle = [style, {zIndex: carouselImages.length - index}];
              return (
                <View style={newStyle} index={`index_${index}`} {...props}>
                  {children}
                </View>
              );
            }}
            renderItem={({item, index}) => {
              const inputRange = [index - 1, index, index + 1];
              const translateX = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [hp(7), 0, -hp(12)],
              });
              const scale = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [0.8, 1, 1.3],
              });
              const opacity = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
              });

              return (
                <Animated.View
                  style={[
                    styles.animatedView,
                    {
                      left: (width - (width - hp(8))) / 2,
                      opacity,
                      transform: [
                        {
                          translateX,
                        },
                        {scale},
                      ],
                    },
                  ]}>
                  <Image
                    resizeMode="center"
                    source={item.img}
                    style={[
                      styles.imageStyle,
                      {
                        width: width - hp(8),
                      },
                    ]}
                  />
                </Animated.View>
              );
            }}
          />
        </FlingGestureHandler>
      </FlingGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'android' ? hp(37) : hp(35.5),
  },
  flatlistContainerStyle: {
    flex: 1,
    paddingVertical: Platform.OS === 'android' ? hp(2.3) : hp(0),
  },
  animatedView: {
    position: 'absolute',
  },
  imageStyle: {
    height: Platform.OS === 'android' ? hp(32) : hp(35),
    borderRadius: hp(1),
  },
});
