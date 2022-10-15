import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const NavigationHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.titleHeader}>
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.arrowLeftButton}>
          <Feather name="arrow-left" size={hp(2.8)} style={styles.iconStyle} />
        </Pressable>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{props.title}</Text>
        </View>
        <View style={styles.iconsWrapperView}>
          <View style={styles.iconView}>
            <Pressable onPress={() => navigation.push('SearchPage')}>
              <Feather name="search" size={hp(2.8)} style={styles.iconStyle} />
            </Pressable>
          </View>
          <View style={styles.iconView}>
            <Pressable onPress={() => navigation.push('ShoppingBagPage')}>
              <Feather name="shopping-bag" style={styles.shoppingBagIcon} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleHeader: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    borderBottomColor: '#c7c7c7',
    borderBottomWidth: hp(0.1),
    backgroundColor: 'white',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  arrowLeftButton: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {color: '#363636'},
  titleView: {
    flex: 4,
    display: 'flex',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: hp(2.2),
    fontFamily: 'Raleway-Medium',
    color: '#363636',
    fontWeight: '500',
  },
  iconsWrapperView: {
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shoppingBagIcon: {
    fontSize: hp(2.8),
    color: '#363636',
  },
});

export default NavigationHeader;
