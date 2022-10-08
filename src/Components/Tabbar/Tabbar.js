import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {iconsSet1, iconsSet2} from '../../Utils/tabbarIcons';

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={tabBarStyles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={tabBarStyles.button_style}>
              <View style={tabBarStyles.button_text_wrapper}>
                <View style={tabBarStyles.iconWrapper}>
                  {isFocused ? iconsSet1[index] : iconsSet2[index]}
                </View>
                <Text
                  style={
                    isFocused
                      ? {
                          color: '#fb7ca0',
                          fontSize: hp(1.6),
                          textAlign: 'center',
                          fontFamily: 'Poppins-Medium',
                        }
                      : {
                          color: 'black',
                          fontSize: hp(1.4),
                          textAlign: 'center',
                          fontFamily: 'Poppins-Medium',
                        }
                  }>
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const tabBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: Platform.OS === 'ios' ? hp(2) : 0,
    borderTopColor: '#ededed',
    borderTopWidth: 1.5,
  },
  button_style: {
    flex: 1,
    paddingVertical: hp(1.2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text_wrapper: {alignItems: 'center', justifyContent: 'center'},
  iconWrapper: {
    width: hp(3.3),
    height: hp(3.3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyTabBar;
