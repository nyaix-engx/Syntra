import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';

import BackButtonTitle from '../../Components/BackButtonTitle';

const NotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButtonTitle title="NOTIFICATIONS" />
      </View>
      <View style={styles.content}>
        <View style={styles.contentView}>
          <LottieView
            source={require('../../Assets/lottie/empty.json')}
            style={styles.lottieView}
            autoPlay
            loop={false}
          />
          <View style={styles.notificationView}>
            <Text style={styles.notificationText}>No Notifications here</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flex: 0.8},
  content: {flex: 8},
  contentView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(50),
  },
  lottieView: {height: hp(15), width: hp(15)},
  notificationView: {paddingVertical: hp(2)},
  notificationText: {
    fontFamily: 'ArchitectsDaughter-Regular',
    fontSize: hp(1.8),
    color: 'grey',
  },
});

export default NotificationsScreen;
