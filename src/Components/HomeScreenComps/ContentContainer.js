import React from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ContentContainer = props => {
  return (
    <View style={styles.container}>
      <View style={styles.headingTextView}>
        <Text style={styles.headingText}>{props.heading}</Text>
      </View>
      <View style={styles.contentView}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(2),
    backgroundColor: 'white',
  },
  headingTextView: {
    paddingHorizontal: hp(2.5),
    height: hp(7),
    display: 'flex',
    justifyContent: 'center',
  },
  headingText: {
    fontFamily: 'Raleway-Medium',
    fontSize: Platform.OS === 'ios' ? hp(1.7) : hp(1.7),
    color: '#363636',
    fontWeight: '600',
  },
  contentView: {
    paddingBottom: hp(1.5),
    display: 'flex',
    justifyContent: 'center',
  },
});

export default ContentContainer;
