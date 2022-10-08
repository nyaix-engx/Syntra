import React from 'react';
import {View, Text, Platform} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ContentContainer = props => {
  return (
    <View
      style={{
        marginBottom: hp(2),
        backgroundColor: 'white',
      }}>
      <View
        style={{
          paddingHorizontal: hp(2),
          height: hp(7),
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Raleway-Medium',
            fontSize: Platform.OS === 'ios' ? hp(1.7) : hp(1.7),
            color: '#363636',
            fontWeight: '600',
          }}>
          {props.heading}
        </Text>
      </View>
      <View
        style={{
          paddingBottom: hp(1.5),
          display: 'flex',
          justifyContent: 'center',
        }}>
        {props.children}
      </View>
    </View>
  );
};

export default ContentContainer;
