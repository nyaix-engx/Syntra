import React, {useState, useEffect, useRef} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButtonTitle from '../../Components/BackButtonTitle';
import CreditCard from '../../Components/CreditCard';
import LottieView from 'lottie-react-native';
import {cardData} from '../../Utils/arrays';
import ScaleAnimation from '../../Components/ScaleAnimation';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../../Components/Button';
import Animated, {EasingNode} from 'react-native-reanimated';
import EntryAnimation from '../../Components/EntryAnimation';

const SavedCardsScreen = ({navigation, route}) => {
  const [cards, setCards] = useState(cardData);
  const scrollRef = useRef();
  const [scrollY, setScrollY] = useState(0);
  const subTextOpacity = new Animated.Value(0);
  let lottieAnimation;
  const scaleLottie = new Animated.Value(0.4);

  const handleScroll = e => {
    setScrollY(e.nativeEvent.contentOffset.y);
  };

  useEffect(() => {
    if (route.params?.cards) {
      setCards(route.params.cards);
    }
    if (cards.length === 0) {
      Animated.timing(subTextOpacity, {
        duration: 1000,
        toValue: 1,
        easing: EasingNode.ease,
      }).start();
      Animated.timing(scaleLottie, {
        duration: 1000,
        toValue: 1,
        easing: EasingNode.ease,
      }).start();
      setTimeout(() => {
        lottieAnimation.play();
      }, 1000);
    }
  }, [route.params?.cards, cards]);

  const getContent = () => {
    return (
      <>
        {!cards.length > 0 ? (
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <Animated.View
              style={{
                height: hp(20),
                justifyContent: 'center',
                alignItems: 'center',
                transform: [{scale: scaleLottie}],
              }}>
              <LottieView
                source={require('../../Assets/lottie/visa_master.json')}
                style={{height: hp(15), width: hp(15)}}
                ref={animation => {
                  lottieAnimation = animation;
                }}
                loop={false}
              />
            </Animated.View>
            <View style={{paddingVertical: hp(2)}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Raleway-Medium',
                  fontSize: hp(1.8),
                  fontWeight: '600',
                  color: 'black',
                  marginBottom: hp(1),
                }}>
                SAVE YOUR CREDIT/DEBIT CARDS
              </Text>
              <Animated.Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'ArchitectsDaughter-Regular',
                  color: 'grey',
                  fontSize: hp(1.8),
                  opacity: subTextOpacity,
                }}>
                It's convenient to pay with saved cards.
              </Animated.Text>
            </View>
            <View style={{paddingVertical: hp(3), alignItems: 'center'}}>
              <ScaleAnimation
                onPress={() =>
                  navigation.navigate('AddCardPage', {
                    type: 'ADD',
                    cards,
                  })
                }
                scaleTo={0.9}>
                <View
                  style={{
                    backgroundColor: 'white',
                    paddingVertical: hp(1.5),
                    paddingHorizontal: hp(5),
                    borderColor: '#e0e0e0',
                    borderWidth: hp(0.1),
                  }}>
                  <Text
                    style={{
                      color: 'blue',
                      fontFamily: 'Poppins-Medium',
                      fontSize: hp(2),
                    }}>
                    ADD CARD
                  </Text>
                </View>
              </ScaleAnimation>
            </View>
          </View>
        ) : (
          <ScrollView
            style={{flex: 1}}
            ref={scrollRef}
            showsVerticalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            bounces={false}>
            <View style={{paddingHorizontal: hp(2), paddingVertical: hp(2)}}>
              <View style={{paddingHorizontal: hp(2)}}>
                <ScaleAnimation
                  onPress={() =>
                    navigation.navigate('AddCardPage', {
                      type: 'ADD',
                      cards,
                    })
                  }
                  scaleTo={0.9}>
                  <Button
                    viewProps={{
                      backgroundColor: '#fb7ca0',
                      paddingVertical: hp(1.8),
                      borderRadius: hp(0.5),
                      marginBottom: hp(2),
                    }}>
                    <Entypo
                      name="add-to-list"
                      size={hp(3)}
                      style={{color: '#ffffff'}}
                    />
                    <Text
                      style={{
                        fontFamily: 'Raleway-Medium',
                        fontWeight: '600',
                        fontSize: hp(1.9),
                        paddingHorizontal: hp(2),
                        textAlign: 'center',
                        color: '#ffffff',
                      }}>
                      ADD CARD
                    </Text>
                  </Button>
                </ScaleAnimation>
              </View>
              <View>
                {cards.map((data, index) => {
                  return (
                    <EntryAnimation index={index + 1} key={index}>
                      <CreditCard
                        data={data}
                        index={index}
                        cards={cards}
                        setCards={setCards}
                        scrollY={scrollY}
                        scrollRef={scrollRef}
                      />
                    </EntryAnimation>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        )}
      </>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="SAVED CARDS" />
      </View>
      <View style={{flex: 8, backgroundColor: '#F4F4F4'}}>{getContent()}</View>
    </SafeAreaView>
  );
};

export default SavedCardsScreen;
