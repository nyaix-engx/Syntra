import React, {useState, useRef} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import CategoryComp from '../../Components/CategoryScreenComps/CategoryComp';
import TitleHeader from '../../Components/CategoryScreenComps/TitleHeader';
import {categories} from '../../Utils/arrays';
import {Platform, SafeAreaView, useWindowDimensions} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import EntryAnimation from '../../Components/EntryAnimation';

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
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <TitleHeader title="CATEGORIES" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{flex: 1}}
        ref={scrollRef}>
        {getCategories()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryScreen;
