import React from 'react';
import {View, Text, Image, Platform, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const FadingBackScrollCard = ({height}) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          height,
        },
      ]}>
      <View style={styles.imageView}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{uri: 'https://dummyimage.com/300x400/000/fb7ca0'}}
        />
      </View>
      <View style={styles.productContentView}>
        <View style={styles.productContentContainer}>
          <Text style={styles.productTitle}>Roadster</Text>
          <View style={styles.productPriceView}>
            <Text style={styles.priceText}>$ 1000</Text>
            <Text style={styles.discountText}>20% OFF</Text>
          </View>
          <Text style={styles.productCategoryText}>Jeans</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: hp(0.5),
    width: Platform.OS === 'ios' ? hp(20) : hp(22),
    borderWidth: hp(0.1),
    borderColor: '#c7c7c7',
  },
  imageView: {flex: 4, position: 'relative'},
  image: {
    width: '100%',
    height: '100%',
  },
  productContentView: {
    flex: 1.3,
    backgroundColor: 'white',
    display: 'flex',
    paddingHorizontal: hp(1),
    borderBottomColor: '#c7c7c7',
  },
  productContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  productTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.6),
    margin: hp(0.2),
    color: 'black',
  },
  productPriceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.6),
    marginRight: hp(1),
    color: 'black',
  },
  discountText: {
    fontFamily: 'Poppins-Light',
    fontWeight: 'bold',
    fontSize: hp(1.6),
    color: '#fca608',
  },
  productCategoryText: {
    fontFamily: 'Poppins-Light',
    fontWeight: '100',
    color: 'grey',
    margin: hp(0.2),
    fontSize: hp(1.4),
  },
});

export default FadingBackScrollCard;
