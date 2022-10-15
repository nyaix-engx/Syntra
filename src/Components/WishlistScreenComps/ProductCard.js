import React, {useEffect, useState} from 'react';
import {
  Pressable,
  View,
  useWindowDimensions,
  Image,
  Platform,
  Text,
  StyleSheet,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Animated, {
  FadeInLeft,
  SequencedTransition,
} from 'react-native-reanimated';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProductCard = props => {
  const {width} = useWindowDimensions();
  const [originalPrice, setOriginalPrice] = useState(0);

  useEffect(() => {
    setOriginalPrice(
      props.data.price + props.data.discount * 0.01 * props.data.price,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handlePress = () => {
    const x = props.wishlist.filter((item, index) => {
      return props.index !== index;
    });
    props.setWishlist([...x]);
  };

  return (
    <Animated.View
      entering={FadeInLeft.duration(300).delay(props.index * 150)}
      layout={SequencedTransition.duration(200)}
      style={[
        styles.container,
        {
          width:
            Platform.OS === 'ios' ? (width - wp(6)) / 2 : (width - wp(6)) / 2,
        },
      ]}>
      <View style={styles.imageView}>
        <Image style={styles.productImage} source={props.data.image} />
        <Pressable onPress={handlePress} style={styles.cancelButton}>
          <MaterialIcons name="cancel" style={styles.cancelIcon} />
        </Pressable>
      </View>
      <View style={styles.productDetailView}>
        <View style={{padding: hp(0.3)}}>
          <Text style={styles.brandTitle}>{props.data.brand}</Text>
        </View>
        <View style={styles.priceView}>
          <Text style={styles.priceText}>${props.data.price}</Text>
          <Text style={styles.originalPriceText}>${originalPrice}</Text>
          <Text style={styles.discountText}>({props.data.discount} % OFF)</Text>
        </View>
      </View>
      <View style={styles.moveToBagView}>
        <Pressable onPress={handlePress} style={styles.moveToBagButton}>
          <Text style={styles.moveToBagText}>MOVE TO BAG</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? hp(40) : hp(45),
    borderRadius: hp(0.5),
    marginBottom: Platform.OS === 'ios' ? wp(2.5) : wp(2.5),
    borderWidth: hp(0.1),
    borderColor: '#c7c7c7',
  },
  imageView: {flex: 4.2, position: 'relative'},
  productImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: hp(0.5),
    borderTopRightRadius: hp(0.5),
  },
  cancelButton: {position: 'absolute', right: hp(0.5), top: hp(0.5)},
  cancelIcon: {fontSize: hp(2.7), color: '#c7c7c7'},
  productDetailView: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: hp(1),
    borderBottomWidth: hp(0.1),
    borderBottomColor: '#c7c7c7',
  },
  brandTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.6),
    marginBottom: hp(0.5),
    color: 'black',
  },
  priceView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontFamily: 'Poppins-Light',
    marginRight: hp(0.6),
    fontSize: hp(1.6),
    color: 'black',
  },
  originalPriceText: {
    fontFamily: 'Poppins-Light',
    marginRight: hp(0.6),
    fontSize: hp(1.6),
    textDecorationLine: 'line-through',
    color: 'black',
  },
  discountText: {
    fontFamily: 'Poppins-Light',
    color: '#fb7ca0',
    fontSize: hp(1.5),
  },
  moveToBagView: {
    flex: 0.7,
    backgroundColor: 'white',
    borderBottomRightRadius: hp(0.5),
    borderBottomLeftRadius: hp(0.5),
  },
  moveToBagButton: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moveToBagText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    color: '#fb7ca0',
    fontSize: Platform.OS === 'ios' ? hp(1.4) : hp(1.6),
  },
});

export default ProductCard;
