import React, {useRef} from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import ContentContainer from '../Components/HomeScreenComps/ContentContainer';
import Animated from 'react-native-reanimated';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
        <View style={{position: 'relative'}}>
          <Image
            source={backgroundImage}
            resizeMode="stretch"
            style={{
              position: 'absolute',
              height: height || hp(40),
              width,
            }}
          />
          <Animated.View
            style={{
              position: 'absolute',
              backgroundColor: color,
              width: hp(60),
              height: height || hp(40),
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                flex: 1,
                paddingHorizontal: hp(2),
                width: '40%',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: hp(3),
                  fontWeight: '500',
                  fontFamily: 'Raleway-Medium',
                }}>
                {coverText}
              </Text>
            </View>
          </Animated.View>
          <Animated.ScrollView
            style={{paddingHorizontal: hp(3), top: (height - cardHeight) / 2}}
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
            contentContainerStyle={{paddingLeft: hp(15)}}>
            {renderCards(array)}
          </Animated.ScrollView>
        </View>
      </ContentContainer>
    </View>
  );
};

export default FadingBackScroll;
