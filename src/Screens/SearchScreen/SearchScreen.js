import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image, Platform} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Avatar, ListItem, Input} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

import FadingBackScroll from '../../Components/FadingbackScroll';
import FadingBackScrollCard from '../../Components/FadingBackScrollCard';

import {interestArray} from '../../Utils/arrays';
import BACK_IMG from '../../Assets/Images/background.jpg';

const Header = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleHeader}>
        <View style={styles.headerInputWrapper}>
          <Input
            placeholder="Search for bands & products"
            accessoryLeft={() => (
              <Pressable
                onPress={() => navigation.goBack()}
                style={styles.headerBackButton}>
                <Feather
                  name="arrow-left"
                  size={hp(2.8)}
                  style={styles.headerArrow}
                />
              </Pressable>
            )}
            value={searchTerm}
            style={styles.headerInputStyle}
            textStyle={[
              styles.headerInputTextStyle,
              {
                fontSize: Platform.OS === 'android' ? hp(1.8) : hp(1.7),
              },
            ]}
            onChangeText={nextValue => setSearchTerm(nextValue)}
          />
        </View>
      </View>
    </View>
  );
};

const SearchScreen = () => {
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

  const renderItem = ({item, index}) => (
    <ListItem
      key={index}
      style={styles.listItemStyle}
      title={() => <Text style={styles.listItemTitle}>{item.brand}</Text>}
      description={() => (
        <Text style={styles.listItemCategoryText}>{item.category}</Text>
      )}
      accessoryLeft={() => (
        <Avatar
          ImageComponent={() => (
            <Image style={styles.avatarImageStyle} source={item.image} />
          )}
        />
      )}
      accessoryRight={() => (
        <Fontisto size={hp(1.6)} name="angle-right" color="black" />
      )}
    />
  );

  const getFooter = () => {
    return (
      <>
        <FadingBackScroll
          style={{marginBottom: hp(2)}}
          height={hp(34)}
          headingText={'ITEMS YOU HAVE VIEWED'}
          backgroundImage={BACK_IMG}
          coverText="RECENTLY VIEWED"
          cardComponent={FadingBackScrollCard}
          array={brandsArray}
        />
        <FadingBackScroll
          style={{marginBottom: hp(2)}}
          height={hp(34)}
          headingText={'RECOMMENDED FOR YOU'}
          backgroundImage={BACK_IMG}
          coverText="NEW ARRIVALS"
          cardComponent={FadingBackScrollCard}
          array={brandsArray}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        // style={styles.container}
        bounces={false}
        data={interestArray}
        renderItem={renderItem}
        keyExtractor={item => item.brand}
        removeClippedSubviews={true}
        ListHeaderComponent={
          <View style={styles.headerView}>
            <Text
              style={[
                styles.interestedText,
                {
                  fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(1.7),
                },
              ]}>
              YOU MAY BE INTERESTED IN
            </Text>
          </View>
        }
        ListFooterComponent={getFooter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  titleHeader: {
    display: 'flex',
    flexDirection: 'row',
    flex: 8,
    backgroundColor: 'white',
  },
  headerView: {
    paddingHorizontal: hp(2),
    height: hp(7),
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  interestedText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    color: '#363636',
  },
  listItemStyle: {paddingHorizontal: hp(2)},
  listItemTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.6),
    paddingHorizontal: hp(1),
    color: 'black',
  },
  listItemCategoryText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.55),
    paddingHorizontal: hp(1),
    color: 'grey',
  },
  avatarImageStyle: {width: hp(6), height: hp(6), borderRadius: hp(3)},
  headerContainer: {
    height: hp(8),
    display: 'flex',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomColor: '#c7c7c7',
    borderBottomWidth: hp(0.1),
    alignItems: 'center',
  },
  headerInputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerBackButton: {
    width: hp(5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerArrow: {color: '#363636'},
  headerInputStyle: {
    width: '100%',
    borderColor: 'white',
    backgroundColor: 'white',
  },
  headerInputTextStyle: {
    paddingVertical: hp(1.5),
    fontFamily: 'Poppins-Light',
    fontWeight: '300',
  },
});

export default SearchScreen;
