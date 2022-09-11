import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ReviewStars from './ReviewStars';
import {useNavigation} from '@react-navigation/native';
import OrderCardItem from './WishlistScreenComps/OrderCardItem';

const OrdersCard = ({data}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingVertical: hp(1),
        backgroundColor: 'white',
        paddingHorizontal: hp(2),
        marginBottom: hp(2),
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: hp(1),
        }}>
        <View
          style={{
            width: hp(7),
            height: hp(6),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMethod="resize"
            source={data.iconImage}
            style={{width: '60%', height: '60%'}}
          />
        </View>
        <View
          style={{
            flex: 4,
            display: 'flex',
            justifyContent: 'center',
            paddingHorizontal: hp(1),
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: hp(1.8),
              marginBottom: hp(0.3),
            }}>
            {data.type}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontSize: hp(1.6),
              color: 'grey',
            }}>
            {data.date}
          </Text>
          {data.type !== 'Delivered' && (
            <View style={{flexDirection: 'row', marginVertical: hp(1)}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: hp(1.6),
                  color: '#34a880',
                }}>
                Refund Initiated :
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: hp(1.6),
                  color: 'black',
                }}>
                {' '}
                {data.refund}
              </Text>
            </View>
          )}
        </View>
      </View>
      <OrderCardItem data={data} />
      {data.type !== 'Cancelled' && (
        <View style={{paddingVertical: hp(1), flexDirection: 'row'}}>
          <View style={{flex: 3}}>
            <ReviewStars />
          </View>
          <Pressable
            onPress={() => navigation.navigate('WriteReviewPage')}
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'Raleway-Medium',
                fontWeight: '600',
                fontSize: hp(1.8),
                color: '#fb7ca0',
              }}>
              Write a Review
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default OrdersCard;
