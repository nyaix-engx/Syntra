import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Divider, List, ListItem, Avatar} from '@ui-kitten/components';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';

import ScaleAnimation from '../../Components/ScaleAnimation';
import Button from '../../Components/Button';
import EntryAnimation from '../../Components/EntryAnimation';
import TitleHeader from '../../Components/CategoryScreenComps/TitleHeader';

const ProfileScreen = props => {
  const {width} = useWindowDimensions();
  const data = [
    {
      title: 'ORDERS',
      description: 'Check your order status',
      accessory: () => (
        <SimpleLineIcons
          style={styles.icon}
          name="social-dropbox"
          size={hp(3)}
        />
      ),
    },
    {
      title: 'WISHLIST',
      description: 'Your most loved styles',
      accessory: () => (
        <AntDesign style={styles.icon} name="hearto" size={hp(3)} />
      ),
    },
    {
      title: 'SAVED CARDS',
      description: 'Save your cards for faster checkout',
      accessory: () => (
        <MaterialIcons style={styles.icon} name="credit-card" size={hp(3)} />
      ),
    },
    {
      title: 'ADDRESS',
      description: 'Save addresses for a hassle-free checkout',
      accessory: () => (
        <Ionicons style={styles.icon} name="location-outline" size={hp(3)} />
      ),
    },
    {
      title: 'PROFILE DETAILS',
      description: 'Change your profile details & password',
      accessory: () => (
        <AntDesign style={styles.icon} name="profile" size={hp(3)} />
      ),
    },
  ];
  const renderItemAccessory = () => (
    <Entypo size={hp(3)} style={styles.icon} name="chevron-small-right" />
  );

  const handlePress = index => {
    if (index === 0) {
      props.navigation.navigate('OrdersPage');
    } else if (index === 1) {
      props.navigation.navigate('Wishlist', {backButton: true});
    } else if (index === 2) {
      props.navigation.navigate('SavedCardsPage');
    } else if (index === 3) {
      props.navigation.navigate('AddressPage');
    } else if (index === 4) {
      props.navigation.navigate('EditProfilePage');
    }
  };

  const renderItem = ({item, index}) => (
    <EntryAnimation index={index + 1} key={index} direction="TOP">
      <ListItem
        onPress={() => handlePress(index)}
        title={params => (
          <Text {...params} style={styles.listItemText}>
            {item.title}
          </Text>
        )}
        style={{height: hp(10)}}
        description={params => (
          <Text {...params} style={styles.listItemSubText}>
            {item.description}
          </Text>
        )}
        accessoryRight={renderItemAccessory}
        accessoryLeft={item.accessory}
      />
    </EntryAnimation>
  );
  return (
    <SafeAreaView style={styles.container}>
      <TitleHeader title="PROFILE" />
      <View style={styles.content}>
        <List
          data={data}
          ItemSeparatorComponent={Divider}
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{
            paddingBottom: Platform.OS === 'android' ? hp(5) : hp(4),
          }}
          ListFooterComponent={
            <View style={styles.footerView}>
              <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
                <Button viewProps={styles.logOutButton}>
                  <Text style={styles.logoutButtonText}>LOG OUT</Text>
                </Button>
              </ScaleAnimation>
            </View>
          }
          ListHeaderComponent={
            <ImageBackground
              resizeMode="stretch"
              source={require('../../Assets/Images/Categories/banner_2.jpg')}
              style={styles.headerImageBackgroundView}>
              <View
                style={[
                  styles.avatarView,
                  {
                    left: width / 2 - hp(10),
                  },
                ]}>
                <Avatar
                  ImageComponent={() => (
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../Assets/Images/avatar.jpeg')}
                    />
                  )}
                />
                <View style={styles.avatarTextView}>
                  <Text style={styles.avatarText}>Hugh Jackman</Text>
                </View>
              </View>
            </ImageBackground>
          }
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {marginBottom: hp(2)},
  footerView: {
    paddingHorizontal: hp(4),
    display: 'flex',
    justifyContent: 'center',
    paddingVertical: hp(2),
  },
  logOutButton: {
    borderRadius: hp(0.5),
    backgroundColor: '#fb7ca0',
    paddingVertical: hp(1.8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: hp(14),
    height: hp(14),
    borderRadius: hp(1),
    borderColor: '#fb7ca0',
    borderWidth: 1,
  },
  logoutButtonText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    fontSize: hp(1.9),
    color: 'white',
  },
  headerImageBackgroundView: {
    height: hp(25),
    position: 'relative',
    marginBottom: hp(2),
  },
  avatarView: {
    position: 'absolute',
    zIndex: 300,
    top: hp(4.5),
    width: hp(20),
    height: hp(16),
    alignItems: 'center',
  },
  avatarTextView: {paddingVertical: hp(1)},
  avatarText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(2.3),
    color: 'black',
  },
  listItemText: {
    fontSize: hp(1.6),
    paddingHorizontal: hp(1),
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    color: 'black',
  },
  listItemSubText: {
    paddingVertical: hp(0.5),
    fontSize: hp(1.5),
    fontFamily: 'Poppins-Light',
    paddingHorizontal: hp(1),
    color: '#a3a3a3',
  },
  icon: {paddingHorizontal: hp(1), color: 'black'},
});

export default ProfileScreen;
