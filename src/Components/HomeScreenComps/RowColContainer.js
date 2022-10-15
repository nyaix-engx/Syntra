import React from 'react';
import {
  View,
  Image,
  useWindowDimensions,
  Platform,
  StyleSheet,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {topBrandsArray} from '../../Utils/arrays';

const RowColContainer = () => {
  const {width} = useWindowDimensions();
  const getComp = () => {
    return topBrandsArray.map((brand, index) => {
      return (
        <View
          key={index}
          style={{
            marginHorizontal:
              Platform.OS === 'android' ? wp(3) : (width - wp(29) * 3) / 3,
            marginVertical:
              Platform.OS === 'android'
                ? (width - hp(13) * 3 - hp(8)) / 6
                : (width - hp(13) * 3 - hp(1.1)) / 6,
          }}>
          <Image
            source={brand.img}
            style={{
              width:
                Platform.OS === 'android'
                  ? (width - wp(19)) / 3
                  : width -
                    wp(22.5) * 3 -
                    wp(2.5) * 2.5 -
                    (width - wp(30) * 3) / 3,
              height: Platform.OS === 'android' ? hp(13) : hp(12),
              borderRadius: hp(1),
            }}
          />
          <View style={styles.brandLogo}>{brand.logo}</View>
        </View>
      );
    });
  };
  return <View style={styles.container}>{getComp()}</View>;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(5),
  },
});
export default RowColContainer;
