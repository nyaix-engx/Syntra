import React from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
import {Layout, ViewPager} from '@ui-kitten/components';
import {SigninScreen} from '../SigninScreen/SigninScreen';
import SignupScreen from '../SignupScreen/SignupScreen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AuthPage = (props) => {
  const image = require('../../Assets/Images/theme_bg.jpg');

  return (
    <ViewPager
      selectedIndex={props.selectedIndex}
      onSelect={(index) => props.setSelectedIndex(index)}
      style={{flex: 1, display: 'flex'}}>
      <Layout style={styles.tab}>
        <ImageBackground source={image} style={styles.image}>
          <View
            style={{
              flex: 1,
              display: 'flex',
              marginVertical: hp(8),
              marginHorizontal: hp(4.5),
              display: 'flex',
            }}>
            <SigninScreen />
          </View>
        </ImageBackground>
      </Layout>
      <Layout style={styles.tab}>
        <ImageBackground source={image} style={styles.image}>
          <View style={{
              flex: 1,
              display: 'flex',
              marginVertical: hp(8),
              marginHorizontal: hp(4.5),
              display: 'flex',
            }}>
            <SignupScreen />
          </View>
        </ImageBackground>
      </Layout>
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center',
    // zIndex:2
  },
});

export default AuthPage;
