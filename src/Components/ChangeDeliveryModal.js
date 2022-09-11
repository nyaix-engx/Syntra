import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, ScrollView, Pressable, Platform} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Radio} from '@ui-kitten/components';
import {addresses} from '../Utils/arrays';
import ScaleAnimation from './ScaleAnimation';
import Button from './Button';

const ChangeDeliveryModal = props => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState(0);
  const handlePress = index => {
    setSelected(index);
    props.setAddress(addresses[index]);
    props.setShowModal();
  };
  const address = () => {
    return addresses.map((data, index) => {
      return (
        <Pressable
          onPress={() => handlePress(index)}
          key={index}
          style={{
            paddingVertical: hp(2),
            paddingHorizontal: hp(1),
            borderBottomColor: '#e3e3e3',
            borderBottomWidth: hp(0.1),
            marginBottom: hp(2),
            borderRadius: hp(1),
            flexDirection: 'row',
          }}>
          <View
            style={{
              paddingTop: hp(0.5),
              alignItems: 'center',
              marginRight: hp(1),
            }}>
            <Radio status="info" checked={selected === index ? true : false} />
          </View>
          <View style={{width: '90%'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: hp(2),
              }}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontFamily: 'Poppins-Medium',
                    marginRight: hp(0.5),
                    color: 'black',
                  }}>
                  {data.name}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: hp(1),
                  paddingVertical: hp(0.5),
                  borderRadius: hp(2),
                  borderWidth: hp(0.1),
                  borderColor: '#fb7ca0',
                }}>
                <Text
                  style={{
                    fontSize: hp(1.6),
                    fontFamily: 'Poppins-Medium',
                    color: '#fb7ca0',
                  }}>
                  {data.type}
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: hp(1.7),
                  color: 'black',
                }}>
                {data.address}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: hp(1.7),
                  color: 'black',
                }}>
                {data.city} - {data.pincode}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: hp(1.7),
                  marginBottom: hp(1),
                  color: 'black',
                }}>
                {data.state}
              </Text>
            </View>
          </View>
        </Pressable>
      );
    });
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
          maxHeight: hp(50),
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
              fontSize: hp(1.9),
              marginBottom: hp(2),
              color: 'black',
            }}>
            CHANGE DELIVERY ADDRESS
          </Text>
          <Pressable onPress={props.setShowModal} style={{marginBottom: hp(2)}}>
            <Fontisto
              name="plus-a"
              size={hp(2.5)}
              style={{transform: [{rotateZ: '45deg'}], padding: hp(0.8)}}
            />
          </Pressable>
        </View>
        <ScrollView
          style={{marginBottom: hp(2)}}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          {address()}
        </ScrollView>
        <View
          style={{
            paddingHorizontal: hp(3),
            marginBottom: Platform.OS === 'android' ? hp(2) : hp(0),
          }}>
          <ScaleAnimation
            onPress={() => {
              props.setShowModal();
              navigation.navigate('AddNewAddressPage', {type: 'ADD'});
            }}
            scaleTo={0.9}>
            <Button
              viewProps={{
                backgroundColor: '#fb7ca0',
                paddingVertical: hp(1.4),
                borderRadius: hp(0.3),
                marginBottom: insets.bottom,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: hp(1.9),
                  fontFamily: 'Raleway-Medium',
                  color: 'white',
                }}>
                ADD NEW ADDRESS
              </Text>
            </Button>
          </ScaleAnimation>
        </View>
      </View>
    </Modal>
  );
};

export default ChangeDeliveryModal;
