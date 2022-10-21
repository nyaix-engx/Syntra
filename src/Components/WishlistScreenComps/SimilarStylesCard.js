import React from 'react';
import {View, Text, Image, Platform, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SimilarStylesCard = () => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={{uri: 'https://dummyimage.com/300x400/000/fb7ca0'}}
        />
      </View>
      <View style={styles.productContentView}>
        <View style={styles.productContentWrapper}>
          <Text style={styles.brandTitle}>Roadster</Text>
          <Text style={styles.brandTitle}>Rs. 1000</Text>
          <Text style={styles.brandCategory}>Jeans</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: hp(0.5),
    width: Platform.OS === 'ios' ? hp(20) : hp(22),
    height: hp(33),
    borderWidth: hp(0.1),
    borderColor: '#c7c7c7',
  },
  imageView: {flex: 4, position: 'relative'},
  image: {
    width: '100%',
    height: '100%',
  },
  productContentView: {
    flex: 1.1,
    backgroundColor: 'white',
    display: 'flex',
    paddingHorizontal: hp(1),
    borderBottomColor: '#c7c7c7',
  },
  productContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  brandTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.5),
    color: 'black',
  },
  brandCategory: {
    fontFamily: 'Poppins-Light',
    color: 'grey',
    margin: hp(0.2),
    fontSize: hp(1.4),
  },
});

export default SimilarStylesCard;
