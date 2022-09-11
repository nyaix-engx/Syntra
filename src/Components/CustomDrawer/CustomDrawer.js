import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  SafeAreaView,
  Platform,
} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {Avatar, Divider} from '@ui-kitten/components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Instagram from '../SVG/Drawer/Instagram';
import Twitter from '../SVG/Drawer/Twitter';
import Facebook from '../SVG/Drawer/Facebook';
import {useNavigation} from '@react-navigation/native';

const CustomDrawer = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <View style={{marginVertical: hp(1)}}>
            <Avatar
              ImageComponent={() => (
                <Image
                  style={styles.tinyLogo}
                  source={require('../../Assets/Images/avatar.jpeg')}
                />
              )}
            />
          </View>
          <View style={{marginVertical: hp(1)}}>
            <Text
              style={{
                fontSize: Platform.OS === 'android' ? hp(2.2) : hp(2),
                color: '#000000',
                fontFamily: 'Raleway-Medium',
                fontWeight: '600',
              }}>
              Hugh Jackman
            </Text>
          </View>
        </View>
      </View>
      <Divider />
      <View style={styles.tabWrapper}>
        <DrawerItem
          style={{display: 'flex', justifyContent: 'center'}}
          label="HOME"
          activeTintColor="yellow"
          activeBackgroundColor="purple"
          labelStyle={styles.label}
          icon={({focused, color, size}) => (
            <SimpleLineIcons color={'#000000'} size={hp(2.5)} name={'home'} />
          )}
          onPress={() => navigation.navigate('Home')}
        />
        <DrawerItem
          style={{display: 'flex', justifyContent: 'center'}}
          label="PROFILE"
          activeTintColor="yellow"
          activeBackgroundColor="purple"
          labelStyle={styles.label}
          icon={({focused, color, size}) => (
            <Feather color={'#000000'} size={hp(2.5)} name={'user'} />
          )}
          onPress={() => navigation.navigate('Profile')}
        />
        <DrawerItem
          style={{display: 'flex'}}
          label="ORDERS"
          activeTintColor="yellow"
          activeBackgroundColor="purple"
          labelStyle={styles.label}
          icon={({focused, color, size}) => (
            <SimpleLineIcons
              color={'#000000'}
              size={hp(2.5)}
              name={'social-dropbox'}
            />
          )}
          onPress={() => navigation.navigate('OrdersPage')}
        />
        <DrawerItem
          style={{display: 'flex', justifyContent: 'center'}}
          label="WISHLIST"
          activeTintColor="yellow"
          activeBackgroundColor="purple"
          labelStyle={styles.label}
          icon={({focused, color, size}) => (
            <SimpleLineIcons color={'#000000'} size={hp(2.5)} name={'star'} />
          )}
          onPress={() => navigation.navigate('Wishlist')}
        />
      </View>
      <Divider />
      <View style={styles.social}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#cacaca',
          }}>
          <Text
            style={{
              fontSize: hp(2.2),
              color: 'white',
              fontFamily: 'Raleway-Medium',
              fontWeight: '600',
            }}>
            Follow us on
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{marginHorizontal: hp(2)}}>
            <Pressable
              android_ripple={{
                color: '#cccccc',
                radius: hp(5),
                borderless: true,
              }}>
              <Facebook width={hp(6)} height={hp(6)} />
            </Pressable>
          </View>
          <View style={{marginHorizontal: hp(2)}}>
            <Pressable
              android_ripple={{
                color: '#cccccc',
                radius: hp(5),
                borderless: true,
              }}>
              <Instagram width={hp(6)} height={hp(6)} />
            </Pressable>
          </View>
          <View style={{marginHorizontal: hp(2)}}>
            <Pressable
              android_ripple={{
                color: '#cccccc',
                radius: hp(5),
                borderless: true,
              }}>
              <Twitter width={hp(6)} height={hp(6)} />
            </Pressable>
          </View>
        </View>
      </View>
      <Divider />
      <View style={styles.footer}>
        <DrawerItem
          style={{display: 'flex', justifyContent: 'center'}}
          label="LOGOUT"
          activeTintColor="yellow"
          activeBackgroundColor="purple"
          labelStyle={styles.label}
          icon={({focused, color, size}) => (
            <SimpleLineIcons color={'#000000'} size={hp(2.5)} name={'logout'} />
          )}
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    paddingHorizontal: hp(2),
    flex: 1,
  },
  social: {
    flex: 1,
  },
  tinyLogo: {
    width: hp(10),
    height: hp(10),
    borderRadius: hp(5),
  },
  label: {
    fontSize: Platform.OS === 'android' ? hp(2) : hp(1.7),
    fontFamily: 'Poppins-Light',
    fontWeight: '300',
    color: '#000000',
  },
  tabWrapper: {
    flex: 2,
  },
  footer: {
    flex: 0.5,
  },
});

export default CustomDrawer;
