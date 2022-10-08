import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import OutOfStockProduct from '../../Components/WishlistScreenComps/OutOfStockProduct';
import ProductCard from '../../Components/WishlistScreenComps/ProductCard';
import BackButtonTitle from '../../Components/BackButtonTitle';
import RemoveAllModal from '../../Components/RemoveAllModal';
import ShowSimilarModal from '../../Components/ShowSimilarModal';
import LottieView from 'lottie-react-native';
import {wishlistItems, outOfStockItems} from '../../Utils/arrays';
import Animated, {EasingNode, Layout} from 'react-native-reanimated';

const WishlistScreen = ({route}) => {
  const [showSimilarModal, setShowSimilarModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [outOfStock, setOutOfStock] = useState(outOfStockItems);
  const [wishlist, setWishlist] = useState(wishlistItems);
  const translateTitle = useRef(new Animated.Value(hp(-13)));
  const titleOpacity = new Animated.Value(0);
  const subTitleOpacity = new Animated.Value(0);
  const scrollRef = useRef();

  useEffect(() => {
    if (wishlist.length == 0 && outOfStock.length == 0) {
      Animated.timing(translateTitle.current, {
        duration: 500,
        toValue: hp(0),
        easing: EasingNode.inOut(EasingNode.cubic),
      }).start();
      Animated.timing(titleOpacity, {
        duration: 500,
        toValue: 1,
        easing: EasingNode.inOut(EasingNode.circle),
      }).start();
      Animated.timing(subTitleOpacity, {
        duration: 1500,
        toValue: 1,
        easing: EasingNode.inOut(EasingNode.circle),
      }).start();
    }
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="WISHLIST" />
      </View>
      <View style={{flex: 8, backgroundColor: 'white'}}>
        {outOfStock.length > 0 || wishlist.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            style={{marginHorizontal: wp(2)}}
            ref={scrollRef}>
            <View
              style={{
                marginBottom: hp(1),
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                paddingTop: wp(2.5),
                justifyContent: 'space-between',
              }}>
              {wishlist.map((data, index) => {
                return (
                  <ProductCard
                    key={index}
                    data={data}
                    index={index}
                    wishlist={wishlist}
                    setWishlist={setWishlist}
                  />
                );
              })}
            </View>
            {outOfStock.length > 0 && (
              <Animated.View layout={Layout.easing().duration(500)}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: hp(1.6),
                    height: hp(10),
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontFamily: 'Raleway-Medium',
                        fontWeight: '600',
                        fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(2),
                        color: 'black',
                      }}>
                      OUT OF STOCK ITEMS
                    </Text>
                  </View>
                  <Pressable onPress={() => setShowRemoveModal(true)}>
                    <View
                      style={{
                        padding: hp(1.3),
                        borderColor: '#c7c7c7',
                        borderWidth: hp(0.1),
                        borderRadius: hp(0.3),
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Raleway-Medium',
                          fontWeight: '600',
                          fontSize: Platform.OS === 'ios' ? hp(1.5) : hp(1.6),
                          color: 'black',
                        }}>
                        REMOVE ALL
                      </Text>
                    </View>
                  </Pressable>
                </View>
                <View
                  style={{
                    paddingVertical: hp(0.5),
                    marginBottom: hp(2),
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                  }}>
                  {outOfStock.map((data, index) => {
                    return (
                      <OutOfStockProduct
                        key={index}
                        data={data}
                        index={index}
                        outOfStock={outOfStock}
                        setOutOfStock={setOutOfStock}
                        scrollRef={scrollRef}
                        setShowSimilarModal={() => setShowSimilarModal(true)}
                      />
                    );
                  })}
                </View>
              </Animated.View>
            )}
          </ScrollView>
        ) : (
          <View style={{flex: 1}}>
            <View style={{height: hp(25)}}>
              <LottieView
                source={require('../../Assets/lottie/emptyWishlist.json')}
                autoPlay
                loop={false}
              />
            </View>
            <View style={{paddingHorizontal: hp(5)}}>
              <Animated.Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Poppins-Medium',
                  fontSize: hp(1.8),
                  marginBottom: hp(1),
                  marginRight: hp(0.5),
                  transform: [{translateX: translateTitle.current}],
                  opacity: titleOpacity,
                }}>
                Your wishlist is empty
              </Animated.Text>
              <Animated.Text
                Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'ArchitectsDaughter-Regular',
                  fontSize: hp(1.8),
                  color: 'grey',
                  opacity: subTitleOpacity,
                }}>
                Save items that you like in your wishlist. Review them anytime
                and easily move them to the bag.
              </Animated.Text>
            </View>
            <Animated.Text></Animated.Text>
          </View>
        )}
      </View>
      <RemoveAllModal
        showModal={showRemoveModal}
        setOutOfStock={setOutOfStock}
        scrollRef={scrollRef}
        setShowModal={() => setShowRemoveModal(false)}
      />
      <ShowSimilarModal
        showModal={showSimilarModal}
        setShowModal={() => setShowSimilarModal(false)}
      />
    </SafeAreaView>
  );
};

export default WishlistScreen;
