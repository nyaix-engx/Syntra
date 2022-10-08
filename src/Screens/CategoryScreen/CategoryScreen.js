import React, {useState, useRef} from 'react';
import {
  Platform,
  SafeAreaView,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native-gesture-handler';

import CategoryComp from '../../Components/CategoryScreenComps/CategoryComp';
import TitleHeader from '../../Components/CategoryScreenComps/TitleHeader';
import EntryAnimation from '../../Components/EntryAnimation';

import {categories} from '../../Utils/arrays';

const CategoryScreen = () => {
  const [categoryTitleState, setCategoryTitleState] = useState(
    new Array(categories.length).fill(false, 0, categories.length),
  );
  const {height} = useWindowDimensions();
  const scrollRef = useRef();

  const getCategories = () => {
    return categories.map((category, index) => {
      return (
        <EntryAnimation index={index + 1} key={index} direction="BOTTOM">
          <CategoryComp
            height={
              Platform.OS === 'android'
                ? (height - hp(12.7)) / categories.length
                : (height - hp(22.7)) / categories.length
            }
            index={index}
            category={category}
            categoryTitleState={categoryTitleState}
            setCategoryTitleState={setCategoryTitleState}
            scrollRef={scrollRef}
          />
        </EntryAnimation>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TitleHeader title="CATEGORIES" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.scrollViewStyle}
        ref={scrollRef}>
        {getCategories()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  scrollViewStyle: {flex: 1},
});

export default CategoryScreen;
