import React from 'react';
import {View, Text, Pressable} from 'react-native';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const BackButtonTitle = ({title}) => {
    
  const navigation = useNavigation();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        borderBottomColor: '#c7c7c7',
        borderBottomWidth: hp(0.1),
        backgroundColor: 'white',
      }}>
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
              fontWeight:'500',
              color: '#363636',
            }}>
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BackButtonTitle;
