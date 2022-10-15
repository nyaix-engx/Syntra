import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import CustomerReview from '../../Components/CustomerReviewComp';
import BackButtonTitle from '../../Components/BackButtonTitle';

const ReviewsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButtonTitle title="REVIEWS" />
      </View>
      <View style={styles.content}>
        <ScrollView bounces={false} style={styles.scrollViewStyle}>
          <View style={styles.scrollViewContentView}>
            <View style={styles.contentTitleView}>
              <Text style={styles.contentTitle}>Customer Reviews (934)</Text>
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

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flex: 0.8},
  content: {flex: 8},
  scrollViewStyle: {
    paddingVertical: hp(2),
    paddingHorizontal: hp(2),
    backgroundColor: 'white',
  },
  scrollViewContentView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentTitleView: {flex: 2},
  contentTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.7),
    color: 'black',
  },
});

export default ReviewsScreen;
