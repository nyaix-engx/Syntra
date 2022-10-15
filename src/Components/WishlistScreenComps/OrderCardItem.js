import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';

const OrderCardItem = ({data}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('ItemDetailsPage', {data})}
      style={styles.buttonStyle}>
      <View style={styles.productImageView}>
        <Image source={data.productImage} style={styles.productImage} />
      </View>
      <View style={styles.productDetailView}>
        <Text style={styles.productTitleText}>{data.productTitle}</Text>
        <Text style={styles.productSubText}>{data.productSubtitle}</Text>
        <Text style={styles.productSubText}>Size: {data.size}</Text>
      </View>
      <View style={styles.angleRightView}>
        <Fontisto name="angle-right" size={hp(1.5)} style={styles.angleRight} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#e0e0e0',
    paddingVertical: hp(1),
    borderRadius: hp(0.3),
    paddingHorizontal: hp(1),
    height: hp(12),
    flexDirection: 'row',
  },
  productImageView: {
    width: hp(10),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {height: '100%', width: '100%'},
  productDetailView: {flex: 8, paddingHorizontal: hp(1)},
  productTitleText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.8),
    paddingVertical: hp(0.5),
    color: 'black',
  },
  productSubText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.6),
    color: 'grey',
  },
  angleRightView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  angleRight: {color: 'black'},
});

export default OrderCardItem;
