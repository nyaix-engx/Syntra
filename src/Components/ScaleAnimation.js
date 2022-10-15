import React from 'react';
import {Pressable} from 'react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const TimeConfigurations = {duration: 200, easing: Easing.linear};

const ScaleAnimation = ({onPress, children, scaleTo, disabled}) => {
  const pressed = useSharedValue(false); //sharedValue is reactive, any change in the shared value retriggers the animation

  const progress = useDerivedValue(() => {
    return pressed.value
      ? withTiming(1, TimeConfigurations)
      : withTiming(0, TimeConfigurations);
  });
  const scaleAnimationStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [0, 1],
      [1, scaleTo],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{scale}],
    };
  });
  return (
    <Pressable
      onPressIn={() => (pressed.value = true)}
      onPressOut={() => (pressed.value = false)}
      onPress={onPress}
      disabled={disabled}>
      <Animated.View style={scaleAnimationStyle}>{children}</Animated.View>
    </Pressable>
  );
};

export default ScaleAnimation;
