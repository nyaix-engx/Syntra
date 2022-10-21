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

const CustomDrawer = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageViewWrapper}>
          <View style={styles.imageView}>
            <Avatar
              ImageComponent={() => (
                <Image
                  style={styles.tinyLogo}
                  source={{uri: 'https://dummyimage.com/200x200/000/fb7ca0'}}
                />
              )}
            />
          </View>
          <View style={styles.imageView}>
            <Text style={styles.personNameText}>Hugh Jackman</Text>
          </View>
        </View>
      </View>
      <Divider />
      <View style={styles.tabWrapper}>
        <DrawerItem
          style={styles.drawerItemStyle}
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
          style={styles.drawerItemStyle}
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
          style={styles.drawerItemStyle}
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
          style={styles.drawerItemStyle}
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
        <View style={styles.followUsTextView}>
          <Text style={styles.followUsText}>Follow us on</Text>
        </View>
        <View style={styles.socialIconsWrapper}>
          <View style={styles.socialIconView}>
            <Pressable
              android_ripple={{
                color: '#cccccc',
                radius: hp(5),
                borderless: true,
              }}>
              <Facebook width={hp(6)} height={hp(6)} />
            </Pressable>
          </View>
          <View style={styles.socialIconView}>
            <Pressable
              android_ripple={{
                color: '#cccccc',
                radius: hp(5),
                borderless: true,
              }}>
              <Instagram width={hp(6)} height={hp(6)} />
            </Pressable>
          </View>
          <View style={styles.socialIconView}>
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
          style={styles.drawerItemStyle}
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
  container: {flex: 1},
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
  imageViewWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageView: {marginVertical: hp(1)},
  personNameText: {
    fontSize: Platform.OS === 'android' ? hp(2.2) : hp(2),
    color: '#000000',
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
  },
  drawerItemStyle: {display: 'flex', justifyContent: 'center'},
  followUsTextView: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#cacaca',
  },
  followUsText: {
    fontSize: hp(2.2),
    color: 'white',
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
  },
  socialIconsWrapper: {
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIconView: {marginHorizontal: hp(2)},
});

export default CustomDrawer;
