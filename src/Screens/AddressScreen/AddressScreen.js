import React, {useState, useRef, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, {EasingNode} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import LottieView from 'lottie-react-native';

import AddressCard from '../../Components/AddressCard';
import BackButtonTitle from '../../Components/BackButtonTitle';
import Button from '../../Components/Button';
import ScaleAnimation from '../../Components/ScaleAnimation';
import EntryAnimation from '../../Components/EntryAnimation';

import {addresses} from '../../Utils/arrays';

const CustomButton = ({navigation, viewStyle, textStyle, userAddresses}) => {
  return (
    <ScaleAnimation
      onPress={() =>
        navigation.navigate('AddNewAddressPage', {type: 'ADD', userAddresses})
      }
      scaleTo={0.9}>
      <Button viewProps={viewStyle}>
        <>
          <Entypo
            name="add-to-list"
            size={hp(3)}
            style={styles.addToListIcon}
          />
          <Text style={textStyle}>ADD NEW ADDRESS</Text>
        </>
      </Button>
    </ScaleAnimation>
  );
};

const AddressScreen = ({navigation, route}) => {
  const [userAddresses, setUserAddresses] = useState(addresses);
  const [scrollY, setScrollY] = useState(0);
  const scrollRef = useRef();
  const opacity = new Animated.Value(0);

  useEffect(() => {
    if (route.params?.userAddresses) {
      setUserAddresses(route.params.userAddresses);
    }
    if (userAddresses.length === 0) {
      Animated.timing(opacity, {
        duration: 1000,
        toValue: 1,
        easing: EasingNode.ease,
      }).start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params?.userAddresses, userAddresses]);

  const getAddress = () => {
    return userAddresses.map((data, index) => (
      <EntryAnimation index={index + 1} key={index}>
        <AddressCard
          data={data}
          index={index}
          scrollY={scrollY}
          scrollRef={scrollRef}
          userAddresses={userAddresses}
          setUserAddresses={setUserAddresses}
        />
      </EntryAnimation>
    ));
  };
  const handleScroll = e => {
    setScrollY(e.nativeEvent.contentOffset.y);
  };

  const getContent = () => {
    if (userAddresses.length > 0) {
      return (
        <>
          <View style={{paddingHorizontal: hp(4), paddingVertical: hp(2)}}>
            <CustomButton
              userAddresses={userAddresses}
              navigation={navigation}
              textStyle={styles.customButtonTextStyle}
              viewStyle={styles.customButtonViewStyle}
            />
          </View>
          <ScrollView
            style={styles.scrollViewStyle}
            ref={scrollRef}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            bounces={false}>
            <View style={styles.scrollViewContentWrapperStyle}>
              {getAddress()}
            </View>
          </ScrollView>
        </>
      );
    } else {
      return (
        <>
          <View style={styles.lottieWrapper}>
            <LottieView
              source={require('../../Assets/lottie/address.json')}
              autoPlay
              loop={false}
            />
          </View>
          <View style={styles.saveAddressWrapper}>
            <Text style={styles.saveAddressText}>SAVE YOUR ADDRESSES NOW</Text>
            <Animated.Text
              style={[
                styles.saveAddressTag,
                {
                  opacity,
                },
              ]}>
              Add your home and office addresses and enjoy faster checkout
            </Animated.Text>
          </View>
          <View style={styles.animationContainer}>
            <ScaleAnimation
              onPress={() =>
                navigation.navigate('AddNewAddressPage', {
                  type: 'ADD',
                  userAddresses,
                })
              }
              scaleTo={0.9}>
              <View style={styles.addButtonWrapper}>
                <Entypo
                  name="plus"
                  size={hp(3)}
                  style={styles.plusIconWrapper}
                />
                <Text style={styles.addButtonText}>ADD NEW ADDRESS</Text>
              </View>
            </ScaleAnimation>
          </View>
        </>
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButtonTitle title="ADDRESS" />
      </View>
      <View style={styles.contentWrapper}>{getContent()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flex: 0.8},
  contentWrapper: {
    flex: 8,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: hp(2),
  },
  customButtonTextStyle: {
    fontFamily: 'Raleway-Medium',
    fontSize: hp(1.8),
    fontWeight: '600',
    textAlign: 'center',
    color: '#ffffff',
  },
  customButtonViewStyle: {
    padding: hp(1.8),
    backgroundColor: '#fb7ca0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(0.5),
  },
  scrollViewStyle: {flex: 1},
  scrollViewContentWrapperStyle: {marginBottom: hp(1), flex: 1},
  lottieWrapper: {height: hp(15), marginVertical: hp(5)},
  saveAddressWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: hp(4),
  },
  saveAddressText: {
    fontFamily: 'Raleway-Medium',
    fontSize: hp(1.8),
    fontWeight: '600',
    color: 'black',
  },
  saveAddressTag: {
    fontFamily: 'ArchitectsDaughter-Regular',
    fontSize: hp(1.8),
    textAlign: 'center',
    marginTop: hp(2),
    color: 'grey',
  },
  animationContainer: {marginVertical: hp(5), paddingHorizontal: hp(9)},
  addButtonWrapper: {
    backgroundColor: 'white',
    paddingVertical: hp(1.5),
    borderRadius: hp(0.3),
    borderWidth: hp(0.1),
    borderColor: '#e6e6e6',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIconWrapper: {marginRight: hp(1), color: 'blue'},
  addButtonText: {
    textAlign: 'center',
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    color: 'blue',
    fontSize: hp(1.8),
  },
  addToListIcon: {marginRight: hp(1), color: '#ffffff'},
});

export default AddressScreen;
