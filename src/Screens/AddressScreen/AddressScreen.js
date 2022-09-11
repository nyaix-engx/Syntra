import React, {useState, useRef, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import AddressCard from '../../Components/AddressCard';
import BackButtonTitle from '../../Components/BackButtonTitle';
import Button from '../../Components/Button';
import ScaleAnimation from '../../Components/ScaleAnimation';
import {addresses} from '../../Utils/arrays';
import LottieView from 'lottie-react-native';
import Animated, {EasingNode} from 'react-native-reanimated';
import EntryAnimation from '../../Components/EntryAnimation';

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
            style={{marginRight: hp(1), color: '#ffffff'}}
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
    if (userAddresses.length == 0) {
      Animated.timing(opacity, {
        duration: 1000,
        toValue: 1,
        easing: EasingNode.ease,
      }).start();
    }
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
              textStyle={{
                fontFamily: 'Raleway-Medium',
                fontSize: hp(1.8),
                fontWeight: '600',
                textAlign: 'center',
                color: '#ffffff',
              }}
              viewStyle={{
                padding: hp(1.8),
                backgroundColor: '#fb7ca0',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: hp(0.5),
              }}
            />
          </View>
          <ScrollView
            style={{flex: 1}}
            ref={scrollRef}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            bounces={false}>
            <View style={{marginBottom: hp(1), flex: 1}}>{getAddress()}</View>
          </ScrollView>
        </>
      );
    } else {
      return (
        <>
          <View style={{height: hp(15), marginVertical: hp(5)}}>
            <LottieView
              source={require('../../Assets/lottie/address.json')}
              autoPlay
              loop={false}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: hp(4),
            }}>
            <Text
              style={{
                fontFamily: 'Raleway-Medium',
                fontSize: hp(1.8),
                fontWeight: '600',
                color: 'black',
              }}>
              SAVE YOUR ADDRESSES NOW
            </Text>
            <Animated.Text
              style={{
                fontFamily: 'ArchitectsDaughter-Regular',
                fontSize: hp(1.8),
                textAlign: 'center',
                marginTop: hp(2),
                color: 'grey',
                opacity,
              }}>
              Add your home and office addresses and enjoy faster checkout
            </Animated.Text>
          </View>
          <View style={{marginVertical: hp(5), paddingHorizontal: hp(9)}}>
            <ScaleAnimation
              onPress={() =>
                navigation.navigate('AddNewAddressPage', {
                  type: 'ADD',
                  userAddresses,
                })
              }
              scaleTo={0.9}>
              <View
                style={{
                  backgroundColor: 'white',
                  paddingVertical: hp(1.5),
                  borderRadius: hp(0.3),
                  borderWidth: hp(0.1),
                  borderColor: '#e6e6e6',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo
                  name="plus"
                  size={hp(3)}
                  style={{marginRight: hp(1), color: 'blue'}}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Raleway-Medium',
                    fontWeight: '600',
                    color: 'blue',
                    fontSize: hp(1.8),
                  }}>
                  ADD NEW ADDRESS
                </Text>
              </View>
            </ScaleAnimation>
          </View>
        </>
      );
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="ADDRESS" />
      </View>
      <View
        style={{
          flex: 8,
          backgroundColor: '#F4F4F4 ',
          paddingHorizontal: hp(2),
        }}>
        {getContent()}
      </View>
    </SafeAreaView>
  );
};

export default AddressScreen;
