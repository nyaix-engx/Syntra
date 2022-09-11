import React,{useEffect} from 'react';
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withDelay, withTiming,interpolate, Easing } from 'react-native-reanimated';

const EntryAnimation=({children,index,direction})=>{
    const animate=useSharedValue(false)
    useEffect(()=>{
        animate.value=true
    })
    const progress=useDerivedValue(()=>{
        return animate.value ? withDelay(index*(50||0)+100,withTiming(100,{duration:400,easing:Easing.out(Easing.quad)})):0
    })

    const animatedStyle=useAnimatedStyle(()=>{
        let translate
        const opacity=interpolate(progress.value,[0,100],[0,1])
        switch(direction){
            case "TOP":
                translate=interpolate(progress.value,[0,100],[-100,0])
                return {
                    transform:[{translateY:translate}],
                    opacity
                }
            case "BOTTOM":
                translate=interpolate(progress.value,[0,100],[100,0])
                return {
                    transform:[{translateY:translate}],
                    opacity
                }
            case "LEFT":
                translate=interpolate(progress.value,[0,100],[-100,0])
                return {
                    transform:[{translateX:translate}],
                    opacity
                }
            case "RIGHT":
            default:
                translate=interpolate(progress.value,[0,100],[150,0])
                return {
                    transform:[{translateX:translate}],
                    opacity
                }
        }
    })

    return (<Animated.View style={animatedStyle}>
        {children}
    </Animated.View>)
}

export default EntryAnimation