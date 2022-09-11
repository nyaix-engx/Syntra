import React from 'react';
import {View, Text, Pressable} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Number = ({selected,setSelected,size}) => {
  return (
    <Pressable onPress={()=>setSelected(size)}>
    <View
      style={{
        borderRadius: hp(4),
        height: hp(6),
        width: hp(6),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: hp(0.06),
        borderColor: selected===size?'#fb7ca0':'black',
        marginHorizontal: hp(1),
      }}>
      <Text style={{fontFamily: 'Poppins-Medium', fontSize: hp(2),color:selected===size?'#fb7ca0':'black'}}>{size}</Text>
    </View>
    </Pressable>
  );
};

export default Number;
