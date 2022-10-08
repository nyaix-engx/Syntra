import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  Platform,
  Pressable,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import DescCarousel from '../../Components/DescCarousel';
import {imageArray} from '../../Utils/arrays';
import CustomerReview from '../../Components/CustomerReviewComp';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Animated from 'react-native-reanimated';
import SimilarStylesCard from '../../Components/WishlistScreenComps/SimilarStylesCard';
import ScaleAnimation from '../../Components/ScaleAnimation';
import Button from '../../Components/Button';
import {addresses} from '../../Utils/arrays';
import ChangeDeliveryModal from '../../Components/ChangeDeliveryModal';

const DescriptionScreen = () => {
  const {width} = useWindowDimensions();
  const [address, setAddress] = useState(addresses[0]);
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const navigation = useNavigation();
  const [size, setSize] = useState('S');
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0));
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const backcolor = Animated.interpolateColors(
    scrollY.current,
    {
      inputRange: [0, hp(60)],
      outputColorRange: ['rgba(255,255,255,0)', 'rgba(255,255,255,1)'],
    },
    {
      inputRange: [hp(60), 0],
      outputColorRange: ['rgba(255,255,255,1)', 'rgba(255,255,255,0)'],
    },
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: y => Animated.block([Animated.set(scrollY.current, y)]),
              },
            },
          },
        ])}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <DescCarousel
          style={{
            height: hp(65),
            backgroundColor: 'white',
          }}
          imageArray={imageArray}
          autoChange={true}
        />
        <View
          style={{
            height: hp(13),
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            paddingHorizontal: hp(1.5),
            marginBottom: hp(2),
          }}>
          <View style={{display: 'flex'}}>
            <View style={{display: 'flex', marginBottom: hp(1)}}>
              <Text
                style={{
                  fontFamily: 'Raleway-Medium',
                  fontSize: hp(2.5),
                  color: 'black',
                }}>
                Moda Rapido
              </Text>
              <Text
                style={{
                  color: '#363636',
                  flexWrap: 'wrap',
                  marginTop: hp(0.5),
                  fontFamily: 'Poppins-Light',
                  fontSize: hp(1.5),
                }}>
                Men Maroon Printed Round Neck T-shirt
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: hp(0.5),
              }}>
              <Text
                style={{
                  marginRight: hp(1),
                  fontSize: hp(2),
                  color: 'black',
                  fontFamily: 'Poppins-Medium',
                }}>
                $50
              </Text>
              <Text
                style={{
                  fontSize: hp(2),
                  fontFamily: 'Poppins-Light',
                  color: '#fb7ca0',
                }}>
                (40% OFF)
              </Text>
            </View>
            <Text
              style={{
                fontSize: hp(1.7),
                fontFamily: 'Poppins-Medium',
                color: 'green',
                paddingBottom: hp(2),
              }}>
              Inclusive of all taxes
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingVertical: hp(2),
            paddingHorizontal: hp(1.5),
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'white',
            marginBottom: hp(2),
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: hp(1.7),
              marginBottom: hp(1),
              color: 'black',
            }}>
            Easy 30 days returns and exchanges
          </Text>
          <View>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: hp(1.5),
                color: '#757575',
              }}>
              Choose to return or exchange for a different size (if available)
              within 30 days.
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: hp(1.5),
            backgroundColor: 'white',
            marginBottom: hp(2),
          }}>
          <View style={{display: 'flex', justifyContent: 'center'}}>
            <View
              style={{
                paddingVertical: hp(2),
                borderBottomWidth: hp(0.1),
                borderBottomColor: '#c9c9c9',
              }}>
              <Text
                style={{
                  fontFamily: 'Raleway-Medium',
                  fontSize: hp(1.8),
                  color: '#757575',
                  marginBottom: hp(2),
                }}>
                SELECT SIZE
              </Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                {sizes.map((data, index) => {
                  return (
                    <Pressable
                      onPress={() => setSize(data)}
                      key={index}
                      style={{
                        borderWidth: hp(0.1),
                        borderColor: size == data ? '#fb7ca0' : '#000000',
                        backgroundColor: size == data ? '#fb7ca0' : '#ffffff',
                        marginRight: hp(1),
                        width: hp(6),
                        height: hp(5),
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: hp(3),
                      }}>
                      <Text
                        style={{
                          fontSize: hp(2.2),
                          color: size == data ? '#ffffff' : '#000000',
                          fontFamily: 'Raleway-Medium',
                        }}>
                        {data}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>
            <View style={{paddingVertical: hp(2)}}>
              <Text
                style={{
                  fontSize: hp(1.8),
                  fontFamily: 'Poppins-Medium',
                  marginBottom: hp(1),
                  color: 'black',
                }}>
                Model Size & Fit
              </Text>
              <Text
                style={{
                  fontSize: hp(1.6),
                  fontFamily: 'Poppins-Light',
                  marginBottom: hp(2),
                  color: '#757575',
                }}>
                The model (height 6') is wearing a size M
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '45%'}}>
                  <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
                    <Button
                      viewProps={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        paddingVertical: hp(1.2),
                        borderRadius: hp(0.5),
                        borderColor: '#d6d6d6',
                        borderWidth: hp(0.1),
                      }}>
                      <>
                        <AntDesign
                          name="hearto"
                          size={hp(3)}
                          style={{marginRight: hp(1)}}
                        />
                        <Text
                          style={{
                            fontSize: hp(1.7),
                            fontFamily: 'Raleway-Medium',
                            color: 'black',
                          }}>
                          WISHLIST
                        </Text>
                      </>
                    </Button>
                  </ScaleAnimation>
                </View>
                <View style={{width: '45%'}}>
                  <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
                    <Button
                      viewProps={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: hp(1.2),
                        backgroundColor: '#fb7ca0',
                        borderRadius: hp(0.5),
                      }}>
                      <>
                        <Feather
                          name="shopping-bag"
                          size={hp(3)}
                          style={{marginRight: hp(1), color: 'white'}}
                        />
                        <Text
                          style={{
                            fontSize: hp(1.7),
                            fontFamily: 'Raleway-Medium',
                            color: 'white',
                          }}>
                          ADD TO BAG
                        </Text>
                      </>
                    </Button>
                  </ScaleAnimation>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: hp(1.5),
            paddingVertical: hp(2.5),
            backgroundColor: 'white',
            marginBottom: hp(2),
          }}>
          <View style={{marginBottom: hp(2)}}>
            <Text
              style={{
                fontSize: hp(1.9),
                fontFamily: 'Raleway-Medium',
                color: '#757575',
                marginBottom: hp(0.5),
              }}>
              Fabric
            </Text>
            <Text
              style={{
                fontSize: hp(1.6),
                fontFamily: 'Poppins-Light',
                color: 'black',
                marginBottom: hp(0.5),
              }}>
              Cotton
            </Text>
          </View>
          <View style={{marginBottom: hp(2)}}>
            <View>
              <Text
                style={{
                  fontSize: hp(1.9),
                  fontFamily: 'Raleway-Medium',
                  color: '#757575',
                  marginBottom: hp(0.5),
                }}>
                Product Details
              </Text>
              <Text
                style={{
                  fontSize: hp(1.6),
                  fontFamily: 'Poppins-Light',
                  color: 'black',
                  marginBottom: hp(0.5),
                  textAlign: 'justify',
                }}>
                Maroon and black printed T-shirt, has a round neck, long sleeves
              </Text>
            </View>
          </View>
          <View style={{marginBottom: hp(2)}}>
            <View>
              <Text
                style={{
                  fontSize: hp(1.9),
                  fontFamily: 'Raleway-Medium',
                  color: '#757575',
                  marginBottom: hp(0.5),
                }}>
                Size & Fit
              </Text>
              <Text
                style={{
                  fontSize: hp(1.6),
                  fontFamily: 'Poppins-Light',
                  color: 'black',
                  marginBottom: hp(0.5),
                  textAlign: 'justify',
                }}>
                The model (height 6') is wearing a size M
              </Text>
            </View>
          </View>
          <View style={{marginBottom: hp(2)}}>
            <View>
              <Text
                style={{
                  fontSize: hp(1.9),
                  fontFamily: 'Raleway-Medium',
                  color: '#757575',
                  marginBottom: hp(0.5),
                }}>
                Material & Care
              </Text>
              <Text
                style={{
                  fontSize: hp(1.6),
                  fontFamily: 'Poppins-Light',
                  color: 'black',
                  marginBottom: hp(0.5),
                  textAlign: 'justify',
                }}>
                100% cotton
              </Text>
              <Text
                style={{
                  fontSize: hp(1.6),
                  fontFamily: 'Poppins-Light',
                  color: 'black',
                  marginBottom: hp(0.5),
                  textAlign: 'justify',
                }}>
                Machine-wash
              </Text>
            </View>
          </View>
          <View>
            <View>
              <Text
                style={{
                  fontSize: hp(1.9),
                  fontFamily: 'Raleway-Medium',
                  color: '#757575',
                  marginBottom: hp(0.5),
                  textAlign: 'justify',
                }}>
                Style Note
              </Text>
              <Text
                style={{
                  fontSize: hp(1.6),
                  fontFamily: 'Poppins-Light',
                  color: 'black',
                  marginBottom: hp(0.5),
                  textAlign: 'justify',
                }}>
                This tee made by Moda Rapido will definitely become a go-to item
                in your wardrobe. Whether you're running errands or meeting
                friends for coffee, sport this maroon number with slim black
                jeans or cutoff shorts for a relaxed style.
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: hp(1.5),
            backgroundColor: 'white',
            paddingVertical: hp(1.5),
            marginBottom: hp(2),
          }}>
          <View
            style={{
              paddingVertical: hp(1),
              borderBottomWidth: hp(0.1),
              borderBottomColor: 'grey',
            }}>
            <Text
              style={{
                fontSize: hp(2),
                fontFamily: 'Raleway-Medium',
                marginBottom: hp(1),
                color: 'black',
              }}>
              Customer Reviews
            </Text>
          </View>
          <View>
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
          </View>
          <Pressable
            onPress={() => navigation.push('ReviewsPage')}
            style={{paddingVertical: hp(1.5)}}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: hp(1.6),
                color: '#fb7ca0',
              }}>
              View all 208 reviews
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            paddingHorizontal: hp(1.5),
            paddingVertical: hp(1),
            backgroundColor: 'white',
            marginBottom: hp(2),
          }}>
          <View style={{paddingVertical: hp(2)}}>
            <Text
              style={{
                fontSize: hp(1.8),
                fontFamily: 'Raleway-Medium',
                color: 'black',
              }}>
              DELIVERY & SERVICES FOR
            </Text>
          </View>
          <View
            style={{
              height: hp(5),
              display: 'flex',
              flexDirection: 'row',
              borderColor: '#c9c9c9',
              borderWidth: hp(0.1),
              borderRadius: hp(0.4),
              marginBottom: hp(1),
            }}>
            <View
              style={{
                flex: 4,
                display: 'flex',
                justifyContent: 'center',
                paddingHorizontal: hp(1),
              }}>
              <Text
                style={{
                  fontSize: hp(1.8),
                  fontFamily: 'Poppins-Light',
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                {address.pincode}
              </Text>
            </View>
            <View style={{flex: 1.5}}>
              <Pressable
                onPress={() => setShowDeliveryModal(true)}
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontFamily: 'Raleway-Medium',
                    color: '#fb7ca0',
                  }}>
                  CHANGE
                </Text>
              </Pressable>
            </View>
          </View>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: hp(0.5),
              }}>
              <MaterialIcons
                name="attach-money"
                size={hp(3)}
                style={{marginRight: hp(1)}}
              />
              <Text
                style={{
                  fontSize: hp(1.7),
                  fontFamily: 'Poppins-Medium',
                  paddingVertical: hp(0.5),
                  color: 'black',
                }}>
                Pay on delivery available
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: hp(0.5),
              }}>
              <MaterialIcons
                name="swap-horiz"
                size={hp(3)}
                style={{marginRight: hp(1)}}
              />
              <Text
                style={{
                  fontSize: hp(1.7),
                  fontFamily: 'Poppins-Medium',
                  paddingVertical: hp(0.5),
                  color: 'black',
                }}>
                Easy 30 days return & exchange available
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingVertical: hp(0.5),
                marginBottom: hp(1),
                alignItems: 'center',
              }}>
              <Ionicons
                name="ios-shirt-sharp"
                size={hp(3)}
                style={{marginRight: hp(1)}}
              />
              <Text
                style={{
                  fontSize: hp(1.7),
                  fontFamily: 'Poppins-Medium',
                  paddingVertical: hp(0.5),
                  color: 'black',
                }}>
                Try & Buy available
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            marginBottom: hp(2),
            paddingVertical: hp(2),
          }}>
          <View
            style={{
              paddingHorizontal: hp(2),
              marginBottom: hp(2),
            }}>
            <Text
              style={{
                fontFamily: 'Raleway-Medium',
                color: 'grey',
                fontSize: Platform.OS === 'ios' ? hp(1.7) : hp(1.7),
              }}>
              VIEW SIMILAR
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: hp(1.5),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SimilarStylesCard />
            <SimilarStylesCard />
            <SimilarStylesCard />
            <SimilarStylesCard />
            <SimilarStylesCard />
          </ScrollView>
        </View>
      </Animated.ScrollView>
      <Animated.View
        style={{
          height: hp(8),
          width,
          position: 'absolute',
          backgroundColor: backcolor,
          top: insets.top,
          zIndex: 1000,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{paddingVertical: hp(1), paddingHorizontal: hp(0.5)}}>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,0.5)',
              flex: 1,
              justifyContent: 'center',
              width: hp(6),
              height: hp(2),
              alignItems: 'center',
              borderRadius: hp(5),
            }}>
            <Ionicons name="ios-arrow-back" size={hp(2.8)} />
          </View>
        </Pressable>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Pressable
            onPress={() => {}}
            style={{paddingVertical: hp(1), paddingHorizontal: hp(0.5)}}>
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,0.5)',
                flex: 1,
                justifyContent: 'center',
                width: hp(6),
                height: hp(2),
                alignItems: 'center',
                borderRadius: hp(5),
              }}>
              <Entypo name="share" size={hp(3)} />
            </View>
          </Pressable>
          <Pressable
            onPress={() => {}}
            style={{paddingVertical: hp(1), paddingHorizontal: hp(0.5)}}>
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,0.5)',
                flex: 1,
                justifyContent: 'center',
                width: hp(6),
                height: hp(2),
                alignItems: 'center',
                borderRadius: hp(5),
              }}>
              <AntDesign name="hearto" size={hp(3)} />
            </View>
          </Pressable>
          <Pressable
            onPress={() => {}}
            style={{paddingVertical: hp(1), paddingHorizontal: hp(0.5)}}>
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,0.6)',
                flex: 1,
                justifyContent: 'center',
                width: hp(6),
                height: hp(2),
                alignItems: 'center',
                borderRadius: hp(5),
              }}>
              <Feather name="shopping-bag" size={hp(3)} />
            </View>
          </Pressable>
        </View>
      </Animated.View>
      <ChangeDeliveryModal
        showModal={showDeliveryModal}
        setShowModal={() => setShowDeliveryModal(false)}
        setAddress={setAddress}
      />
    </SafeAreaView>
  );
};

export default DescriptionScreen;
