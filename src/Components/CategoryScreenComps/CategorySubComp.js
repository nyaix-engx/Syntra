import React, {useRef, useEffect} from 'react';
import {View, Text, Pressable, Platform} from 'react-native';
import {Divider} from '@ui-kitten/components';
import Animated, {Extrapolate} from 'react-native-reanimated';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';

const CategorySubComp = props => {
  const rowHeight2 = useRef(new Animated.Value(hp(0)));
  const rotateZ = Animated.interpolateNode(rowHeight2.current, {
    inputRange: [0, hp(props.sub.items ? props.sub.items.length * 8 : 0)],
    outputRange: ['0deg', '180deg'],
    extrapolate: Extrapolate.CLAMP,
  });
  useEffect(() => {
    const getValue = () => {
      if (props.sub.items.length > 0) {
        return props.sub.items.length * 8;
      } else {
        return 0;
      }
    };
    if (props.subTitleState[props.index]) {
      props.showDrop(props.rowHeight1.current, props.height1Raw + getValue());
      props.showDrop(rowHeight2.current, getValue());
    } else {
      props.hideDrop(rowHeight2.current, 0);
    }
  }, [props.subTitleState]);

  const subClick = () => {
    const newState = props.subTitleState.map((value, index) => {
      if (index === props.index) {
        if (value) {
          props.hideDrop(props.rowHeight1.current, props.height1Raw);
        }
        return !value;
      } else {
        return false;
      }
    });
    props.setSubTitleState(newState);
  };
  const getSubItems = subItems => {
    return subItems.map((item, index) => {
      return (
        <View key={index}>
          <View
            style={{
              height: hp(8),
              paddingLeft: hp(10),
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: Platform.ios === 'android' ? hp(2) : hp(1.6),
                fontFamily: 'Poppins-Light',
                color: 'black',
              }}>
              {item}
            </Text>
          </View>
          <Divider />
        </View>
      );
    });
  };
  return (
    <React.Fragment>
      <Pressable onPress={props.sub.items && subClick}>
        <View
          style={{
            height: hp(8),
            paddingLeft: hp(5),
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View style={{flex: 3, display: 'flex', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: Platform.ios === 'android' ? hp(2) : hp(1.6),
                fontFamily: 'Poppins-Light',
                color: 'black',
              }}>
              {props.sub.title}
            </Text>
          </View>
          {props.sub.items && (
            <Animated.View
              style={{
                transform: [{rotateZ}],
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Fontisto
                name="angle-down"
                style={{
                  fontSize: Platform.ios === 'android' ? hp(1.6) : hp(1.4),
                }}
              />
            </Animated.View>
          )}
        </View>
      </Pressable>
      {props.sub.items && (
        <Animated.ScrollView
          style={{height: rowHeight2.current}}
          showsVerticalScrollIndicator={false}>
          {getSubItems(props.sub.items)}
        </Animated.ScrollView>
      )}
      <Divider />
    </React.Fragment>
  );
};

export default CategorySubComp;
