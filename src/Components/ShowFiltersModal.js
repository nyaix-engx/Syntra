/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, ScrollView, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import FilterRadio from './WishlistScreenComps/FilterRadio';
import PriceSlider from '../Components/PriceSlider';
import ScaleAnimation from './ScaleAnimation';
import Button from './Button';
import FilterCheck from './FilterCheck';

import {
  Discount,
  filterCategories,
  sizes,
  colors,
  Brands,
  DeliveryTime,
} from '../Utils/arrays';

const ShowFiltersModal = props => {
  const insets = useSafeAreaInsets();
  const [filterState, setFilterState] = useState(0);
  const [sizeFilters, setSizeFilters] = useState([]);
  const [colorFilters, setColorFilters] = useState([]);
  const [brandFilters, setBrandFilters] = useState([]);
  const [discount, setDiscount] = useState('10% and above');
  const [deliveryTime, setDeliveryTime] = useState('By Tomorrow');

  const handlePress = () => {
    setSizeFilters([]);
    setColorFilters([]);
    setBrandFilters([]);
    setDiscount('');
    setDeliveryTime('');
  };
  const getFilterCategories = () => {
    return filterCategories.map((data, index) => {
      return (
        <Pressable
          key={index}
          onPress={() => setFilterState(index)}
          style={[
            styles.filterButton,
            {
              backgroundColor: index === filterState ? 'white' : '#f5f5f5',
            },
          ]}>
          <Text
            style={[
              styles.filterButtonText,
              {
                fontWeight: index === filterState ? '800' : '100',
              },
            ]}>
            {data}
          </Text>
        </Pressable>
      );
    });
  };

  const getSelectedView = () => {
    switch (filterState) {
      case 1:
        return (
          <FilterCheck
            data={colors}
            colorFilters={colorFilters}
            setColorFilters={setColorFilters}
            category={'Color'}
          />
        );
      case 2:
        return (
          <FilterCheck
            data={Brands}
            brandFilters={brandFilters}
            setBrandFilters={setBrandFilters}
            category={'Brand'}
          />
        );
      case 3:
        return (
          <FilterRadio
            data={Discount}
            discount={discount}
            setDiscount={setDiscount}
            category={'Discount'}
          />
        );
      case 4:
        return (
          <FilterRadio
            data={DeliveryTime}
            deliveryTime={deliveryTime}
            setDeliveryTime={setDeliveryTime}
            category={'Delivery Time'}
          />
        );
      case 5:
        return <PriceSlider min={0} max={2000} />;
      case 0:
      default:
        return (
          <FilterCheck
            data={sizes}
            sizeFilters={sizeFilters}
            setSizeFilters={setSizeFilters}
            category={'Size'}
          />
        );
    }
  };

  return (
    <Modal
      isVisible={props.showModal}
      setShowModal={props.setShowModal}
      onBackdropPress={props.setShowModal}
      style={styles.modalStyles}>
      <View style={[styles.modalContent, {marginTop: insets.top}]}>
        <View style={styles.modalHeader}>
          <View style={styles.filtersView}>
            <Text style={styles.filterText}>FILTERS</Text>
          </View>
          <View style={styles.clearAllView}>
            <Pressable onPress={handlePress} style={styles.clearAllButton}>
              <Text style={styles.clearAllText}>CLEAR ALL</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.scrollContentWrapper}>
            <ScrollView
              style={styles.scrollStyle}
              showsVerticalScrollIndicator={false}
              bounces={false}>
              {getFilterCategories()}
            </ScrollView>
          </View>
          <View style={styles.selectedView}>
            <ScrollView
              style={styles.selectedScrollStyle}
              showsVerticalScrollIndicator={false}
              bounces={false}>
              {getSelectedView()}
            </ScrollView>
          </View>
        </View>
        <View
          style={[
            styles.ctaWrapper,
            {
              marginBottom: insets.bottom,
            },
          ]}>
          <View style={styles.ctaContainer}>
            <ScaleAnimation onPress={() => props.setShowModal()} scaleTo={0.9}>
              <Button viewProps={styles.closeButton}>
                <Text style={styles.buttonText}>CLOSE</Text>
              </Button>
            </ScaleAnimation>
          </View>
          <View style={styles.ctaContainer}>
            <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
              <Button viewProps={styles.applyButton}>
                <Text style={styles.buttonText}>APPLY</Text>
              </Button>
            </ScaleAnimation>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalStyles: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 0,
    margin: 0,
    backgroundColor: 'white',
  },
  modalContent: {flex: 1},
  modalHeader: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: hp(0.1),
    borderBottomColor: '#c9c9c9',
  },
  filtersView: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: hp(1),
  },
  filterText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    fontSize: hp(2),
    color: '#363636',
  },
  clearAllView: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: hp(1),
  },
  clearAllText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    fontSize: hp(1.8),
    color: '#fb7ca0',
  },
  clearAllButton: {padding: hp(2)},
  content: {
    flex: 9,
    display: 'flex',
    flexDirection: 'row',
  },
  scrollContentWrapper: {flex: 3},
  scrollStyle: {flex: 1},
  selectedView: {flex: 6},
  selectedScrollStyle: {flex: 1},
  ctaWrapper: {
    flex: 0.8,
    display: 'flex',
    flexDirection: 'row',
  },
  ctaContainer: {flex: 1},
  closeButton: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#c9c9c9',
  },
  buttonText: {
    fontSize: hp(2),
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    color: 'white',
  },
  applyButton: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fb7ca0',
  },
  filterButton: {
    width: '100%',
    height: hp(8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: hp(1),
    borderBottomWidth: hp(0.05),
    borderBottomColor: '#d1d1d1',
  },
  filterButtonText: {
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
});

export default ShowFiltersModal;
