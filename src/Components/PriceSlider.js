import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const PriceSlider = ({min, max}) => {
  const [multiSliderValue, setMultiSliderValue] = useState([min, max]);
  const multiSliderValuesChange = values => setMultiSliderValue(values);
  return (
    <View style={{paddingVertical: hp(2)}}>
      <View style={{paddingHorizontal: hp(1), paddingVertical: hp(1)}}>
        <Text
          style={{
            fontSize: hp(1.8),
            fontFamily: 'Raleway-Medium',
            fontWeight: '500',
          }}>
          Selected Price Range
        </Text>
      </View>
      <View style={{paddingHorizontal: hp(1), paddingVertical: hp(2)}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={{paddingHorizontal: hp(0.3)}}>
            <Text
              style={{
                fontSize: hp(1.7),
                fontFamily: 'Poppins-Light',
                color: 'black',
              }}>
              $ {multiSliderValue[0]}
            </Text>
          </View>
          <View style={{paddingHorizontal: hp(0.3)}}>
            <Text
              style={{
                fontSize: hp(1.8),
                fontFamily: 'Poppins-Light',
                color: 'black',
              }}>
              -
            </Text>
          </View>
          <View style={{paddingHorizontal: hp(0.3)}}>
            <Text
              style={{
                fontSize: hp(1.8),
                fontFamily: 'Poppins-Light',
                color: 'black',
              }}>
              $ {multiSliderValue[1]}
            </Text>
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <MultiSlider
          values={[multiSliderValue[0], multiSliderValue[1]]}
          sliderLength={hp(26)}
          onValuesChange={multiSliderValuesChange}
          min={min}
          max={max}
          step={1}
          allowOverlap={false}
        />
      </View>
    </View>
  );
};

export default PriceSlider;
