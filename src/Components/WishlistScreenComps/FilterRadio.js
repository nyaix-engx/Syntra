import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Radio} from '@ui-kitten/components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const FilterRadio = props => {
  const [checked, setChecked] = useState(0);

  const handlePress = index => {
    setChecked(index);
    if (props.category === 'Discount') {
      props.setDiscount(props.data[index].first);
    } else if (props.category === 'Delivery Time') {
      props.setDeliveryTime(props.data[index].first);
    }
  };
  return props.data.map((item, index) => {
    return (
      <Pressable
        onPress={() => handlePress(index)}
        key={index}
        style={styles.presssableStyle}>
        <View style={styles.pressableView}>
          <View style={styles.radioView}>
            <Radio
              checked={checked === index ? true : false}
              onChange={() => handlePress(index)}
            />
          </View>
          <View style={styles.radioItemTextView}>
            {props.color && (
              <View
                style={[
                  styles.radioTextView,
                  {
                    backgroundColor: item.code,
                  },
                ]}
              />
            )}
            <Text style={styles.radioText}>{item.first}</Text>
          </View>
          <View style={styles.totalItemsTextView}>
            <Text style={styles.totalItemText}>{item.second}</Text>
          </View>
        </View>
      </Pressable>
    );
  });
};

const styles = StyleSheet.create({
  presssableStyle: {height: hp(8)},
  pressableView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: hp(0.05),
    borderBottomColor: '#d1d1d1',
  },
  radioView: {
    flex: 0.8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioItemTextView: {
    flex: 2,
    paddingLeft: hp(1),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioTextView: {
    height: hp(2.5),
    width: hp(2.5),
    marginRight: hp(1),
  },
  radioText: {
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Light',
    color: 'black',
  },
  totalItemsTextView: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: hp(1),
    alignItems: 'center',
  },
  totalItemText: {
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Light',
    color: '#c9c9c9',
  },
});

export default FilterRadio;
