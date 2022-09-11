import React from 'react';
import {View, Text, Image, Platform, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const FadingBackScrollCard = ({height}) => {
  return (
    <Pressable
      style={{
        marginHorizontal: hp(0.5),
        width: Platform.OS === 'ios' ? hp(20) : hp(22),
        height,
        borderWidth: hp(0.1),
        borderColor: '#c7c7c7',
      }}>
      <View style={{flex: 4, position: 'relative'}}>
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          source={require('../Assets/Images/jeans.jpg')}
        />
      </View>
      <View
        style={{
          flex: 1.3,
          backgroundColor: 'white',
          display: 'flex',
          paddingHorizontal: hp(1),
          borderBottomColor: '#c7c7c7',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontSize: hp(1.6),
              margin: hp(0.2),
              color: 'black',
            }}>
            Roadster
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: hp(1.6),
                marginRight: hp(1),
                color: 'black',
              }}>
              $ 1000
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontWeight: 'bold',
                fontSize: hp(1.6),
                color: '#fca608',
              }}>
              20% OFF
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontWeight: '100',
              color: 'grey',
              margin: hp(0.2),
              fontSize: hp(1.4),
            }}>
            Jeans
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default FadingBackScrollCard;
