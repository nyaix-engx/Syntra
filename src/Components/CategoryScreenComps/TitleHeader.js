import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const TitleHeader = props => {
  return (
    <View style={styles.titleHeader}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingHorizontal: hp(2),
          paddingVertical: hp(2),
          flex: 2.6,
        }}>
        <Text
          style={{
            fontSize: hp(2.2),
            fontFamily: 'Raleway-Medium',
            fontWeight: '500',
            color: 'black',
          }}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleHeader: {
    display: 'flex',
    flexDirection: 'row',
    height: hp(7),
    borderBottomColor: '#c7c7c7',
    borderBottomWidth: hp(0.1),
    backgroundColor: 'white',
  },
});

export default TitleHeader;
