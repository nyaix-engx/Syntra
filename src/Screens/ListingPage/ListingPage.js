import React, {useState} from 'react';
import {View, Text, ScrollView, Pressable, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import NavigationHeader from '../../Components/NavigationHeader';
import ListingCard from '../../Components/ListingCard';
import ShowFiltersModal from '../../Components/ShowFiltersModal';
import SortByModal from '../../Components/SortByModal';

const ListingPage = () => {
  const [showSortModal, setShowSortModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.9}}>
        <NavigationHeader title="MYNTRA" />
      </View>
      <View style={{flex: 8}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}>
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </ScrollView>
      </View>
      <View
        style={{
          flex: 0.8,
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        <Pressable
          onPress={() => setShowSortModal(!showSortModal)}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingVertical: hp(1.5),
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRightWidth: hp(0.05),
              borderRightColor: '#c3c3c3',
            }}>
            <Fontisto
              name="arrow-swap"
              size={hp(2)}
              style={{
                transform: [{rotateZ: '90deg'}],
                paddingHorizontal: hp(0.5),
                color: '#363636',
              }}
            />
            <Text
              style={{
                fontSize: hp(1.8),
                fontFamily: 'Raleway-Medium',
                color: '#363636',
              }}>
              SORT
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => setShowFilterModal(true)}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingVertical: hp(1.5),
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
              borderLeftWidth: hp(0.05),
              borderLeftColor: '#c3c3c3',
              alignItems: 'center',
            }}>
            <MaterialIcons
              name="filter-list-alt"
              size={hp(2.5)}
              style={{paddingHorizontal: hp(0.5), color: '#363636'}}
            />
            <Text
              style={{
                fontSize: hp(1.8),
                fontFamily: 'Raleway-Medium',
                color: '#363636',
              }}>
              FILTER
            </Text>
          </View>
        </Pressable>
      </View>
      <ShowFiltersModal
        showModal={showFilterModal}
        setShowModal={() => setShowFilterModal(false)}
      />
      <SortByModal
        showModal={showSortModal}
        setShowModal={() => setShowSortModal(false)}
      />
    </SafeAreaView>
  );
};

export default ListingPage;
