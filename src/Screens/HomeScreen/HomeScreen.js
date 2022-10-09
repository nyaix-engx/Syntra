import React, {useRef} from 'react';
import {View, StyleSheet, Pressable, ScrollView, Platform} from 'react-native';
import Animated, {Extrapolate} from 'react-native-reanimated';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import {Divider} from '@ui-kitten/components';

import CategoriesSlider from '../../Components/HomeScreenComps/CategoriesSlider';
import Carousel from '../../Components/HomeScreenComps/Carousel';
import ContentCards from '../../Components/HomeScreenComps/ContentCards';
import ContentContainer from '../../Components/HomeScreenComps/ContentContainer';
import RowColContainer from '../../Components/HomeScreenComps/RowColContainer';
import FadingBackScrollCard from '../../Components/FadingBackScrollCard';
import FadingBackScroll from '../../Components/FadingbackScroll';

import {imageArray} from '../../Utils/arrays';

const HomeScreen = props => {
  const scrollY = useRef(new Animated.Value(0));

  const diffClampScrollY = useRef(
    new Animated.diffClamp(scrollY.current, 0, hp(15)),
  );

  const categoriesSlider = Animated.interpolateNode(diffClampScrollY.current, {
    inputRange: [0, hp(13)],
    outputRange: [0, hp(-13)],
    extrapolate: Extrapolate.CLAMP,
  });

  const brandsArray = [
    {
      img: require('../../Assets/Images/scroll1.jpg'),
      footerText: 'Upto 30% Off',
    },
    {
      img: require('../../Assets/Images/scroll2.jpg'),
      footerText: 'Upto 30% Off',
    },
    {
      img: require('../../Assets/Images/scroll3.jpg'),
      footerText: 'Upto 30% Off',
    },
  ];

  const dealsArray = [
    {
      img: require('../../Assets/Images/deal1.jpg'),
      footerText: 'Extra 150 Off',
    },
    {
      img: require('../../Assets/Images/deal2.jpg'),
      footerText: 'Buy 2 Get 10% Off',
    },
    {
      img: require('../../Assets/Images/deal3.jpg'),
      footerText: 'Min 30% Off on kids wear',
    },
  ];
  const renderCards = (arr, headerState, footerState) => {
    return arr.map((data, index) => {
      return (
        <ContentCards
          key={index}
          data={data}
          header={headerState}
          footer={footerState}
        />
      );
    });
  };
  const handleScroll = e => {};
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.homeHeader}>
          <View style={styles.menuIconWrap}>
            <Pressable
              onPress={() => props.navigation.openDrawer()}
              android_ripple={{
                color: '#cccccc',
                radius: hp(3.5),
                borderless: true,
              }}>
              <Ionicons name="md-menu-outline" style={styles.menuOutlineIcon} />
            </Pressable>
          </View>
          <View style={styles.headerIconsWrap}>
            <View style={styles.headerIconWrap}>
              <Pressable onPress={() => props.navigation.push('SearchPage')}>
                <Feather size={hp(3)} name="search" style={styles.searchIcon} />
              </Pressable>
            </View>
            <View style={styles.headerIconWrap}>
              <Pressable
                onPress={() => props.navigation.push('NotificationsPage')}>
                <Feather name="bell" style={styles.bellIcon} />
              </Pressable>
            </View>
            <View style={styles.headerIconWrap}>
              <Pressable
                onPress={() => props.navigation.push('ShoppingBagPage')}>
                <Feather name="shopping-bag" style={styles.shoppingBagIcon} />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <Animated.ScrollView
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: y =>
                  Animated.block([
                    Animated.set(scrollY.current, y),
                    Animated.call([y], handleScroll),
                  ]),
              },
            },
          },
        ])}
        style={{marginBottom: hp(3)}}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        decelerationRate={'normal'}
        bounces={false}
        contentContainerStyle={styles.scrollViewContentStyle}>
        <View style={styles.categoriesSliderContentWrapper}>
          <Animated.View
            style={[
              styles.categoriesSliderWrapper,
              {
                transform: [{translateY: categoriesSlider}],
              },
            ]}>
            <CategoriesSlider />
          </Animated.View>
        </View>
        <Divider />
        <Carousel
          style={styles.carousel}
          imageArray={imageArray}
          autoChange={true}
        />
        <ContentContainer heading="FEATURED BRANDS">
          <ScrollView
            style={styles.featuredScrollView}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {renderCards(brandsArray, true, true)}
          </ScrollView>
        </ContentContainer>
        <ContentContainer heading="DEALS OF THE DAY">
          <ScrollView
            style={styles.featuredScrollView}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {renderCards(dealsArray, false, true)}
          </ScrollView>
        </ContentContainer>
        <FadingBackScroll
          height={hp(35)}
          headingText={'ITEMS YOU HAVE VIEWED'}
          backgroundImage={require('../../Assets/Images/background.jpg')}
          coverText="Recently Viewed"
          cardComponent={FadingBackScrollCard}
          array={brandsArray}
        />
        <ContentContainer heading="BIGGEST DEALS ON TOP BRANDS">
          <RowColContainer />
        </ContentContainer>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
  homeHeader: {
    display: 'flex',
    flexDirection: 'row',
    zIndex: 1000,
    height: hp(7),
    backgroundColor: 'white',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: hp(0.2),
  },
  menuOutlineIcon: {
    fontSize: hp(3.5),
    color: 'black',
  },
  searchIcon: {color: 'black'},
  bellIcon: {
    fontSize: hp(3.2),
    color: 'black',
  },
  shoppingBagIcon: {
    fontSize: hp(3),
    color: 'black',
  },
  carousel: {
    height: hp(50),
    marginVertical: hp(2),
    backgroundColor: 'white',
  },
  menuIconWrap: {
    flex: 1.2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {width: hp(4.5), height: hp(4.5), color: 'black'},
  scrollViewContentStyle: {
    backgroundColor: '#f7f7f8',
    paddingBottom: Platform.OS === 'android' ? hp(4) : 0,
  },
  categoriesSliderContentWrapper: {height: hp(13)},
  categoriesSliderWrapper: {
    height: hp(13),
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  headerIconsWrap: {
    flex: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerIconWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(5),
  },
  featuredScrollView: {paddingHorizontal: hp(2.5)},
});

export default HomeScreen;
