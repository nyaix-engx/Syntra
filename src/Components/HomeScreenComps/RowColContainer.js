import React from 'react';
import {View, Image, useWindowDimensions, Platform} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {topBrandsArray} from '../../Utils/arrays';

const RowColContainer = () => {
  const {width} = useWindowDimensions();
  const getComp = () => {
    {
      return topBrandsArray.map((brand, index) => {
        return (
          <View
            key={index}
            style={{
              marginHorizontal:
                Platform.OS === 'android'
                  ? (width - hp(13) * 3 - hp(4)) / 6
                  : (width - hp(13) * 3 - hp(1.1)) / 6,
              marginVertical:Platform.OS === 'android'
              ? (width - hp(13) * 3 - hp(8)) / 6
              : (width - hp(13) * 3 - hp(1.1)) / 6,
            }}>
            <Image
              source={brand.img}
              style={{
                width: Platform.OS === 'android' ? hp(13) : hp(12),
                height: Platform.OS === 'android' ? hp(13) : hp(12),
                aspectRatio: 1,
                borderRadius: hp(1),
              }}
            />
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: hp(5),
              }}>
              {brand.logo}
            </View>
          </View>
        );
      });
    }
  };
  return (
    <View style={{paddingHorizontal: hp(2)}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          // backgroundColor:'orange',
          alignItems: 'center',
        }}>
        {getComp()}
      </View>
    </View>
  );
};
export default RowColContainer;
