import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FilterCheck from './FilterCheck';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Discount,
  filterCategories,
  sizes,
  colors,
  Brands,
  DeliveryTime,
} from '../Utils/arrays';
import FilterRadio from './WishlistScreenComps/FilterRadio';
import PriceSlider from '../Components/PriceSlider';
import ScaleAnimation from './ScaleAnimation';
import Button from './Button';

const ShowFiltersModal = props => {
  const insets = useSafeAreaInsets();
  const [filterState, setFilterState] = useState(0);
  const [sizeFilters, setSizeFilters] = useState([]);
  const [colorFilters, setColorFilters] = useState([]);
  const [brandFilters, setBrandFilters] = useState([]);
  const [discount, setDiscount] = useState('10% and above');
  const [deliveryTime, setDeliveryTime] = useState('By Tomorrow');
  const [priceRange, setPriceRange] = useState({});

  const handlePress = () => {
    setSizeFilters([]);
    setColorFilters([]);
    setBrandFilters([]);
    setDiscount('');
    setDeliveryTime('');
    setPriceRange({});
  };
  const getFilterCategories = () => {
    return filterCategories.map((data, index) => {
      return (
        <Pressable
          key={index}
          onPress={() => setFilterState(index)}
          style={{
            width: '100%',
            height: hp(8),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingHorizontal: hp(1),
            backgroundColor: index === filterState ? 'white' : '#f5f5f5',
            borderBottomWidth: hp(0.05),
            borderBottomColor: '#d1d1d1',
          }}>
          <Text
            style={{
              fontSize: hp(1.7),
              fontFamily: 'Poppins-Medium',
              fontWeight: index === filterState ? '800' : '100',
              color: 'black',
            }}>
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
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 0,
        margin: 0,
        backgroundColor: 'white',
      }}>
      <View style={{flex: 1, marginTop: insets.top}}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            borderBottomWidth: hp(0.1),
            borderBottomColor: '#c9c9c9',
          }}>
          <View
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              paddingHorizontal: hp(1),
            }}>
            <Text
              style={{
                fontFamily: 'Raleway-Medium',
                fontWeight: '600',
                fontSize: hp(2),
                color: '#363636',
              }}>
              FILTERS
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingHorizontal: hp(1),
            }}>
            <Pressable onPress={handlePress} style={{padding: hp(2)}}>
              <Text
                style={{
                  fontFamily: 'Raleway-Medium',
                  fontWeight: '600',
                  fontSize: hp(1.8),
                  color: '#fb7ca0',
                }}>
                CLEAR ALL
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flex: 9,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <View style={{flex: 3}}>
            <ScrollView
              style={{flex: 1}}
              showsVerticalScrollIndicator={false}
              bounces={false}>
              {getFilterCategories()}
            </ScrollView>
          </View>
          <View style={{flex: 6}}>
            <ScrollView
              style={{flex: 1}}
              showsVerticalScrollIndicator={false}
              bounces={false}>
              {getSelectedView()}
            </ScrollView>
          </View>
        </View>
        <View
          style={{
            flex: 0.8,
            display: 'flex',
            flexDirection: 'row',
            marginBottom: insets.bottom,
          }}>
          <View style={{flex: 1}}>
            <ScaleAnimation onPress={() => props.setShowModal()} scaleTo={0.9}>
              <Button
                viewProps={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  backgroundColor: '#c9c9c9',
                }}>
                <Text
                  style={{
                    fontSize: hp(2),
                    fontFamily: 'Raleway-Medium',
                    fontWeight: '600',
                    color: 'white',
                  }}>
                  CLOSE
                </Text>
              </Button>
            </ScaleAnimation>
          </View>
          <View style={{flex: 1}}>
            <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
              <Button
                viewProps={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  backgroundColor: '#fb7ca0',
                }}>
                <Text
                  style={{
                    fontSize: hp(2),
                    fontFamily: 'Raleway-Medium',
                    fontWeight: '600',
                    color: 'white',
                  }}>
                  APPLY
                </Text>
              </Button>
            </ScaleAnimation>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ShowFiltersModal;
