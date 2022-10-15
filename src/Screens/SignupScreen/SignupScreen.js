import React from 'react';
import {StyleSheet, View, Text, Pressable, Platform} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Facebook from '../../Components/SVG/Drawer/Facebook';
import Google from '../../Components/SVG/Socials/Google';
import Apple from '../../Components/SVG/Socials/Apple';
import SocialIconWrapper from '../../Components/Authentication/SocialIconWrapper';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AuthInput from '../../Components/Authentication/AuthInput';

const SignupScreen = ({setIsSigned}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.signupTextView}>
        <Text style={styles.headingText}>Signup</Text>
      </View>
      <View style={styles.iconsContainer}>
        <View style={styles.authIconWrapper}>
          <SocialIconWrapper>
            <Google height={hp(3.5)} width={hp(3.5)} />
          </SocialIconWrapper>
          <SocialIconWrapper>
            <Facebook height={hp(3.5)} width={hp(3.5)} />
          </SocialIconWrapper>
          <SocialIconWrapper>
            <Apple height={hp(3.5)} width={hp(3.5)} />
          </SocialIconWrapper>
        </View>
      </View>
      <View style={styles.registerText}>
        <Text style={styles.choiceText}>Or, register with email</Text>
      </View>
      <View style={styles.signupInputView}>
        <View style={styles.signupInputWrapper}>
          <AuthInput signup={true} />
        </View>
        <View style={styles.signupButtonWrapper}>
          <Pressable
            style={styles.button}
            size="medium"
            onPress={() => setIsSigned(true)}>
            <Text style={styles.signup}>SIGN UP</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.swipeView}>
        <View style={styles.swipeContentView}>
          <View style={styles.arrowLeftView}>
            <Fontisto size={hp(2)} name="arrow-left" />
          </View>
          <View style={styles.swipeLeftTextView}>
            <Text style={styles.swipeLeftText}>SWIPE LEFT FOR SIGNIN</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontWeight: '500',
    fontFamily: 'Raleway-Medium',
    fontSize: hp(4),
    color: 'black',
  },
  signup: {
    fontSize: hp(2),
    color: 'white',
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    textAlign: 'center',
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: Platform.OS === 'ios' ? 1.4 : 1.2,
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: hp(3),
    backgroundColor: '#fb7ca0',
    borderColor: '#fb7ca0',
    paddingVertical: hp(2),
    paddingHorizontal: hp(4),
  },
  choiceText: {
    textAlign: 'center',
    fontSize: hp(1.8),
    fontFamily: 'Poppins-Light',
    color: 'grey',
  },
  wrapper: {
    flex: 1,
    marginVertical: Platform.OS === 'android' ? hp(8) : hp(12),
    marginHorizontal: hp(4.5),
    display: 'flex',
  },
  signupTextView: {
    flex: Platform.OS === 'android' ? 1 : 1.4,
    display: 'flex',
    justifyContent: 'center',
  },
  authIconWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  registerText: {
    flex: Platform.OS === 'android' ? 0.5 : 0.7,
    display: 'flex',
    justifyContent: 'center',
  },
  signupInputView: {
    flex: 5,
  },
  signupInputWrapper: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
  },
  signupButtonWrapper: {
    flex: 0.7,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeView: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  swipeContentView: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  arrowLeftView: {
    flex: 1.6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeLeftTextView: {
    flex: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  swipeLeftText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: hp(1.6),
    color: 'black',
  },
});

export default SignupScreen;
