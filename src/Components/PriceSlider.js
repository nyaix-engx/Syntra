import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const PriceSlider = ({min, max}) => {
  const [multiSliderValue, setMultiSliderValue] = useState([min, max]);
  const multiSliderValuesChange = values => setMultiSliderValue(values);

  return (
    <View style={styles.container}>
      <View style={styles.titleTextView}>
        <Text style={styles.titleText}>Selected Price Range</Text>
      </View>
      <View style={styles.contentView}>
        <View style={styles.contentWrapper}>
          <View style={styles.sliderView}>
            <Text style={styles.sliderText}>$ {multiSliderValue[0]}</Text>
          </View>
          <View style={styles.sliderView}>
            <Text style={styles.sliderText}>-</Text>
          </View>
          <View style={styles.sliderView}>
            <Text style={styles.sliderText}>$ {multiSliderValue[1]}</Text>
          </View>
        </View>
      </View>
      <View style={styles.multiSliderView}>
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

const styles = StyleSheet.create({
  container: {paddingVertical: hp(2)},
  titleTextView: {paddingHorizontal: hp(1), paddingVertical: hp(1)},
  titleText: {
    fontSize: hp(1.8),
    fontFamily: 'Raleway-Medium',
    fontWeight: '500',
  },
  contentView: {paddingHorizontal: hp(1), paddingVertical: hp(2)},
  contentWrapper: {display: 'flex', flexDirection: 'row'},
  sliderView: {paddingHorizontal: hp(0.3)},
  sliderText: {
    fontSize: hp(1.8),
    fontFamily: 'Poppins-Light',
    color: 'black',
  },
  multiSliderView: {alignItems: 'center'},
});

export default PriceSlider;
