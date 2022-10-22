/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Number = ({selected, setSelected, size}) => {
  return (
    <Pressable onPress={() => setSelected(size)}>
      <View
        style={[
          styles.container,
          {
            borderColor: selected === size ? '#fb7ca0' : 'black',
          },
        ]}>
        <Text
          style={[
            styles.textStyle,
            {
              color: selected === size ? '#fb7ca0' : 'black',
            },
          ]}>
          {size}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: hp(3),
    height: hp(6),
    width: hp(6),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: hp(0.06),
    marginHorizontal: hp(1),
  },
  textStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(2),
    lineHeight: 22,
  },
});

export default Number;
