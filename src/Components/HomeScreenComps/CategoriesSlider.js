import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CategoryAvatar from './CategoryAvatar';

const CategoriesSlider = (props) => {
  return (
    <ScrollView style={styles.sliderWrap} horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{display:'flex',justifyContent:'center'}}>
        <CategoryAvatar img={require('../../Assets/Images/men.jpg')} text='MEN'/>
        <CategoryAvatar img={require('../../Assets/Images/women.jpg')} text='WOMEN'/>
        <CategoryAvatar img={require('../../Assets/Images/kids.jpg')} text='KIDS'/>
        <CategoryAvatar img={require('../../Assets/Images/shirt.jpg')} text='SHIRTS'/>
        <CategoryAvatar img={require('../../Assets/Images/jeans.jpg')} text='JEANS'/>
        <CategoryAvatar img={require('../../Assets/Images/trousers.jpg')} text='TROUSERS'/>
        <CategoryAvatar img={require('../../Assets/Images/polo.png')} text='POLO'/>
    </ScrollView>
  );
}; 

const styles = StyleSheet.create({
  sliderWrap:{
    paddingHorizontal:hp(2),
  },
});

export default CategoriesSlider;
