import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

export const iconsSet1 = [
  <Fontisto name="home" size={hp(2.5)} style={{color: '#fb7ca0'}} />,
  <MaterialCommunityIcons
    name="view-grid"
    size={hp(2.5)}
    style={{color: '#fb7ca0'}}
  />,
  <FontAwesome5 name="user-alt" size={hp(2.5)} style={{color: '#fb7ca0'}} />,
  <Entypo name="heart" size={hp(2.5)} style={{color: '#fb7ca0'}} />,
];

export const iconsSet2 = [
  <Fontisto name="home" size={hp(2.5)} style={{color: 'black'}} />,
  <MaterialCommunityIcons
    name="view-grid"
    size={hp(2.5)}
    style={{color: 'black'}}
  />,
  <FontAwesome5 name="user-alt" size={hp(2.5)} style={{color: 'black'}} />,
  <Entypo name="heart" size={hp(2.5)} style={{color: 'black'}} />,
];
