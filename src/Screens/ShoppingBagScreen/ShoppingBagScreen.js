import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  Platform,
  StyleSheet,
} from 'react-native';
import Animated, {
  EasingNode,
  Easing,
  Extrapolate,
  useSharedValue,
  withTiming,
  withRepeat,
  useAnimatedStyle,
} from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import {Avatar, ListItem, List} from '@ui-kitten/components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import BackButtonTitle from '../../Components/BackButtonTitle';
import ShoppingBagCard from '../../Components/ShoppingBagCard';
import ChangeDeliveryModal from '../../Components/ChangeDeliveryModal';
import ApplyCouponModal from '../../Components/ApplyCouponModal';
import ScaleAnimation from '../../Components/ScaleAnimation';
import Button from '../../Components/Button';

import {
  offers,
  addresses,
  shoppingBagItems,
  interestArray,
} from '../../Utils/arrays';

const ShoppingBagScreen = () => {
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const [showOffers, setShowOffers] = useState(false);
  const height = useRef(new Animated.Value(hp(5.5)));
  const [address, setAddress] = useState(addresses[0]);
  const [shoppingItems, setShoppingItems] = useState(shoppingBagItems);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const subtitleOpacity = useSharedValue(0);
  const translateY = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    return {
      opacity: withTiming(1, {
        duration: 500,
        easing: Easing.inOut(Easing.cubic),
      }),
    };
  });
  useEffect(() => {
    let totalPrice = 0;
    shoppingItems.forEach(data => {
      totalPrice = totalPrice + data.price;
    });
    if (shoppingItems.length === 0) {
      translateY.value = withRepeat(
        withTiming(hp(-2), {duration: 1200, easing: Easing.linear}),
        -1,
        true,
      );
      subtitleOpacity.value = withTiming(1, {
        duration: 1200,
        easing: Easing.linear,
      });
    }
    setTotal(totalPrice);
    if (couponApplied) {
      const discountAmount = 0.05 * totalPrice;
      setDiscount(discountAmount);
      setTotalAmount(totalPrice - discountAmount);
    } else {
      setDiscount(0);
      setTotalAmount(totalPrice);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoppingItems.length, couponApplied]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });
  const opacity = useAnimatedStyle(() => {
    return {
      opacity: subtitleOpacity.value,
    };
  });

  const handleScroll = e => {
    setScrollY(e.nativeEvent.contentOffset.y);
  };

  const scrollRef = useRef();
  const item = () => {
    return offers.map((data, index) => {
      return (
        <View
          key={index}
          style={{
            paddingVertical: hp(0.5),
          }}>
          <Text style={styles.offersText}>{data}</Text>
        </View>
      );
    });
  };
  const renderItem = ({item, index}) => (
    <ListItem
      key={`index_${index}}`}
      style={styles.listItemStyle}
      title={() => <Text style={styles.listItemText}>{item.brand}</Text>}
      description={() => (
        <Text style={styles.listItemSubText}>{item.category}</Text>
      )}
      accessoryLeft={() => (
        <Avatar
          ImageComponent={() => (
            <Image style={styles.listItemImage} source={item.image} />
          )}
        />
      )}
      accessoryRight={() => <Fontisto size={hp(1.4)} name="angle-right" />}
    />
  );

  let interpolatedValue = Animated.interpolateNode(height.current, {
    inputRange: [hp(5.5), hp(24)],
    outputRange: ['0deg', '180deg'],
    extrapolate: Extrapolate.CLAMP,
  });
  const resize = () => {
    Animated.timing(height.current, {
      toValue: showOffers ? hp(5.5) : hp(24),
      duration: 250,
      easing: EasingNode.inOut(EasingNode.cubic),
    }).start();
    setShowOffers(!showOffers);
  };
  const getContent = () => {
    if (shoppingItems.length > 0) {
      return (
        <View style={styles.shoppingBagContent}>
          <View style={styles.shoppingBagContentWrapper}>
            <ScrollView
              style={styles.scrollStyle}
              bounces={false}
              onScroll={handleScroll}
              ref={scrollRef}
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={false}>
              <View style={styles.scrollContentStyle}>
                <Text style={styles.trustText}>Trust & Safety Promise</Text>
                <View style={styles.featuresView}>
                  <View style={styles.featuresTextView}>
                    <Text style={styles.featuresText}>Original Products</Text>
                  </View>
                  <View style={styles.safePaymentView}>
                    <Text style={styles.featuresText}>Safe Payment</Text>
                  </View>
                  <View style={styles.featuresTextView}>
                    <Text style={styles.featuresText}>Easy returns</Text>
                  </View>
                </View>
              </View>
              <View style={styles.deliveryToView}>
                <View style={styles.deliveryToViewWrapper}>
                  <Text style={styles.deliveryToText}>Deliver to:</Text>
                  <Text style={styles.pincodeText}>{address.pincode}</Text>
                </View>
                <Pressable onPress={() => setShowDeliveryModal(true)}>
                  <Text style={styles.changeText}>CHANGE</Text>
                </Pressable>
              </View>
              <View style={styles.offersView}>
                <View style={styles.offersHeader}>
                  <View style={styles.offersImageView}>
                    <MaterialCommunityIcons
                      size={hp(2.5)}
                      style={styles.offersImage}
                      name="offer"
                    />
                  </View>
                  <View>
                    <Text style={styles.availableOffersText}>
                      Available Offers
                    </Text>
                  </View>
                </View>
                <Animated.ScrollView
                  showsVerticalScrollIndicator={false}
                  bounces={false}
                  scrollEnabled={false}
                  style={{height: height.current}}>
                  {item()}
                </Animated.ScrollView>
                <Pressable onPress={() => resize()}>
                  <View style={styles.showMoreView}>
                    <Text style={styles.showMoreText}>Show More</Text>
                    <Animated.View
                      style={{
                        transform: [{rotateZ: interpolatedValue}],
                      }}>
                      <Ionicons
                        name="ios-chevron-down-sharp"
                        size={hp(2.2)}
                        style={styles.downIcon}
                      />
                    </Animated.View>
                  </View>
                </Pressable>
              </View>
              <View style={styles.totalView}>
                <Text style={styles.itemText}>
                  {shoppingItems.length} ITEMS
                </Text>
                <Text style={styles.totalText}>Total: ${total}</Text>
              </View>
              <View style={{paddingHorizontal: hp(1), marginBottom: hp(2)}}>
                {shoppingItems.map((data, index) => {
                  return (
                    <ShoppingBagCard
                      data={data}
                      key={index}
                      index={index}
                      scrollRef={scrollRef}
                      setShoppingItems={setShoppingItems}
                      scrollY={scrollY}
                      shoppingItems={shoppingItems}
                    />
                  );
                })}
              </View>
              <Pressable
                onPress={() => setShowCouponModal(true)}
                style={styles.couponButtonStyle}>
                {couponApplied ? (
                  <>
                    <View style={styles.couponImageView}>
                      <MaterialIcons
                        size={hp(2.5)}
                        name="local-offer"
                        style={styles.couponImage}
                      />
                    </View>
                    <View style={styles.couponAppliedView}>
                      <View style={styles.couponAppliedContentView}>
                        <Text style={styles.couponAppliedText}>
                          1 Coupon applied
                        </Text>
                      </View>
                      <Text style={styles.savedText}>
                        You saved additional 5% on MRP
                      </Text>
                    </View>
                  </>
                ) : (
                  <View style={styles.applyCouponView}>
                    <Text style={styles.applyCouponText}>Apply Coupon</Text>
                  </View>
                )}
                <View style={styles.angleRightView}>
                  <Fontisto name="angle-right" size={hp(1.5)} />
                </View>
              </Pressable>
              <View style={styles.priceDetailsView}>
                <View style={styles.priceDetailsTextView}>
                  <Text style={styles.priceDetailsText}>
                    PRICE DETAILS ({shoppingItems.length} Items)
                  </Text>
                </View>
                <View style={styles.breakdownView}>
                  <View style={styles.breakdownRow}>
                    <Text style={styles.rowBlackText}>Total MRP</Text>
                    <Text style={styles.rowBlackText}>${total}</Text>
                  </View>
                  <View style={styles.breakdownRow}>
                    <Text style={styles.rowBlackText}>Coupon Discount</Text>
                    <Text style={styles.rowGreenText}>-${discount}</Text>
                  </View>
                  <View style={styles.breakdownRow}>
                    <Text style={styles.rowBlackText}>Delivery Fee</Text>
                    <Text style={styles.rowGreenText}>FREE</Text>
                  </View>
                </View>
                <View style={styles.totalAmountView}>
                  <View style={styles.totalAmountContentView}>
                    <Text style={styles.totalAmountText}>Total Amount</Text>
                    <Text style={styles.totalAmountText}>${totalAmount}</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.placeOrderView}>
            <ScaleAnimation onPress={() => {}} disabled={false} scaleTo={0.9}>
              <Button viewProps={styles.placeOrderButtonStyle}>
                <Text style={styles.placeOrderButtonText}>PLACE ORDER</Text>
              </Button>
            </ScaleAnimation>
          </View>
          <ChangeDeliveryModal
            showModal={showDeliveryModal}
            setShowModal={() => setShowDeliveryModal(false)}
            setAddress={setAddress}
          />
          <ApplyCouponModal
            showModal={showCouponModal}
            setShowModal={() => setShowCouponModal(false)}
            setCouponApplied={setCouponApplied}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.emptyShoppingBagView}>
          <View style={styles.emptyShoppingBagContent}>
            <LottieView
              source={require('../../Assets/lottie/emptyWishlist.json')}
              autoPlay
              loop={false}
              style={{height: hp(20)}}
            />
            <Animated.View style={[styles.animatedView, style]}>
              <Text style={styles.feelsText}>Hey, it feels so</Text>
              <Animated.View style={animatedStyle}>
                <Text style={styles.lightText}>light!</Text>
              </Animated.View>
            </Animated.View>
            <View style={styles.emptyBagTextView}>
              <Animated.Text style={[styles.emptyBagText, opacity]}>
                There is nothing in your bag. Let's add some items.
              </Animated.Text>
            </View>
          </View>
          <List
            bounces={false}
            data={interestArray}
            renderItem={renderItem}
            ListHeaderComponent={
              <View style={styles.interestedView}>
                <Text style={styles.interestedText}>
                  YOU MAY BE INTERESTED IN
                </Text>
              </View>
            }
          />
        </View>
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButtonTitle title="SHOPPING BAG" />
      </View>
      <View style={styles.content}>{getContent()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flex: 0.8},
  content: {flex: 8.7},
  shoppingBagContent: {flex: 1},
  shoppingBagContentWrapper: {flex: 8},
  scrollStyle: {flex: 1},
  scrollContentStyle: {
    backgroundColor: 'white',
    marginTop: hp(2),
    paddingVertical: hp(2),
    marginBottom: hp(2),
  },
  trustText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    fontSize: hp(2),
    textAlign: 'center',
    marginBottom: hp(1),
    color: 'black',
  },
  featuresView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  featuresTextView: {
    paddingHorizontal: hp(0.5),
    borderLeftColor: '#d6d6d6',
  },
  featuresText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.5),
    color: 'black',
  },
  safePaymentView: {
    paddingHorizontal: hp(0.5),
    borderLeftWidth: hp(0.1),
    borderLeftColor: '#d6d6d6',
    borderRightWidth: hp(0.1),
    borderRightColor: '#d6d6d6',
  },
  deliveryToView: {
    backgroundColor: 'white',
    paddingHorizontal: hp(1.5),
    paddingVertical: hp(2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
  deliveryToViewWrapper: {display: 'flex', flexDirection: 'row'},
  deliveryToText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.8),
    marginRight: hp(1),
    color: 'black',
  },
  pincodeText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.8),
    color: 'black',
  },
  changeText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.8),
    color: '#fb7ca0',
  },
  offersView: {
    backgroundColor: 'white',
    paddingHorizontal: hp(1.5),
    paddingVertical: hp(2),
    marginBottom: hp(2),
  },
  offersHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  offersImageView: {marginRight: hp(1.5)},
  offersImage: {height: hp(3), width: hp(3)},
  availableOffersText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.7),
    color: 'black',
  },
  showMoreView: {flexDirection: 'row', alignItems: 'center'},
  showMoreText: {
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Medium',
    marginRight: hp(0.5),
    color: '#fb7ca0',
  },
  downIcon: {color: '#fb7ca0'},
  totalView: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: hp(3),
    paddingHorizontal: hp(1.5),
    justifyContent: 'space-between',
  },
  itemText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.9),
    color: 'black',
  },
  totalText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.9),
    color: 'black',
  },
  couponButtonStyle: {
    paddingVertical: hp(2),
    paddingHorizontal: hp(1.5),
    marginBottom: hp(2),
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  couponImageView: {flex: 1},
  couponImage: {height: hp(3), width: hp(3)},
  couponAppliedView: {flex: 7},
  couponAppliedContentView: {display: 'flex', flexDirection: 'row'},
  couponAppliedText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.6),
    marginBottom: hp(1),
    color: 'black',
  },
  savedText: {
    fontFamily: 'Poppins-Light',
    color: 'green',
    fontSize: hp(1.6),
  },
  applyCouponView: {flex: 1},
  applyCouponText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.7),
    color: 'black',
  },
  angleRightView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceDetailsView: {
    paddingVertical: hp(1),
    paddingHorizontal: hp(1.5),
    backgroundColor: 'white',
  },
  priceDetailsTextView: {
    paddingVertical: hp(1.5),
    borderBottomColor: '#757575',
    borderBottomWidth: hp(0.05),
  },
  priceDetailsText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.7),
    color: 'black',
  },
  breakdownView: {
    paddingVertical: hp(1.5),
    borderBottomColor: '#757575',
    borderBottomWidth: hp(0.05),
    display: 'flex',
    justifyContent: 'center',
  },
  breakdownRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(1),
  },
  rowBlackText: {
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Light',
    color: 'black',
  },
  rowGreenText: {
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Light',
    color: 'green',
  },
  totalAmountView: {paddingVertical: hp(1.5)},
  totalAmountContentView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalAmountText: {
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  placeOrderView: {
    flex: 0.7,
    justifyContent: 'center',
    paddingHorizontal: hp(4),
    paddingVertical: hp(1),
  },
  placeOrderButtonStyle: {
    borderRadius: hp(0.5),
    paddingVertical: hp(1.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fb7ca0',
  },
  placeOrderButtonText: {
    color: 'white',
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    fontSize: hp(1.9),
  },
  emptyShoppingBagView: {flex: 1},
  emptyShoppingBagContent: {
    height: hp(30),
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginBottom: hp(2),
  },
  animatedView: {flexDirection: 'row'},
  feelsText: {
    fontFamily: 'Poppins-medium',
    fontSize: hp(1.8),
    marginBottom: hp(1),
    marginRight: hp(0.7),
    color: 'black',
  },
  lightText: {
    fontFamily: 'Poppins-medium',
    fontSize: hp(1.8),
    marginBottom: hp(1),
    color: '#fb7ca0',
  },
  emptyBagTextView: {paddingHorizontal: hp(6)},
  emptyBagText: {
    fontFamily: 'ArchitectsDaughter-Regular',
    fontSize: hp(1.8),
    textAlign: 'center',
    color: 'grey',
  },
  interestedView: {
    paddingHorizontal: hp(2),
    height: hp(7),
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  interestedText: {
    fontFamily: 'Raleway-Medium',
    fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(1.7),
    fontWeight: '600',
    color: '#363636',
  },
  listItemStyle: {paddingHorizontal: hp(2)},
  listItemText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.6),
    paddingHorizontal: hp(1),
    color: 'black',
  },
  listItemSubText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.6),
    paddingHorizontal: hp(1),
  },
  listItemImage: {width: hp(6), height: hp(6), borderRadius: hp(3)},
  offersText: {
    textAlign: 'left',
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.4),
    color: 'black',
  },
});

export default ShoppingBagScreen;
