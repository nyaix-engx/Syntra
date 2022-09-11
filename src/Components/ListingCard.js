import React from 'react';
import {
  Pressable,
  View,
  useWindowDimensions,
  Image,
  Text,
  Platform,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const ListingCard = () => {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.push('DescriptionPage')}
      style={{
        width: width / 2,
        height: Platform.OS === 'ios' ? hp(40) : hp(45),
        borderWidth: hp(0.1),
        borderColor: '#c7c7c7',
      }}>
      <View style={{flex: 4.2, position: 'relative'}}>
        <Image
          style={{
            width: (width - hp(0.5)) / 2,
            height: '100%',
          }}
          source={require('../Assets/Images/men.jpg')}
        />
      </View>
      <View
        style={{
          flex: 1.6,
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          paddingHorizontal: hp(0.8),
          borderBottomColor: '#c7c7c7',
        }}>
        <View
          style={{
            display: 'flex',
            flex: 1.2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'Raleway-Medium',
                fontWeight: '600',
                fontSize: hp(1.7),
                color: '#363636',
              }}>
              WROGN
            </Text>
          </View>
          <View>
            <FontAwesome size={hp(2.5)} name="heart-o" />
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flex: 1.2,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: hp(1.5),
              color: '#9c9c9c',
              fontFamily: 'Poppins-Light',
            }}>
            Men Slim Fit Jeans
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flex: 2,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: 'Poppins-Medium',
                color: 'black',
                fontSize: hp(1.8),
              }}>
              $124
            </Text>
            <Text
              style={{
                color: '#fb7ca0',
                fontSize: hp(1.5),
                fontFamily: 'Poppins-Medium',
              }}>
              40% OFF
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ListingCard;
