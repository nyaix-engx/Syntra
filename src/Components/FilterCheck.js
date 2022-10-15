import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FilterCheck = props => {
  const operate = (array, setArray, index) => {
    if (array.includes(props.data[index].first)) {
      array.splice(array.indexOf(props.data[index].first), 1);
      setArray([...array]);
    } else {
      array.push(props.data[index].first);
      setArray([...array]);
    }
  };

  const handlePress = index => {
    if (props.category === 'Size') {
      operate(props.sizeFilters, props.setSizeFilters, index);
    } else if (props.category === 'Color') {
      operate(props.colorFilters, props.setColorFilters, index);
    } else if (props.category === 'Brand') {
      operate(props.brandFilters, props.setBrandFilters, index);
    }
  };

  const getColor = index => {
    switch (props.category) {
      case 'Size':
        return props.sizeFilters.includes(props.data[index].first)
          ? '#fb7ca0'
          : '#c9c9c9';
      case 'Color':
        return props.colorFilters.includes(props.data[index].first)
          ? '#fb7ca0'
          : '#c9c9c9';
      case 'Brand':
        return props.brandFilters.includes(props.data[index].first)
          ? '#fb7ca0'
          : '#c9c9c9';
      default:
        return '#c9c9c9';
    }
  };

  return props.data.map((item, index) => {
    return (
      <Pressable
        onPress={() => handlePress(index)}
        key={index}
        style={{height: hp(8)}}>
        <View style={styles.buttonView}>
          <View style={styles.checkMarkView}>
            <Ionicons
              name="ios-checkmark"
              size={hp(3)}
              style={{color: getColor(index)}}
            />
          </View>
          <View style={styles.checkTextView}>
            {props.category === 'Color' && (
              <View
                style={[
                  styles.coloredView,
                  {
                    backgroundColor: item.code,
                  },
                ]}
              />
            )}
            <Text style={styles.checkText}>{item.first}</Text>
          </View>
          <View style={styles.numbersTextView}>
            <Text style={styles.numbersText}>{item.second}</Text>
          </View>
        </View>
      </Pressable>
    );
  });
};

const styles = StyleSheet.create({
  buttonView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: hp(0.05),
    borderBottomColor: '#d1d1d1',
  },
  checkMarkView: {
    flex: 0.8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkTextView: {
    flex: 2,
    paddingLeft: hp(1),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  coloredView: {
    height: hp(2.5),
    width: hp(2.5),
    marginRight: hp(1),
  },
  checkText: {
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Light',
    color: 'black',
  },
  numbersTextView: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: hp(1),
    alignItems: 'center',
  },
  numbersText: {
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Light',
    color: '#c9c9c9',
  },
});

export default FilterCheck;
