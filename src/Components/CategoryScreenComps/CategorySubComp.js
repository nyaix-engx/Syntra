import React, {useRef, useEffect} from 'react';
import {View, Text, Pressable, Platform, StyleSheet} from 'react-native';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <View key={`index_${index}`}>
          <View style={styles.itemTextView}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
          <Divider />
        </View>
      );
    });
  };
  return (
    <React.Fragment>
      <Pressable onPress={props.sub.items && subClick}>
        <View style={styles.categorySubView}>
          <View style={styles.categorySubTitleView}>
            <Text style={styles.categorySubText}>{props.sub.title}</Text>
          </View>
          {props.sub.items && (
            <Animated.View
              style={[
                styles.angleDownView,
                {
                  transform: [{rotateZ}],
                },
              ]}>
              <Fontisto name="angle-down" style={styles.angleDownIcon} />
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

const styles = StyleSheet.create({
  categorySubView: {
    height: hp(8),
    paddingLeft: hp(5),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  categorySubTitleView: {flex: 3, display: 'flex', justifyContent: 'center'},
  categorySubText: {
    fontSize: Platform.ios === 'android' ? hp(2) : hp(1.6),
    fontFamily: 'Poppins-Light',
    color: 'black',
  },
  angleDownView: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  angleDownIcon: {
    fontSize: Platform.ios === 'android' ? hp(1.6) : hp(1.4),
  },
  itemTextView: {
    height: hp(8),
    paddingLeft: hp(10),
    display: 'flex',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: Platform.ios === 'android' ? hp(2) : hp(1.6),
    fontFamily: 'Poppins-Light',
    color: 'black',
  },
});

export default CategorySubComp;
