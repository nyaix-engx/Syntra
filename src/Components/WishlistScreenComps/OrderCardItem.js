import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const OrderCardItem = ({data}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('ItemDetailsPage', {data})}
      style={{
        backgroundColor: '#e0e0e0',
        paddingVertical: hp(1),
        borderRadius: hp(0.3),
        paddingHorizontal: hp(1),
        height: hp(12),
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: hp(10),
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={data.productImage}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View style={{flex: 8, paddingHorizontal: hp(1)}}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: hp(1.8),
            paddingVertical: hp(0.5),
            color: 'black',
          }}>
          {data.productTitle}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: hp(1.6),
            color: 'grey',
          }}>
          {data.productSubtitle}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: hp(1.6),
            color: 'grey',
          }}>
          Size: {data.size}
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Fontisto name="angle-right" size={hp(1.5)} style={{color: 'black'}} />
      </View>
    </Pressable>
  );
};

export default OrderCardItem;
