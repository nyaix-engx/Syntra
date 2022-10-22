import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  Pressable,
  StyleSheet,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Animated from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import DescCarousel from '../../Components/DescCarousel';
import CustomerReview from '../../Components/CustomerReviewComp';
import SimilarStylesCard from '../../Components/WishlistScreenComps/SimilarStylesCard';
import ScaleAnimation from '../../Components/ScaleAnimation';
import Button from '../../Components/Button';
import ChangeDeliveryModal from '../../Components/ChangeDeliveryModal';

import {imageArray, addresses} from '../../Utils/arrays';

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
    <SafeAreaView style={styles.container}>
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
          style={styles.imageCarousel}
          imageArray={imageArray}
          autoChange={true}
        />
        <View style={styles.carouselContentWrapper}>
          <View style={styles.content}>
            <View style={styles.contentTitleWrapper}>
              <Text style={styles.contentTitle}>Moda Rapido</Text>
              <Text style={styles.contentDesc}>
                Men Maroon Printed Round Neck T-shirt
              </Text>
            </View>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>$50</Text>
              <Text style={styles.discount}>(40% OFF)</Text>
            </View>
            <Text style={styles.discountText}>Inclusive of all taxes</Text>
          </View>
        </View>
        <View style={styles.returnExchangeWrapper}>
          <Text style={styles.exchangeText}>
            Easy 30 days returns and exchanges
          </Text>
          <View>
            <Text style={styles.exchangeDesc}>
              Choose to return or exchange for a different size (if available)
              within 30 days.
            </Text>
          </View>
        </View>
        <View style={styles.sizeContainer}>
          <View style={styles.sizeContentWrapper}>
            <View style={styles.selectSizeWrapper}>
              <Text style={styles.selectSizeText}>SELECT SIZE</Text>
              <View style={styles.sizesContainer}>
                {sizes.map((data, index) => {
                  return (
                    <Pressable
                      onPress={() => setSize(data)}
                      key={index}
                      style={[
                        styles.sizeButton,
                        // eslint-disable-next-line react-native/no-inline-styles
                        {
                          borderColor: size === data ? '#fb7ca0' : '#000000',
                          backgroundColor:
                            size === data ? '#fb7ca0' : '#ffffff',
                        },
                      ]}>
                      <Text
                        style={[
                          styles.sizeButtonText,
                          // eslint-disable-next-line react-native/no-inline-styles
                          {
                            color: size === data ? '#ffffff' : '#000000',
                          },
                        ]}>
                        {data}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>
            <View style={styles.modelConfigWrapper}>
              <Text style={styles.modelConfigText}>Model Size & Fit</Text>
              <Text style={styles.modelDesc}>
                The model (height 6') is wearing a size M
              </Text>
              <View style={styles.ctaWrapper}>
                <View style={styles.buttonView}>
                  <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
                    <Button viewProps={styles.wishlistButton}>
                      <>
                        <AntDesign
                          name="hearto"
                          size={hp(3)}
                          color="black"
                          style={{marginRight: hp(1)}}
                        />
                        <Text style={styles.wishlistText}>WISHLIST</Text>
                      </>
                    </Button>
                  </ScaleAnimation>
                </View>
                <View style={styles.buttonView}>
                  <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
                    <Button viewProps={styles.addToBagButton}>
                      <>
                        <Feather
                          name="shopping-bag"
                          size={hp(3)}
                          style={styles.shoppingBagIcon}
                        />
                        <Text style={styles.addToBagText}>ADD TO BAG</Text>
                      </>
                    </Button>
                  </ScaleAnimation>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <View style={styles.descriptionRow}>
            <Text style={styles.descriptionRowTitle}>Fabric</Text>
            <Text style={styles.descriptionRowText}>Cotton</Text>
          </View>
          <View style={styles.descriptionRow}>
            <View>
              <Text style={styles.descriptionRowTitle}>Product Details</Text>
              <Text style={styles.descriptionRowText}>
                Maroon and black printed T-shirt, has a round neck, long sleeves
              </Text>
            </View>
          </View>
          <View style={styles.descriptionRow}>
            <View>
              <Text style={styles.descriptionRowTitle}>Size & Fit</Text>
              <Text style={styles.descriptionRowText}>
                The model (height 6') is wearing a size M
              </Text>
            </View>
          </View>
          <View style={styles.descriptionRow}>
            <View>
              <Text style={styles.descriptionRowTitle}>Material & Care</Text>
              <Text style={styles.descriptionRowText}>100% cotton</Text>
              <Text style={styles.descriptionRowText}>Machine-wash</Text>
            </View>
          </View>
          <View>
            <Text style={styles.descriptionRowTitle}>Style Note</Text>
            <Text style={styles.descriptionRowText}>
              This tee made by Moda Rapido will definitely become a go-to item
              in your wardrobe. Whether you're running errands or meeting
              friends for coffee, sport this maroon number with slim black jeans
              or cutoff shorts for a relaxed style.
            </Text>
          </View>
        </View>
        <View style={styles.customerReviewsWrapper}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Customer Reviews</Text>
          </View>
          <View>
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
          </View>
          <Pressable
            onPress={() => navigation.push('ReviewsPage')}
            style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View all 208 reviews</Text>
          </Pressable>
        </View>
        <View style={styles.deliveryServicesWrapper}>
          <View style={styles.deliveryTextContainer}>
            <Text style={styles.deliveryText}>DELIVERY & SERVICES FOR</Text>
          </View>
          <View style={styles.pincodeContainer}>
            <View style={styles.pincodeTextWrapper}>
              <Text style={styles.pincodeText}>{address.pincode}</Text>
            </View>
            <View style={styles.changeButtonWrapper}>
              <Pressable
                onPress={() => setShowDeliveryModal(true)}
                style={styles.changeButton}>
                <Text style={styles.changeButtonText}>CHANGE</Text>
              </Pressable>
            </View>
          </View>
          <View>
            <View style={styles.deliveryPointsContainer}>
              <MaterialIcons
                name="attach-money"
                size={hp(3)}
                color="black"
                style={styles.deliveryPointsIcon}
              />
              <Text style={styles.deliveryPointsText}>
                Pay on delivery available
              </Text>
            </View>
            <View style={styles.deliveryPointsContainer}>
              <MaterialIcons
                name="swap-horiz"
                size={hp(3)}
                color="black"
                style={styles.deliveryPointsIcon}
              />
              <Text style={styles.deliveryPointsText}>
                Easy 30 days return & exchange available
              </Text>
            </View>
            <View style={styles.deliveryPointsContainer}>
              <Ionicons
                name="ios-shirt-sharp"
                size={hp(3)}
                color="black"
                style={styles.deliveryPointsIcon}
              />
              <Text style={styles.deliveryPointsText}>Try & Buy available</Text>
            </View>
          </View>
        </View>
        <View style={styles.similarStylesContainer}>
          <View style={styles.headingTextView}>
            <Text style={styles.viewSimilarText}>VIEW SIMILAR</Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.viewSimilarScroll}>
            <SimilarStylesCard />
            <SimilarStylesCard />
            <SimilarStylesCard />
            <SimilarStylesCard />
            <SimilarStylesCard />
          </ScrollView>
        </View>
      </Animated.ScrollView>
      <Animated.View
        style={[
          styles.screenHeaderWrapper,
          {backgroundColor: backcolor, top: insets.top, width},
        ]}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.headerButton}>
          <View style={styles.headerIconWrapper}>
            <Ionicons name="ios-arrow-back" size={hp(2.8)} color="black" />
          </View>
        </Pressable>
        <View style={styles.headerImpIconWrapper}>
          <Pressable onPress={() => {}} style={styles.headerButton}>
            <View style={styles.headerIconWrapper}>
              <Entypo name="share" size={hp(3)} color="black" />
            </View>
          </Pressable>
          <Pressable onPress={() => {}} style={styles.headerButton}>
            <View style={styles.headerIconWrapper}>
              <AntDesign name="hearto" size={hp(3)} color="black" />
            </View>
          </Pressable>
          <Pressable onPress={() => {}} style={styles.headerButton}>
            <View style={styles.headerIconWrapper}>
              <Feather name="shopping-bag" size={hp(3)} color="black" />
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

const styles = StyleSheet.create({
  container: {flex: 1},
  imageCarousel: {
    height: hp(65),
    backgroundColor: 'white',
  },
  carouselContentWrapper: {
    height: hp(13),
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: hp(1.5),
    marginBottom: hp(2),
  },
  content: {display: 'flex'},
  contentTitleWrapper: {display: 'flex', marginBottom: hp(1)},
  contentTitle: {
    fontFamily: 'Raleway-Medium',
    fontSize: hp(2.5),
    color: 'black',
  },
  contentDesc: {
    color: '#363636',
    flexWrap: 'wrap',
    marginTop: hp(0.5),
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.5),
  },
  priceWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: hp(0.5),
  },
  price: {
    marginRight: hp(1),
    fontSize: hp(2),
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
  discount: {
    fontSize: hp(2),
    fontFamily: 'Poppins-Light',
    color: '#fb7ca0',
  },
  discountText: {
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Medium',
    color: 'green',
    paddingBottom: hp(2),
  },
  returnExchangeWrapper: {
    paddingVertical: hp(2),
    paddingHorizontal: hp(1.5),
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: hp(2),
  },
  exchangeText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.7),
    marginBottom: hp(1),
    color: 'black',
  },
  exchangeDesc: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.5),
    color: '#757575',
  },
  sizeContainer: {
    paddingHorizontal: hp(1.5),
    backgroundColor: 'white',
    marginBottom: hp(2),
  },
  sizeContentWrapper: {display: 'flex', justifyContent: 'center'},
  selectSizeWrapper: {
    paddingVertical: hp(2),
    borderBottomWidth: hp(0.1),
    borderBottomColor: '#c9c9c9',
  },
  selectSizeText: {
    fontFamily: 'Raleway-Medium',
    fontSize: hp(1.8),
    color: '#757575',
    marginBottom: hp(2),
  },
  sizesContainer: {display: 'flex', flexDirection: 'row'},
  sizeButton: {
    borderWidth: hp(0.1),
    marginRight: hp(1),
    width: hp(6),
    height: hp(6),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(3),
  },
  sizeButtonText: {
    fontSize: hp(2.2),
    fontFamily: 'Raleway-Medium',
  },
  modelConfigWrapper: {paddingVertical: hp(2)},
  modelConfigText: {
    fontSize: hp(1.8),
    fontFamily: 'Poppins-Medium',
    marginBottom: hp(1),
    color: 'black',
  },
  modelDesc: {
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Light',
    marginBottom: hp(2),
    color: '#757575',
  },
  ctaWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonView: {width: '45%'},
  wishlistButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingVertical: hp(1.2),
    borderRadius: hp(0.5),
    borderColor: '#d6d6d6',
    borderWidth: hp(0.1),
  },
  wishlistText: {
    fontSize: hp(1.7),
    fontFamily: 'Raleway-Medium',
    color: 'black',
  },
  addToBagButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(1.2),
    backgroundColor: '#fb7ca0',
    borderRadius: hp(0.5),
  },
  shoppingBagIcon: {marginRight: hp(1), color: 'white'},
  addToBagText: {
    fontSize: hp(1.7),
    fontFamily: 'Raleway-Medium',
    color: 'white',
  },
  descriptionWrapper: {
    paddingHorizontal: hp(1.5),
    paddingVertical: hp(2.5),
    backgroundColor: 'white',
    marginBottom: hp(2),
  },
  descriptionRow: {marginBottom: hp(2)},
  descriptionRowTitle: {
    fontSize: hp(1.9),
    fontFamily: 'Raleway-Medium',
    color: '#757575',
    marginBottom: hp(0.5),
  },
  descriptionRowText: {
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Light',
    color: 'black',
    marginBottom: hp(0.5),
  },
  customerReviewsWrapper: {
    paddingHorizontal: hp(1.5),
    backgroundColor: 'white',
    paddingVertical: hp(1.5),
    marginBottom: hp(2),
  },
  titleContainer: {
    paddingVertical: hp(1),
    borderBottomWidth: hp(0.1),
    borderBottomColor: 'grey',
  },
  titleText: {
    fontSize: hp(2),
    fontFamily: 'Raleway-Medium',
    marginBottom: hp(1),
    color: 'black',
  },
  viewAllButton: {paddingVertical: hp(1.5)},
  viewAllText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.6),
    color: '#fb7ca0',
  },
  deliveryServicesWrapper: {
    paddingHorizontal: hp(1.5),
    paddingVertical: hp(1),
    backgroundColor: 'white',
    marginBottom: hp(2),
  },
  deliveryTextContainer: {paddingVertical: hp(2)},
  deliveryText: {
    fontSize: hp(1.8),
    fontFamily: 'Raleway-Medium',
    color: 'black',
  },
  pincodeContainer: {
    height: hp(5),
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#c9c9c9',
    borderWidth: hp(0.1),
    borderRadius: hp(0.4),
    marginBottom: hp(1),
  },
  pincodeTextWrapper: {
    flex: 4,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: hp(1),
  },
  pincodeText: {
    fontSize: hp(1.8),
    fontFamily: 'Poppins-Light',
    fontWeight: 'bold',
    color: 'black',
  },
  changeButtonWrapper: {flex: 1.5},
  changeButton: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeButtonText: {
    fontSize: hp(1.8),
    fontFamily: 'Raleway-Medium',
    color: '#fb7ca0',
  },
  deliveryPointsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(0.5),
  },
  deliveryPointsIcon: {marginRight: hp(1)},
  deliveryPointsText: {
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Medium',
    paddingVertical: hp(0.5),
    color: 'black',
  },
  similarStylesContainer: {
    backgroundColor: 'white',
    marginBottom: hp(2),
    paddingVertical: hp(2),
  },
  headingTextView: {
    paddingHorizontal: hp(2),
    marginBottom: hp(2),
  },
  viewSimilarText: {
    fontFamily: 'Raleway-Medium',
    color: 'grey',
    fontSize: hp(1.7),
  },
  viewSimilarScroll: {
    paddingHorizontal: hp(1.5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenHeaderWrapper: {
    height: hp(8),
    position: 'absolute',
    zIndex: 1000,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerButton: {paddingVertical: hp(1), paddingHorizontal: hp(0.5)},
  headerIconWrapper: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    flex: 1,
    justifyContent: 'center',
    width: hp(6),
    height: hp(2),
    alignItems: 'center',
    borderRadius: hp(5),
  },
  headerImpIconWrapper: {display: 'flex', flexDirection: 'row'},
});

export default DescriptionScreen;
