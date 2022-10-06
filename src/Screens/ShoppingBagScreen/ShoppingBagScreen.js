import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Pressable, ScrollView, Image} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ShoppingBagCard from '../../Components/ShoppingBagCard';
import Fontisto from 'react-native-vector-icons/Fontisto';
import BackButtonTitle from '../../Components/BackButtonTitle';
import ChangeDeliveryModal from '../../Components/ChangeDeliveryModal';
import Animated, {
  EasingNode,
  Easing,
  Extrapolate,
  useSharedValue,
  withTiming,
  withRepeat,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  offers,
  addresses,
  shoppingBagItems,
  interestArray,
} from '../../Utils/arrays';
import LottieView from 'lottie-react-native';
import {Avatar, ListItem, List} from '@ui-kitten/components';
import ApplyCouponModal from '../../Components/ApplyCouponModal';
import ScaleAnimation from '../../Components/ScaleAnimation';
import Button from '../../Components/Button';

const ShoppingBagScreen = ({navigation}) => {
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
      console.log('run');
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
      let discountAmount = 0.05 * totalPrice;
      setDiscount(discountAmount);
      setTotalAmount(totalPrice - discountAmount);
    } else {
      setDiscount(0);
      setTotalAmount(totalPrice);
    }
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
          <Text
            style={{
              textAlign: 'left',
              fontFamily: 'Poppins-Light',
              fontSize: hp(1.4),
              color: 'black',
            }}>
            {data}
          </Text>
        </View>
      );
    });
  };
  const renderItem = ({item, index}) => (
    <ListItem
      style={{paddingHorizontal: hp(2)}}
      title={() => (
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: hp(1.6),
            paddingHorizontal: hp(1),
            color: 'black',
          }}>
          {item.brand}
        </Text>
      )}
      description={() => (
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: hp(1.6),
            paddingHorizontal: hp(1),
          }}>
          {item.category}
        </Text>
      )}
      accessoryLeft={() => (
        <Avatar
          ImageComponent={() => (
            <Image
              style={{width: hp(6), height: hp(6), borderRadius: hp(3)}}
              source={item.image}
            />
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
        <View style={{flex: 1}}>
          <View style={{flex: 8}}>
            <ScrollView
              style={{flex: 1}}
              bounces={false}
              onScroll={handleScroll}
              ref={scrollRef}
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={false}>
              <View
                style={{
                  backgroundColor: 'white',
                  marginTop: hp(2),
                  paddingVertical: hp(2),
                  marginBottom: hp(2),
                }}>
                <Text
                  style={{
                    fontFamily: 'Raleway-Medium',
                    fontWeight: '600',
                    fontSize: hp(2),
                    textAlign: 'center',
                    marginBottom: hp(1),
                    color: 'black',
                  }}>
                  Trust & Safety Promise
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      paddingHorizontal: hp(0.5),
                      borderLeftColor: '#d6d6d6',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Light',
                        fontSize: hp(1.5),
                        color: 'black',
                      }}>
                      Original Products
                    </Text>
                  </View>
                  <View
                    style={{
                      paddingHorizontal: hp(0.5),
                      borderLeftWidth: hp(0.1),
                      borderLeftColor: '#d6d6d6',
                      borderRightWidth: hp(0.1),
                      borderRightColor: '#d6d6d6',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Light',
                        fontSize: hp(1.5),
                        color: 'black',
                      }}>
                      Safe Payment
                    </Text>
                  </View>
                  <View
                    style={{
                      paddingHorizontal: hp(0.5),
                      borderLeftColor: '#d6d6d6',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Light',
                        fontSize: hp(1.5),
                        color: 'black',
                      }}>
                      Easy returns
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: hp(1.5),
                  paddingVertical: hp(2),
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: hp(2),
                }}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      fontSize: hp(1.8),
                      marginRight: hp(1),
                      color: 'black',
                    }}>
                    Deliver to:
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Light',
                      fontSize: hp(1.8),
                      color: 'black',
                    }}>
                    {address.pincode}
                  </Text>
                </View>
                <Pressable onPress={() => setShowDeliveryModal(true)}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      fontSize: hp(1.8),
                      color: '#fb7ca0',
                    }}>
                    CHANGE
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: hp(1.5),
                  paddingVertical: hp(2),
                  marginBottom: hp(2),
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: hp(1),
                  }}>
                  <View style={{marginRight: hp(1.5)}}>
                    <Image
                      source={require('../../Assets/Images/offer.png')}
                      style={{height: hp(3), width: hp(3)}}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                        fontSize: hp(1.7),
                        color: 'black',
                      }}>
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
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: hp(1.7),
                        fontFamily: 'Poppins-Medium',
                        marginRight: hp(0.5),
                        color: '#fb7ca0',
                      }}>
                      Show More
                    </Text>
                    <Animated.View
                      style={{
                        transform: [{rotateZ: interpolatedValue}],
                      }}>
                      <Ionicons
                        name="ios-chevron-down-sharp"
                        size={hp(2.2)}
                        style={{color: '#fb7ca0'}}
                      />
                    </Animated.View>
                  </View>
                </Pressable>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: hp(3),
                  paddingHorizontal: hp(1.5),
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      fontSize: hp(1.9),
                      color: 'black',
                    }}>
                    {shoppingItems.length} ITEMS
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      fontSize: hp(1.9),
                      color: 'black',
                    }}>
                    Total: ${total}
                  </Text>
                </View>
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
                style={{
                  paddingVertical: hp(2),
                  paddingHorizontal: hp(1.5),
                  marginBottom: hp(2),
                  backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                {couponApplied ? (
                  <>
                    <View style={{flex: 1}}>
                      <Image
                        source={require('../../Assets/Images/coupon.png')}
                        style={{height: hp(3), width: hp(3)}}
                      />
                    </View>
                    <View style={{flex: 7}}>
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontFamily: 'Poppins-Medium',
                            fontSize: hp(1.6),
                            marginBottom: hp(1),
                            color: 'black',
                          }}>
                          1 Coupon applied
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Light',
                          color: 'green',
                          fontSize: hp(1.6),
                        }}>
                        You saved additional 5% on MRP
                      </Text>
                    </View>
                  </>
                ) : (
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                        fontSize: hp(1.7),
                        color: 'black',
                      }}>
                      Apply Coupon
                    </Text>
                  </View>
                )}
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Fontisto name="angle-right" size={hp(1.5)} />
                </View>
              </Pressable>
              <View
                style={{
                  paddingVertical: hp(1),
                  paddingHorizontal: hp(1.5),
                  backgroundColor: 'white',
                }}>
                <View
                  style={{
                    paddingVertical: hp(1.5),
                    borderBottomColor: '#757575',
                    borderBottomWidth: hp(0.05),
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      fontSize: hp(1.7),
                      color: 'black',
                    }}>
                    PRICE DETAILS ({shoppingItems.length} Items)
                  </Text>
                </View>
                <View
                  style={{
                    paddingVertical: hp(1.5),
                    borderBottomColor: '#757575',
                    borderBottomWidth: hp(0.05),
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: hp(1),
                    }}>
                    <Text
                      style={{
                        fontSize: hp(1.6),
                        fontFamily: 'Poppins-Light',
                        color: 'black',
                      }}>
                      Total MRP
                    </Text>
                    <Text
                      style={{
                        fontSize: hp(1.6),
                        fontFamily: 'Poppins-Light',
                        color: 'black',
                      }}>
                      ${total}
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: hp(1),
                    }}>
                    <Text
                      style={{
                        fontSize: hp(1.6),
                        fontFamily: 'Poppins-Light',
                        color: 'black',
                      }}>
                      Coupon Discount
                    </Text>
                    <Text
                      style={{
                        fontSize: hp(1.6),
                        fontFamily: 'Poppins-Light',
                        color: 'green',
                      }}>
                      -${discount}
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: hp(1.6),
                        fontFamily: 'Poppins-Light',
                        color: 'black',
                      }}>
                      Delivery Fee
                    </Text>
                    <Text
                      style={{
                        fontSize: hp(1.6),
                        fontFamily: 'Poppins-Light',
                        color: 'green',
                      }}>
                      FREE
                    </Text>
                  </View>
                </View>
                <View style={{paddingVertical: hp(1.5)}}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: hp(1.7),
                        fontFamily: 'Poppins-Medium',
                        color: 'black',
                      }}>
                      Total Amount
                    </Text>
                    <Text
                      style={{
                        fontSize: hp(1.7),
                        fontFamily: 'Poppins-Medium',
                        color: 'black',
                      }}>
                      ${totalAmount}
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              flex: 0.7,
              justifyContent: 'center',
              paddingHorizontal: hp(4),
              paddingVertical: hp(1),
            }}>
            <ScaleAnimation onPress={() => {}} disabled={false} scaleTo={0.9}>
              <Button
                viewProps={{
                  borderRadius: hp(0.5),
                  paddingVertical: hp(1.5),
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#fb7ca0',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Raleway-Medium',
                    fontWeight: '600',
                    fontSize: hp(1.9),
                  }}>
                  PLACE ORDER
                </Text>
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
        <View style={{flex: 1}}>
          <View
            style={{
              height: hp(30),
              alignItems: 'center',
              backgroundColor: '#ffffff',
              marginBottom: hp(2),
            }}>
            <LottieView
              source={require('../../Assets/lottie/emptyWishlist.json')}
              autoPlay
              loop={false}
              style={{height: hp(20)}}
            />
            <Animated.View style={[{flexDirection: 'row'}, style]}>
              <Text
                style={{
                  fontFamily: 'Poppins-medium',
                  fontSize: hp(1.8),
                  marginBottom: hp(1),
                  marginRight: hp(0.7),
                  color: 'black',
                }}>
                Hey, it feels so
              </Text>
              <Animated.View style={animatedStyle}>
                <Text
                  style={{
                    fontFamily: 'Poppins-medium',
                    fontSize: hp(1.8),
                    marginBottom: hp(1),
                    color: '#fb7ca0',
                  }}>
                  light!
                </Text>
              </Animated.View>
            </Animated.View>
            <View style={{paddingHorizontal: hp(6)}}>
              <Animated.Text
                style={[
                  {
                    fontFamily: 'ArchitectsDaughter-Regular',
                    fontSize: hp(1.8),
                    textAlign: 'center',
                    color: 'grey',
                  },
                  opacity,
                ]}>
                There is nothing in your bag. Let's add some items.
              </Animated.Text>
            </View>
          </View>
          <List
            bounces={false}
            data={interestArray}
            renderItem={renderItem}
            ListHeaderComponent={
              <View
                style={{
                  paddingHorizontal: hp(2),
                  height: hp(7),
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                }}>
                <Text
                  style={{
                    fontFamily: 'Raleway-Medium',
                    fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(1.7),
                    fontWeight: '600',
                    color: '#363636',
                  }}>
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
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="SHOPPING BAG" />
      </View>
      <View style={{flex: 8.7}}>{getContent()}</View>
    </SafeAreaView>
  );
};

export default ShoppingBagScreen;
