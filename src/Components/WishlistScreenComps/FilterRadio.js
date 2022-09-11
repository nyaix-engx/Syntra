import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
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
        style={{height: hp(8)}}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            borderBottomWidth: hp(0.05),
            borderBottomColor: '#d1d1d1',
          }}>
          <View
            style={{
              flex: 0.8,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Radio
              checked={checked === index ? true : false}
              onChange={() => handlePress(index)}
            />
          </View>
          <View
            style={{
              flex: 2,
              paddingLeft: hp(1),
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {props.color && (
              <View
                style={{
                  height: hp(2.5),
                  width: hp(2.5),
                  backgroundColor: item.code,
                  marginRight: hp(1),
                }}
              />
            )}
            <Text
              style={{
                fontSize: hp(1.6),
                fontFamily: 'Poppins-Light',
                color: 'black',
              }}>
              {item.first}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingLeft: hp(1),
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: hp(1.6),
                fontFamily: 'Poppins-Light',
                color: '#c9c9c9',
              }}>
              {item.second}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  });
};

export default FilterRadio;
