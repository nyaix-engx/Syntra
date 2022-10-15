import React from 'react';
import {View, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Button = ({children, viewProps}) => {
  return <View style={[styles.button, viewProps]}>{children}</View>;
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: hp(0.1),
    },
    shadowOpacity: hp(0.05),
    shadowRadius: hp(0.5),
    elevation: hp(0.5),
  },
});

export default Button;
