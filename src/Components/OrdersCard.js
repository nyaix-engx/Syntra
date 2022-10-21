import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ReviewStars from './ReviewStars';
import OrderCardItem from './WishlistScreenComps/OrderCardItem';

const OrdersCard = ({data}) => {
  const navigation = useNavigation();

  const getIcon = type => {
    switch (type) {
      case 'Delivered':
        return (
          <MaterialCommunityIcons
            size={hp(3.5)}
            name="truck-check-outline"
            color="black"
          />
        );
      case 'Cancelled':
        return <MaterialIcons size={hp(3.5)} name="cancel" color="#f56e73" />;
      case 'Returned':
        return <AntDesign size={hp(3.5)} name="back" color="black" />;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.iconImageView}>{getIcon(data.type)}</View>
        <View style={styles.headerContentView}>
          <Text style={styles.headerTitleText}>{data.type}</Text>
          <Text style={styles.dateText}>{data.date}</Text>
          {data.type !== 'Delivered' && (
            <View style={styles.refundView}>
              <Text style={styles.refundInitiatedText}>Refund Initiated :</Text>
              <Text style={styles.refundDataText}> {data.refund}</Text>
            </View>
          )}
        </View>
      </View>
      <OrderCardItem data={data} />
      {data.type !== 'Cancelled' && (
        <View style={styles.cancelledView}>
          <View style={styles.reviewStarsView}>
            <ReviewStars />
          </View>
          <Pressable
            onPress={() => navigation.navigate('WriteReviewPage')}
            style={styles.reviewButtonStyle}>
            <Text style={styles.reviewButtonText}>Write a Review</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(1),
    backgroundColor: 'white',
    paddingHorizontal: hp(2),
    marginBottom: hp(2),
  },
  headerView: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: hp(1),
  },
  iconImageView: {
    width: hp(7),
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {width: '60%', height: '60%'},
  headerContentView: {
    flex: 4,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: hp(1),
  },
  headerTitleText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.8),
    color: 'black',
    marginBottom: hp(0.3),
  },
  dateText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.6),
    color: 'grey',
  },
  refundView: {flexDirection: 'row', marginVertical: hp(1)},
  refundInitiatedText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.6),
    color: '#34a880',
  },
  refundDataText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.6),
    color: 'black',
  },
  cancelledView: {paddingVertical: hp(1), flexDirection: 'row'},
  reviewStarsView: {flex: 3},
  reviewButtonStyle: {flex: 2, justifyContent: 'center', alignItems: 'center'},
  reviewButtonText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    fontSize: hp(1.8),
    color: '#fb7ca0',
  },
});

export default OrdersCard;
