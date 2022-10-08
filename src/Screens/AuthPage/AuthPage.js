import React from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
import {Layout, ViewPager} from '@ui-kitten/components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {SigninScreen} from '../SigninScreen/SigninScreen';
import SignupScreen from '../SignupScreen/SignupScreen';

const AuthPage = props => {
  const image = require('../../Assets/Images/theme_bg.jpg');

  return (
    <ViewPager
      selectedIndex={props.selectedIndex}
      onSelect={index => props.setSelectedIndex(index)}
      style={styles.container}>
      <Layout style={styles.tab}>
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.authScreenWrapper}>
            <SigninScreen />
          </View>
        </ImageBackground>
      </Layout>
      <Layout style={styles.tab}>
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.authScreenWrapper}>
            <SignupScreen />
          </View>
        </ImageBackground>
      </Layout>
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, display: 'flex'},
  authScreenWrapper: {
    flex: 1,
    display: 'flex',
    marginVertical: hp(8),
    marginHorizontal: hp(4.5),
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default AuthPage;
