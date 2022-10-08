import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, Pressable, Platform} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Input} from '@ui-kitten/components';
import ScaleAnimation from './ScaleAnimation';
import Button from './Button';

const ApplyCouponModal = props => {
  const insets = useSafeAreaInsets();
  const [coupon, setCoupon] = useState('');
  const handlePress = () => {
    coupon ? props.setCouponApplied(true) : props.setCouponApplied(false);
    props.setShowModal();
  };
  return (
    <Modal
      isVisible={props.showModal}
      setShowModal={props.setShowModal}
      onBackdropPress={props.setShowModal}
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 0,
        margin: 0,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          paddingTop: hp(2),
          paddingHorizontal: hp(2),
          borderTopLeftRadius: hp(1),
          borderTopRightRadius: hp(1),
        }}>
        <View
          style={{
            paddingHorizontal: hp(1),
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Raleway-Medium',
              fontSize: hp(1.8),
              fontWeight: '600',
              marginBottom: hp(2),
              color: 'black',
            }}>
            APPLY COUPON
          </Text>
          <Pressable onPress={props.setShowModal} style={{marginBottom: hp(2)}}>
            <Fontisto
              name="plus-a"
              size={hp(2.5)}
              style={{transform: [{rotateZ: '45deg'}], padding: hp(0.8)}}
            />
          </Pressable>
        </View>
        <View style={{marginBottom: hp(2)}}>
          <Input
            placeholder="Enter Coupon Code"
            value={coupon}
            style={{borderRadius: hp(0.5)}}
            textStyle={{
              fontSize: Platform.OS === 'android' ? hp(1.7) : hp(1.8),
              paddingVertical: hp(0.5),
              fontFamily: 'Poppins-Light',
              fontWeight: '300',
            }}
            accessoryRight={() => {
              return (
                <Pressable
                  onPress={() => setCoupon('')}
                  style={{
                    paddingHorizontal: hp(1),
                    height: hp(4),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Entypo
                    name="circle-with-cross"
                    size={hp(3)}
                    style={{color: 'grey'}}
                  />
                </Pressable>
              );
            }}
            onChangeText={nextValue => setCoupon(nextValue)}
          />
        </View>
        <ScaleAnimation onPress={handlePress} scaleTo={0.9}>
          <Button
            viewProps={{
              backgroundColor: '#fb7ca0',
              paddingVertical: hp(1.4),
              borderRadius: hp(0.5),
              marginBottom: Platform.OS === 'ios' ? hp(4) : hp(4),
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: hp(1.9),
                fontFamily: 'Raleway-Medium',
                fontWeight: '600',
                color: 'white',
              }}>
              DONE
            </Text>
          </Button>
        </ScaleAnimation>
      </View>
    </Modal>
  );
};

export default ApplyCouponModal;
