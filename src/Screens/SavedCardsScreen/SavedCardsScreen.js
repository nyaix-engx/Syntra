import React, {useState, useEffect, useRef} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Animated, {EasingNode} from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';

import BackButtonTitle from '../../Components/BackButtonTitle';
import CreditCard from '../../Components/CreditCard';
import ScaleAnimation from '../../Components/ScaleAnimation';
import Button from '../../Components/Button';
import EntryAnimation from '../../Components/EntryAnimation';

import {cardData} from '../../Utils/arrays';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params?.cards, cards]);

  const getContent = () => {
    return (
      <>
        {!cards.length > 0 ? (
          <View style={styles.emptyContentView}>
            <Animated.View
              style={[
                styles.emptyLottieView,
                {
                  transform: [{scale: scaleLottie}],
                },
              ]}>
              <LottieView
                source={require('../../Assets/lottie/visa_master.json')}
                style={styles.emptyLottieStyle}
                ref={animation => {
                  lottieAnimation = animation;
                }}
                loop={false}
              />
            </Animated.View>
            <View style={styles.emptyLottieTextView}>
              <Text style={styles.emptyLottieText}>
                SAVE YOUR CREDIT/DEBIT CARDS
              </Text>
              <Animated.Text
                style={[
                  styles.lottieSmallText,
                  {
                    opacity: subTextOpacity,
                  },
                ]}>
                It's convenient to pay with saved cards.
              </Animated.Text>
            </View>
            <View style={styles.addCardView}>
              <ScaleAnimation
                onPress={() =>
                  navigation.navigate('AddCardPage', {
                    type: 'ADD',
                    cards,
                  })
                }
                scaleTo={0.9}>
                <View style={styles.addCardTextView}>
                  <Text style={styles.addCardText}>ADD CARD</Text>
                </View>
              </ScaleAnimation>
            </View>
          </View>
        ) : (
          <ScrollView
            style={styles.scrollViewStyle}
            ref={scrollRef}
            showsVerticalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            bounces={false}>
            <View style={styles.scrollViewContentStyle}>
              <ScaleAnimation
                onPress={() =>
                  navigation.navigate('AddCardPage', {
                    type: 'ADD',
                    cards,
                  })
                }
                scaleTo={0.9}>
                <Button viewProps={styles.plusCard}>
                  <Entypo
                    name="add-to-list"
                    size={hp(3)}
                    style={styles.addIcon}
                  />
                  <Text style={styles.plusCardText}>ADD CARD</Text>
                </Button>
              </ScaleAnimation>
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButtonTitle title="SAVED CARDS" />
      </View>
      <View style={styles.content}>{getContent()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flex: 0.8},
  content: {flex: 8, backgroundColor: '#F4F4F4'},
  emptyContentView: {flex: 1, backgroundColor: 'white'},
  emptyLottieView: {
    height: hp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyLottieStyle: {height: hp(15), width: hp(15)},
  emptyLottieTextView: {paddingVertical: hp(2)},
  emptyLottieText: {
    textAlign: 'center',
    fontFamily: 'Raleway-Medium',
    fontSize: hp(1.8),
    fontWeight: '600',
    color: 'black',
    marginBottom: hp(1),
  },
  lottieSmallText: {
    textAlign: 'center',
    fontFamily: 'ArchitectsDaughter-Regular',
    color: 'grey',
    fontSize: hp(1.8),
  },
  addCardView: {paddingVertical: hp(3), alignItems: 'center'},
  addCardTextView: {
    backgroundColor: 'white',
    paddingVertical: hp(1.5),
    paddingHorizontal: hp(5),
    borderColor: '#e0e0e0',
    borderWidth: hp(0.1),
  },
  addCardText: {
    color: 'blue',
    fontFamily: 'Poppins-Medium',
    fontSize: hp(2),
  },
  scrollViewStyle: {flex: 1},
  scrollViewContentStyle: {paddingHorizontal: hp(2), paddingVertical: hp(2)},
  plusCard: {
    backgroundColor: '#fb7ca0',
    paddingVertical: hp(1.8),
    borderRadius: hp(0.5),
    marginBottom: hp(2),
  },
  addIcon: {color: '#ffffff'},
  plusCardText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    fontSize: hp(1.9),
    paddingHorizontal: hp(2),
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default SavedCardsScreen;
