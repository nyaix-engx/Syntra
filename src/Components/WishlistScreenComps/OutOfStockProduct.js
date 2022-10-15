import React from 'react';
import {
  Pressable,
  View,
  useWindowDimensions,
  Image,
  Text,
  Platform,
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

const OutOfStockProduct = props => {
  const {width} = useWindowDimensions();
  const handlePress = () => {
    const x = props.outOfStock.filter((data, index) => {
      return props.index !== index;
    });
    props.setOutOfStock([...x]);
    if (props.outOfStock.length === 1) {
      Platform.OS === 'ios' &&
        props.scrollRef.current.scrollTo({y: 0, animated: true});
    }
  };
  return (
    <Animated.View
      style={[
        styles.container,
        {
          width:
            Platform.OS === 'ios' ? (width - wp(6)) / 2 : (width - wp(6)) / 2,
        },
      ]}
      entering={FadeInLeft.duration(200).delay(props.index * 150)}
      layout={SequencedTransition.duration(200)}>
      <View style={styles.imageView}>
        <Image style={styles.imageStyle} source={props.data.image} />
        <View style={styles.outOfStockTextView}>
          <Text style={styles.outOfStockText}>OUT OF STOCK</Text>
        </View>
        <Pressable onPress={handlePress} style={styles.cancelButton}>
          <MaterialIcons name="cancel" style={styles.cancelIcon} />
        </Pressable>
      </View>
      <View style={styles.productDetailWrapper}>
        <View style={styles.brandTextView}>
          <Text style={styles.detaiText}>{props.data.brand}</Text>
        </View>
        <View style={styles.priceTextView}>
          <Text style={styles.detaiText}>${props.data.price}</Text>
        </View>
        <View style={styles.whiteFilm} />
      </View>
      <View style={styles.showSimilarButtonView}>
        <Pressable
          onPress={() => props.setShowSimilarModal()}
          style={styles.showSimilarButton}>
          <Text style={styles.showSimilarText}>SHOW SIMILAR</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? hp(40) : hp(45),
    borderRadius: hp(0.5),
    borderWidth: hp(0.1),
    marginBottom: Platform.OS === 'ios' ? wp(2.5) : wp(2.5),
    borderColor: '#c7c7c7',
  },
  imageView: {flex: 4.2, position: 'relative'},
  imageStyle: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: hp(0.5),
    borderTopRightRadius: hp(0.5),
  },
  outOfStockTextView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderTopLeftRadius: hp(0.5),
    borderTopRightRadius: hp(0.5),
    alignItems: 'center',
  },
  outOfStockText: {
    color: '#a3a3a3',
    fontFamily: 'Raleway-Medium',
    fontWeight: '700',
    fontSize: hp(2),
  },
  cancelButton: {
    position: 'absolute',
    right: hp(0.5),
    top: hp(0.5),
    zIndex: 20,
  },
  cancelIcon: {fontSize: hp(3), color: '#c7c7c7'},
  productDetailWrapper: {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: hp(1),
    borderBottomWidth: hp(0.1),
    borderBottomColor: '#c7c7c7',
    position: 'relative',
  },
  detaiText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.6),
    marginBottom: hp(0.5),
    color: 'black',
  },
  brandTextView: {padding: hp(0.3)},
  priceTextView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  whiteFilm: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  showSimilarButtonView: {
    flex: 0.7,
    backgroundColor: 'white',
    borderBottomRightRadius: hp(0.5),
    borderBottomLeftRadius: hp(0.5),
  },
  showSimilarButton: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  showSimilarText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    color: '#fb7ca0',
    fontSize: Platform.OS === 'ios' ? hp(1.4) : hp(1.6),
  },
});

export default OutOfStockProduct;
