import React from 'react';
import {
  Pressable,
  View,
  useWindowDimensions,
  Image,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const ListingCard = () => {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.push('DescriptionPage')}
      style={[
        styles.buttonStyle,
        {
          width: width / 2,
        },
      ]}>
      <View style={styles.listImageView}>
        <Image
          style={[
            styles.listImage,
            {
              width: (width - hp(0.5)) / 2,
            },
          ]}
          source={require('../Assets/Images/men.jpg')}
        />
      </View>
      <View style={styles.listImageContent}>
        <View style={styles.brandTitleView}>
          <Text style={styles.brandTitleText}>WROGN</Text>
          <FontAwesome size={hp(2.5)} name="heart-o" />
        </View>
        <View style={styles.productInfoView}>
          <Text style={styles.productInfoText}>Men Slim Fit Jeans</Text>
        </View>
        <View style={styles.productPriceView}>
          <View style={styles.productPriceContent}>
            <Text style={styles.productPriceText}>$124</Text>
            <Text style={styles.discountText}>40% OFF</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: Platform.OS === 'ios' ? hp(40) : hp(45),
    borderWidth: hp(0.1),
    borderColor: '#c7c7c7',
  },
  listImageView: {flex: 4.2, position: 'relative'},
  listImage: {
    height: '100%',
  },
  listImageContent: {
    flex: 1.6,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: hp(0.8),
    borderBottomColor: '#c7c7c7',
  },
  brandTitleView: {
    display: 'flex',
    flex: 1.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  brandTitleText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    fontSize: hp(1.7),
    color: '#363636',
  },
  productInfoView: {
    display: 'flex',
    flex: 1.2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productInfoText: {
    fontSize: hp(1.5),
    color: '#9c9c9c',
    fontFamily: 'Poppins-Light',
  },
  productPriceView: {
    display: 'flex',
    flex: 2,
  },
  productPriceContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPriceText: {
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: hp(1.8),
  },
  discountText: {
    color: '#fb7ca0',
    fontSize: hp(1.5),
    fontFamily: 'Poppins-Medium',
  },
});

export default ListingCard;
