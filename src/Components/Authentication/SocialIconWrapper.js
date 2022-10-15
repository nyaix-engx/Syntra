import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Card} from '@ui-kitten/components';

const {width} = Dimensions.get('window');

const SocialIconWrapper = props => {
  return <Card style={styles.container}>{props.children}</Card>;
};

const styles = StyleSheet.create({
  container: {
    width: (width - hp(9) - hp(2)) / 3,
    alignItems: 'center',
    borderRadius: hp(2),
    height: hp(8),
    display: 'flex',
    justifyContent: 'center',
  },
});

export default SocialIconWrapper;
