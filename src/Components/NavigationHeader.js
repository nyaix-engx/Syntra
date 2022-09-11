import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const NavigationHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.titleHeader}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Feather
            name="arrow-left"
            size={hp(2.8)}
            style={{color: '#363636'}}
          />
        </Pressable>
        <View
          style={{
            flex: 4,
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(2.2),
              fontFamily: 'Raleway-Medium',
              color: '#363636',
              fontWeight: '500',
            }}>
            {props.title}
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable onPress={() => navigation.push('SearchPage')}>
              <Feather
                name="search"
                size={hp(2.8)}
                style={{color: '#363636'}}
              />
            </Pressable>
          </View>
          <View
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable onPress={() => navigation.push('ShoppingBagPage')}>
              <Feather
                name="shopping-bag"
                style={{
                  fontSize: hp(2.8),
                  color: '#363636',
                }}
              />
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
});

export default NavigationHeader;
