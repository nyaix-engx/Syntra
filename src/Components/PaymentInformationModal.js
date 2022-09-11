import React from 'react';
import Modal from 'react-native-modal';
import {View, Text, Pressable, Image} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Fontisto from 'react-native-vector-icons/Fontisto';

const PaymentInformationModal = props => {
  const insets = useSafeAreaInsets();

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
            flexDirection: 'row',
            backgroundColor: 'white',
            justifyContent: 'space-between',
            borderBottomWidth: hp(0.1),
            borderBottomColor: '#d6d6d6',
            marginBottom: hp(2),
            paddingBottom: hp(1),
          }}>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                fontFamily: 'Raleway-Medium',
                fontSize: hp(2),
                fontWeight: '600',
                paddingVertical: hp(1),
                color: 'black',
              }}>
              PAYMENT INFORMATION
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingHorizontal: hp(2)}}>
              <Image
                source={props.image}
                style={{width: hp(7), height: hp(7), borderRadius: hp(3)}}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Pressable onPress={props.setShowModal}>
                <Fontisto
                  name="plus-a"
                  size={hp(2.5)}
                  style={{transform: [{rotateZ: '45deg'}], padding: hp(0.8)}}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
            marginBottom: insets.bottom,
          }}>
          <View
            style={{
              paddingHorizontal: hp(1),
              borderBottomColor: '#d6d6d6',
              borderBottomWidth: hp(0.1),
              paddingBottom: hp(2),
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: hp(1),
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: hp(1.8),
                  color: 'black',
                }}>
                MRP
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: hp(1.8),
                  color: 'black',
                }}>
                $3000
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: hp(1.8),
                  color: 'black',
                }}>
                Discount
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: hp(1.8),
                  color: 'black',
                }}>
                $1500
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: hp(1),
              borderBottomColor: '#d6d6d6',
              borderBottomWidth: hp(0.1),
              paddingVertical: hp(2),
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: hp(1.8),
                  color: 'black',
                }}>
                Discounted Price
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: hp(1.8),
                  color: 'black',
                }}>
                $1500
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: hp(1),
              borderBottomColor: '#d6d6d6',
              borderBottomWidth: hp(0.1),
              paddingVertical: hp(2),
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: hp(1.8),
                  color: 'black',
                }}>
                Coupon Discount
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: hp(1.8),
                  color: '#34a880',
                }}>
                -$300
              </Text>
            </View>
          </View>
          <View style={{paddingHorizontal: hp(1), paddingVertical: hp(2)}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Raleway-Medium',
                  fontSize: hp(2),
                  fontWeight: '600',
                  color: 'black',
                }}>
                Total Paid
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: hp(2),
                  fontWeight: '600',
                  color: 'black',
                }}>
                $1200
              </Text>
            </View>
          </View>
          <View style={{marginVertical: hp(2)}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#e6ecf2',
                paddingVertical: hp(1.5),
                borderRadius: hp(0.5),
              }}>
              <Image
                source={require('../Assets/Images/sbi.png')}
                style={{width: hp(4), height: hp(4), marginHorizontal: hp(2)}}
              />
              <Text
                style={{
                  fontFamily: 'RalewayRoman-Medium',
                  fontSize: hp(1.9),
                  color: 'black',
                }}>
                Paid by SBI Netbanking
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PaymentInformationModal;
