import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CategoryAvatar from './CategoryAvatar';

const CategoriesSlider = () => {
  return (
    <ScrollView
      style={styles.sliderWrap}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}>
      <CategoryAvatar img={require('../../Assets/Images/men.jpg')} text="MEN" />
      <CategoryAvatar
        img={require('../../Assets/Images/women.jpg')}
        text="WOMEN"
      />
      <CategoryAvatar
        img={require('../../Assets/Images/kids.jpg')}
        text="KIDS"
      />
      <CategoryAvatar
        img={require('../../Assets/Images/shirt.jpg')}
        text="SHIRTS"
      />
      <CategoryAvatar
        img={require('../../Assets/Images/jeans.jpg')}
        text="JEANS"
      />
      <CategoryAvatar
        img={require('../../Assets/Images/trousers.jpg')}
        text="TROUSERS"
      />
      <CategoryAvatar
        img={require('../../Assets/Images/polo.jpg')}
        text="POLO"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {display: 'flex', justifyContent: 'center'},
  sliderWrap: {
    paddingHorizontal: hp(2),
  },
});

export default CategoriesSlider;
