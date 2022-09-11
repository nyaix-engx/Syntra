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
import TitleHeader from '../../Components/CategoryScreenComps/TitleHeader';
import {Avatar} from '@ui-kitten/components';
import Entypo from 'react-native-vector-icons/Entypo';
import {Divider, List, ListItem} from '@ui-kitten/components';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScaleAnimation from '../../Components/ScaleAnimation';
import Button from '../../Components/Button';
import EntryAnimation from '../../Components/EntryAnimation';

const ProfileScreen = props => {
  const {width} = useWindowDimensions();
  const data = [
    {
      title: 'ORDERS',
      description: 'Check your order status',
      accessory: () => (
        <SimpleLineIcons
          style={{paddingHorizontal: hp(1)}}
          name="social-dropbox"
          size={hp(3)}
        />
      ),
    },
    {
      title: 'WISHLIST',
      description: 'Your most loved styles',
      accessory: () => (
        <AntDesign
          style={{paddingHorizontal: hp(1)}}
          name="hearto"
          size={hp(3)}
        />
      ),
    },
    {
      title: 'SAVED CARDS',
      description: 'Save your cards for faster checkout',
      accessory: () => (
        <MaterialIcons
          style={{paddingHorizontal: hp(1)}}
          name="credit-card"
          size={hp(3)}
        />
      ),
    },
    {
      title: 'ADDRESS',
      description: 'Save addresses for a hassle-free checkout',
      accessory: () => (
        <Ionicons
          style={{paddingHorizontal: hp(1)}}
          name="location-outline"
          size={hp(3)}
        />
      ),
    },
    {
      title: 'PROFILE DETAILS',
      description: 'Change your profile details & password',
      accessory: () => (
        <AntDesign
          style={{paddingHorizontal: hp(1)}}
          name="profile"
          size={hp(3)}
        />
      ),
    },
  ];
  const renderItemAccessory = props => (
    <Entypo
      size={hp(3)}
      style={{paddingHorizontal: hp(1)}}
      name="chevron-small-right"
    />
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
        title={props => (
          <Text
            {...props}
            style={{
              fontSize: hp(1.6),
              paddingHorizontal: hp(1),
              fontFamily: 'Poppins-Medium',
              fontWeight: '400',
              color: 'black',
            }}>
            {item.title}
          </Text>
        )}
        style={{height: hp(10)}}
        description={props => (
          <Text
            {...props}
            style={{
              paddingVertical: hp(0.5),
              fontSize: hp(1.5),
              fontFamily: 'Poppins-Light',
              paddingHorizontal: hp(1),
              color: '#a3a3a3',
            }}>
            {item.description}
          </Text>
        )}
        accessoryRight={renderItemAccessory}
        accessoryLeft={item.accessory}
      />
    </EntryAnimation>
  );
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <TitleHeader title="PROFILE" />
      <View style={{marginBottom: hp(2)}}>
        <List
          data={data}
          ItemSeparatorComponent={Divider}
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{
            paddingBottom: Platform.OS === 'android' ? hp(5) : hp(1),
          }}
          ListFooterComponent={
            <View
              style={{
                paddingHorizontal: hp(4),
                display: 'flex',
                justifyContent: 'center',
                paddingVertical: hp(2),
              }}>
              <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
                <Button
                  viewProps={{
                    borderRadius: hp(0.5),
                    backgroundColor: '#fb7ca0',
                    paddingVertical: hp(1.8),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#fb7ca0',
                      fontFamily: 'Raleway-Medium',
                      fontWeight: '600',
                      fontSize: hp(1.9),
                      color: 'white',
                    }}>
                    LOG OUT
                  </Text>
                </Button>
              </ScaleAnimation>
            </View>
          }
          ListHeaderComponent={
            <View
              style={{
                height: hp(25),
                position: 'relative',
                backgroundColor: 'grey',
                marginBottom: hp(2),
              }}>
              <View
                style={{
                  position: 'absolute',
                  zIndex: 300,
                  top: hp(4.5),
                  left: width / 2 - hp(10),
                  width: hp(20),
                  height: hp(16),
                  alignItems: 'center',
                }}>
                <Avatar
                  ImageComponent={() => (
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../Assets/Images/avatar.jpeg')}
                    />
                  )}
                />
                <View style={{paddingVertical: hp(1)}}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      fontSize: hp(2),
                      color: 'black',
                    }}>
                    Hugh Jackman
                  </Text>
                </View>
              </View>
            </View>
          }
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: hp(14),
    height: hp(14),
    borderRadius: hp(1),
  },
  container: {
    maxHeight: hp(15),
  },
});

export default ProfileScreen;
