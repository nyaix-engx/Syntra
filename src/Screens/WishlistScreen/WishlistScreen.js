import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  Platform,
  StyleSheet,
} from 'react-native';
import Animated, {EasingNode, Layout} from 'react-native-reanimated';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';

import OutOfStockProduct from '../../Components/WishlistScreenComps/OutOfStockProduct';
import ProductCard from '../../Components/WishlistScreenComps/ProductCard';
import BackButtonTitle from '../../Components/BackButtonTitle';
import RemoveAllModal from '../../Components/RemoveAllModal';
import ShowSimilarModal from '../../Components/ShowSimilarModal';

import {wishlistItems, outOfStockItems} from '../../Utils/arrays';

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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButtonTitle title="WISHLIST" />
      </View>
      <View style={styles.content}>
        {outOfStock.length > 0 || wishlist.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            style={{marginHorizontal: wp(2)}}
            ref={scrollRef}>
            <View style={styles.scrollContentView}>
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
                <View style={styles.outofstockView}>
                  <Text style={styles.outofstockText}>OUT OF STOCK ITEMS</Text>
                  <Pressable onPress={() => setShowRemoveModal(true)}>
                    <View style={styles.removeAllTextView}>
                      <Text style={styles.removeAllText}>REMOVE ALL</Text>
                    </View>
                  </Pressable>
                </View>
                <View style={styles.outofstockProductView}>
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
          <View style={styles.emptyView}>
            <View style={styles.lottieView}>
              <LottieView
                source={require('../../Assets/lottie/emptyWishlist.json')}
                autoPlay
                loop={false}
              />
            </View>
            <View style={styles.emptyViewContentWrapper}>
              <Animated.Text
                style={[
                  styles.wishlistText,
                  {
                    transform: [{translateX: translateTitle.current}],
                    opacity: titleOpacity,
                  },
                ]}>
                Your wishlist is empty
              </Animated.Text>
              <Animated.Text
                Text
                style={[
                  styles.saveItemsText,
                  {
                    opacity: subTitleOpacity,
                  },
                ]}>
                Save items that you like in your wishlist. Review them anytime
                and easily move them to the bag.
              </Animated.Text>
            </View>
            <Animated.Text />
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

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flex: 0.8},
  content: {flex: 8, backgroundColor: 'white'},
  scrollContentView: {
    marginBottom: hp(1),
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: wp(2.5),
    justifyContent: 'space-between',
  },
  outofstockView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: hp(1.6),
    height: hp(10),
    alignItems: 'center',
  },
  outofstockText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(2),
    color: 'black',
  },
  removeAllTextView: {
    padding: hp(1.3),
    borderColor: '#c7c7c7',
    borderWidth: hp(0.1),
    borderRadius: hp(0.3),
  },
  removeAllText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    fontSize: Platform.OS === 'ios' ? hp(1.5) : hp(1.6),
    color: 'black',
  },
  outofstockProductView: {
    paddingVertical: hp(0.5),
    marginBottom: hp(2),
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  emptyView: {flex: 1},
  lottieView: {height: hp(25)},
  emptyViewContentWrapper: {paddingHorizontal: hp(5)},
  wishlistText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.8),
    marginBottom: hp(1),
    marginRight: hp(0.5),
  },
  saveItemsText: {
    textAlign: 'center',
    fontFamily: 'ArchitectsDaughter-Regular',
    fontSize: hp(1.8),
    color: 'grey',
  },
});

export default WishlistScreen;
