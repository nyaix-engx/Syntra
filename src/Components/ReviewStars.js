import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ReviewStars = (props) => {
 const [pos,setPos]=useState(null)
 const name=['1','2','3','4','5']
  const handlePress=(index)=>{
    setPos(index)
  }

  const getContent = () => {
   return name.map((item,index) => {
      return (
        <Pressable onPress={()=>handlePress(index)} key={index} style={{paddingVertical: hp(1), paddingHorizontal: hp(0.5)}}>
          <FontAwesome name='star' size={props.size || hp(2.6)} color={index<=pos && pos!==null?"#fb7ca0":'#e0e0e0'}   />
        </Pressable>
      );
    });
  };
  return (
    <View style={{flexDirection: 'row'}}>
     {getContent()}
    </View>
  );
};

export default ReviewStars;
