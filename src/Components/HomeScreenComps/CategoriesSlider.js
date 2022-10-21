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
      <CategoryAvatar
        img={{uri: 'https://dummyimage.com/100x100/000/fb7ca0'}}
        text="MEN"
      />
      <CategoryAvatar
        img={{uri: 'https://dummyimage.com/100x100/000/fb7ca0'}}
        text="WOMEN"
      />
      <CategoryAvatar
        img={{uri: 'https://dummyimage.com/100x100/000/fb7ca0'}}
        text="KIDS"
      />
      <CategoryAvatar
        img={{uri: 'https://dummyimage.com/100x100/000/fb7ca0'}}
        text="SHIRTS"
      />
      <CategoryAvatar
        img={{uri: 'https://dummyimage.com/100x100/000/fb7ca0'}}
        text="JEANS"
      />
      <CategoryAvatar
        img={{uri: 'https://dummyimage.com/100x100/000/fffb7ca0f'}}
        text="TROUSERS"
      />
      <CategoryAvatar
        img={{uri: 'https://dummyimage.com/100x100/000/fb7ca0'}}
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
