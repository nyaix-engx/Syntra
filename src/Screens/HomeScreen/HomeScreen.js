import React, {useRef} from 'react';
import {View, StyleSheet, Pressable, ScrollView, Platform} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import Logo from '../../Assets/Svg/logo.svg';
import Logo from '../../Components/SVG/Logo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoriesSlider from '../../Components/HomeScreenComps/CategoriesSlider';
import Carousel from '../../Components/HomeScreenComps/Carousel';
import {Divider} from '@ui-kitten/components';
import ContentCards from '../../Components/HomeScreenComps/ContentCards';
import ContentContainer from '../../Components/HomeScreenComps/ContentContainer';
import Animated, {Extrapolate} from 'react-native-reanimated';
import RowColContainer from '../../Components/HomeScreenComps/RowColContainer';
import {SafeAreaView} from 'react-native-safe-area-context';
import {imageArray} from '../../Utils/arrays';
import FadingBackScrollCard from '../../Components/FadingBackScrollCard';
import FadingBackScroll from '../../Components/FadingbackScroll';
import Feather from 'react-native-vector-icons/Feather';

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
    <SafeAreaView style={{backgroundColor: 'white'}}>
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
              <Ionicons
                name="md-menu-outline"
                style={{
                  fontSize: hp(3.5),
                  color: 'black',
                }}
              />
            </Pressable>
          </View>
          <View style={styles.logoWrap}>
            {/* <Logo width={hp(12)} height={hp(12)} /> */}
          </View>
          <View style={styles.headerIconsWrap}>
            <View style={styles.headerIconWrap}>
              <Pressable onPress={() => props.navigation.push('SearchPage')}>
                <Feather size={hp(3)} name="search" style={{color: 'black'}} />
              </Pressable>
            </View>
            <View style={styles.headerIconWrap}>
              <Pressable
                onPress={() => props.navigation.push('NotificationsPage')}>
                <Feather
                  name="bell"
                  style={{
                    fontSize: hp(3.2),
                    color: 'black',
                  }}
                />
              </Pressable>
            </View>
            <View style={styles.headerIconWrap}>
              <Pressable
                onPress={() => props.navigation.push('ShoppingBagPage')}>
                <Feather
                  name="shopping-bag"
                  style={{
                    fontSize: hp(3),
                    color: 'black',
                  }}
                />
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
        contentContainerStyle={{
          backgroundColor: '#f7f7f8',
          paddingBottom: Platform.OS === 'android' ? hp(4) : 0,
        }}>
        <View style={{height: hp(13)}}>
          <Animated.View
            style={{
              height: hp(13),
              zIndex: 1,
              transform: [{translateY: categoriesSlider}],
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'white',
            }}>
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
            style={{paddingHorizontal: hp(2.5)}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {renderCards(brandsArray, true, true)}
          </ScrollView>
        </ContentContainer>
        <ContentContainer heading="DEALS OF THE DAY">
          <ScrollView
            style={{paddingHorizontal: hp(2.5)}}
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
  homeHeader: {
    display: 'flex',
    flexDirection: 'row',
    zIndex: 1000,
    height: hp(7),
    backgroundColor: 'white',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: hp(0.2),
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
  logoWrap: {
    width: '40%',
    flex: 4,
    display: 'flex',
    paddingHorizontal: hp(1),
    justifyContent: 'center',
  },
  headerIconsWrap: {
    width: '40%',
    flex: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerIconWrap: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
