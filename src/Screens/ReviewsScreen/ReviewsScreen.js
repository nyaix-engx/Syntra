import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomerReview from '../../Components/CustomerReviewComp';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButtonTitle from '../../Components/BackButtonTitle';

const ReviewsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="REVIEWS" />
      </View>
      <View style={{flex: 8}}>
        <ScrollView
          bounces={false}
          style={{
            paddingVertical: hp(2),
            paddingHorizontal: hp(2),
            backgroundColor: 'white',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flex: 2}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: hp(1.7),
                  color: 'black',
                }}>
                Customer Reviews (934)
              </Text>
            </View>
          </View>
          <View>
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ReviewsScreen;
