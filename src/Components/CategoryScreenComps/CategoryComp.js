import React, {useState, useRef, useEffect} from 'react';
import Animated, {EasingNode, Extrapolate} from 'react-native-reanimated';
import {
  View,
  Text,
  Pressable,
  Platform,
  Image,
  ImageBackground,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CategorySubComp from './CategorySubComp';
import {categoryImages, categoryBanner} from '../../Utils/arrays';

const CategoryComp = props => {
  const rowHeight1 = useRef(new Animated.Value(hp(0)));
  const colors = ['#97b9f0', '#ebb7e8', '#f5b567', '#e399f2', '#e3b28d'];
  const [subTitleState, setSubTitleState] = useState(
    new Array(
      props.category.subCategory ? props.category.subCategory.length : 0,
    ).fill(
      false,
      0,
      props.category.subCategory ? props.category.subCategory.length : 0,
    ),
  );
  useEffect(() => {
    if (props.categoryTitleState[props.index]) {
      showDrop(
        rowHeight1.current,
        props.category.subCategory ? props.category.subCategory.length * 8 : 0,
      );
    } else {
      Platform.OS === 'ios' &&
        props.scrollRef.current.scrollTo({y: 0, animated: true});
      hideDrop(rowHeight1.current, 0);
    }
  }, [props.categoryTitleState]);
  const _onSingleTap = () => {
    let newState = props.categoryTitleState.map((value, index) => {
      if (index === props.index) {
        if (!!value) {
          setSubTitleState(
            new Array(
              props.category.subCategory
                ? props.category.subCategory.length
                : 0,
            ).fill(
              false,
              0,
              props.category.subCategory
                ? props.category.subCategory.length
                : 0,
            ),
          );
        }
        return !value;
      } else {
        setSubTitleState(
          new Array(
            props.category.subCategory ? props.category.subCategory.length : 0,
          ).fill(
            false,
            0,
            props.category.subCategory ? props.category.subCategory.length : 0,
          ),
        );
        return false;
      }
    });
    props.setCategoryTitleState(newState);
  };
  let interpolatedValue = Animated.interpolateNode(rowHeight1.current, {
    inputRange: [
      0,
      hp(
        props.category.subCategory ? props.category.subCategory.length * 8 : 0,
      ),
    ],
    outputRange: ['0deg', '180deg'],
    extrapolate: Extrapolate.CLAMP,
  });

  const showDrop = (height, desiredHeight) => {
    Animated.timing(height, {
      toValue: hp(desiredHeight),
      duration: 500,
      easing: EasingNode.inOut(EasingNode.cubic),
    }).start();
  };
  const hideDrop = (height, desiredHeight) => {
    Animated.timing(height, {
      toValue: hp(desiredHeight),
      duration: 500,
      easing: EasingNode.inOut(EasingNode.cubic),
    }).start();
  };

  const getSubCategory = () => {
    return props.category.subCategory.map((sub, index) => {
      return (
        <CategorySubComp
          index={index}
          key={index}
          sub={sub}
          subTitleState={subTitleState}
          setSubTitleState={setSubTitleState}
          rowHeight1={rowHeight1}
          height1Raw={
            props.category.subCategory
              ? props.category.subCategory.length * 8
              : 0
          }
          hideDrop={hideDrop}
          showDrop={showDrop}
        />
      );
    });
  };

  return (
    <Animated.View style={{marginBottom: hp(0.3)}}>
      <Pressable onPress={props.category.subCategory && _onSingleTap}>
        <ImageBackground
          source={categoryBanner[props.index].img}
          style={{
            height: props.height,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: colors[props.index],
            position: 'relative',
          }}>
          <View
            style={{
              height: '100%',
              width: '35%',
              display: 'flex',
            }}>
            <View style={{display: 'flex', flexDirection: 'row', flex: 1}}>
              <View
                style={{
                  flex: 8,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  paddingLeft: hp(2),
                }}>
                <Text
                  style={{
                    fontSize: Platform.OS === 'android' ? hp(2.2) : hp(2.2),
                    fontFamily: 'Poppins-Medium',
                    fontWeight: '300',
                    color: 'black',
                    backgroundColor: 'white',
                    paddingVertical: hp(0.3),
                    paddingHorizontal: hp(1.2),
                    borderRadius: 10,
                    lineHeight: 25,
                  }}>
                  {props.category.title}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {props.category.subCategory && (
                  <Animated.View
                    style={{
                      transform: [{rotateZ: interpolatedValue}],
                      width: hp(2),
                      height: hp(2),
                    }}>
                    <Fontisto
                      name="angle-down"
                      style={{
                        fontSize:
                          Platform.ios === 'android' ? hp(1.6) : hp(1.4),
                        color: 'black',
                      }}
                    />
                  </Animated.View>
                )}
              </View>
            </View>
          </View>
          <View
            style={{
              height: props.height,
              width: '30%',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: hp(2),
            }}>
            <Image
              resizeMode="contain"
              source={categoryImages[props.index].img}
              style={{
                width: hp(categoryImages[props.index].width),
                height: hp(categoryImages[props.index].height),
              }}
            />
          </View>
        </ImageBackground>
      </Pressable>
      {props.category.subCategory && (
        <Animated.ScrollView
          style={{height: rowHeight1.current}}
          showsVerticalScrollIndicator={false}>
          {getSubCategory()}
        </Animated.ScrollView>
      )}
    </Animated.View>
  );
};

export {CategoryComp as default};
