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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <NavigationHeader title="MYNTRA" />
      </View>
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollViewStyle}
          contentContainerStyle={styles.scrollViewContentStyle}>
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
      <View style={styles.buttonWrapper}>
        <Pressable
          onPress={() => setShowSortModal(!showSortModal)}
          style={styles.buttonStyle}>
          <View style={styles.buttonContentView}>
            <Fontisto name="arrow-swap" size={hp(2)} style={styles.arrowIcon} />
            <Text style={styles.buttonText}>SORT</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => setShowFilterModal(true)}
          style={styles.buttonStyle}>
          <View style={styles.buttonContentView}>
            <MaterialIcons
              name="filter-list-alt"
              size={hp(2.5)}
              style={styles.filterIcon}
            />
            <Text style={styles.buttonText}>FILTER</Text>
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

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flex: 0.9},
  content: {flex: 8},
  scrollViewStyle: {flex: 1},
  scrollViewContentStyle: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  buttonWrapper: {
    flex: 0.8,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  buttonStyle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: hp(1.5),
  },
  buttonContentView: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: hp(0.05),
    borderRightColor: '#c3c3c3',
  },
  arrowIcon: {
    transform: [{rotateZ: '90deg'}],
    paddingHorizontal: hp(0.5),
    color: '#363636',
  },
  filterIcon: {paddingHorizontal: hp(0.5), color: '#363636'},
  buttonText: {
    fontSize: hp(1.8),
    fontFamily: 'Raleway-Medium',
    color: '#363636',
  },
});

export default ListingPage;
