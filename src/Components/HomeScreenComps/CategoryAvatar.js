import React from 'react';
import {View, StyleSheet, Text, Image, Pressable, Platform} from 'react-native';
import {Avatar} from '@ui-kitten/components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const CategoryAvatar = props => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('ListingPage')}
      style={styles.avatarSlider}>
      <Avatar
        ImageComponent={() => (
          <Image style={styles.tinyLogo} source={props.img} />
        )}
      />
      <View style={styles.avatarTextWrap}>
        <Text style={styles.avatarText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  avatarSlider: {
    paddingHorizontal: hp(1),
    paddingVertical: hp(1),
    marginHorizontal: hp(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarTextWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(0.5),
  },
  tinyLogo: {
    width: hp(8),
    height: hp(8),
    alignSelf: 'center',
    padding: hp(1),
    borderRadius: hp(5),
    borderColor: '#fb7ca0',
    borderWidth: hp(0.2),
  },
  avatarText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '500',
    color: 'black',
    fontSize: Platform.OS === 'android' ? hp(1.4) : hp(1.3),
  },
});

export default CategoryAvatar;
