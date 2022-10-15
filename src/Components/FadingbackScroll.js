import React, {useRef} from 'react';
import {View, Text, Image, useWindowDimensions, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import ContentContainer from '../Components/HomeScreenComps/ContentContainer';

const FadingBackScroll = ({
  height,
  headingText,
  backgroundImage,
  coverText,
  array,
  cardComponent: CardComponent,
  style,
}) => {
  const scrollX = useRef(new Animated.Value(0));
  const {width} = useWindowDimensions();
  const cardHeight = height - hp(3);
  const color = Animated.interpolateColors(
    scrollX.current,
    {
      inputRange: [0, hp(18)],
      outputColorRange: ['rgba(0,0,0,0.5)', 'rgba(255,255,255,1)'],
    },
    {
      inputRange: [hp(18), 0],
      outputColorRange: ['rgba(255,255,255,1)', 'rgba(0,0,0,0.5)'],
    },
  );

  const renderCards = arr => {
    return arr.map((data, index) => {
      return <CardComponent key={index} height={cardHeight} data={data} />;
    });
  };

  return (
    <View style={style}>
      <ContentContainer heading={headingText}>
        <View style={styles.contentContainer}>
          <Image
            source={backgroundImage}
            resizeMode="stretch"
            style={[
              styles.backgroundImage,
              {
                height: height || hp(40),
                width,
              },
            ]}
          />
          <Animated.View
            style={[
              styles.animatedFilm,
              {
                backgroundColor: color,
                height: height || hp(40),
              },
            ]}>
            <View style={styles.coverTextView}>
              <Text style={styles.coverText}>{coverText}</Text>
            </View>
          </Animated.View>
          <Animated.ScrollView
            style={[{top: (height - cardHeight) / 2}, styles.scrollStyle]}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX.current,
                  },
                },
              },
            ])}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            bounces={false}
            contentContainerStyle={styles.scrollContentStyle}>
            {renderCards(array)}
          </Animated.ScrollView>
        </View>
      </ContentContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {position: 'relative'},
  backgroundImage: {
    position: 'absolute',
  },
  animatedFilm: {
    position: 'absolute',
    width: hp(60),
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  coverTextView: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: hp(2),
    width: '40%',
  },
  coverText: {
    color: 'white',
    fontSize: hp(3),
    fontWeight: '500',
    fontFamily: 'Raleway-Medium',
  },
  scrollStyle: {paddingHorizontal: hp(3)},
  scrollContentStyle: {paddingLeft: hp(15)},
});

export default FadingBackScroll;
