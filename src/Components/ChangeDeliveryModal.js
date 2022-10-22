import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Platform,
  StyleSheet,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {Radio} from '@ui-kitten/components';
import ScaleAnimation from './ScaleAnimation';
import Button from './Button';

import {addresses} from '../Utils/arrays';

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
          style={styles.addressButton}>
          <View style={styles.radioView}>
            <Radio status="info" checked={selected === index ? true : false} />
          </View>
          <View style={styles.addressContentView}>
            <View style={styles.addressContainer}>
              <View style={styles.personNameView}>
                <Text style={styles.personNameText}>{data.name}</Text>
              </View>
              <View style={styles.addressTypeView}>
                <Text style={styles.addressTypeText}>{data.type}</Text>
              </View>
            </View>
            <Text style={styles.addressText}>{data.address}</Text>
            <Text style={styles.addressText}>
              {data.city} - {data.pincode}
            </Text>
            <Text style={styles.addressText}>{data.state}</Text>
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
      style={styles.modalStyle}>
      <View style={styles.modalContentView}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalHeaderText}>CHANGE DELIVERY ADDRESS</Text>
          <Pressable onPress={props.setShowModal} style={styles.cancelButton}>
            <Fontisto
              name="plus-a"
              size={hp(2.5)}
              style={styles.cancelIcon}
              color="black"
            />
          </Pressable>
        </View>
        <ScrollView
          style={{marginBottom: hp(2)}}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          {address()}
        </ScrollView>
        <View style={styles.addAddressView}>
          <ScaleAnimation
            onPress={() => {
              props.setShowModal();
              navigation.navigate('AddNewAddressPage', {type: 'ADD'});
            }}
            scaleTo={0.9}>
            <Button
              viewProps={[
                styles.addAddressButton,
                {
                  marginBottom: insets.bottom,
                },
              ]}>
              <Text style={styles.addAddressText}>ADD NEW ADDRESS</Text>
            </Button>
          </ScaleAnimation>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 0,
    margin: 0,
  },
  modalContentView: {
    backgroundColor: 'white',
    paddingTop: hp(2),
    paddingHorizontal: hp(2),
    borderTopLeftRadius: hp(1),
    borderTopRightRadius: hp(1),
    maxHeight: hp(50),
  },
  modalHeader: {
    paddingHorizontal: hp(1),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalHeaderText: {
    fontFamily: 'Raleway-Medium',
    fontSize: hp(1.9),
    marginBottom: hp(2),
    color: 'black',
  },
  cancelButton: {marginBottom: hp(2)},
  cancelIcon: {transform: [{rotateZ: '45deg'}], padding: hp(0.8)},
  addAddressView: {
    paddingHorizontal: hp(3),
    marginBottom: Platform.OS === 'android' ? hp(2) : hp(2),
  },
  addAddressButton: {
    backgroundColor: '#fb7ca0',
    paddingVertical: hp(1.4),
    borderRadius: hp(0.3),
  },
  addAddressText: {
    textAlign: 'center',
    fontSize: hp(1.9),
    fontFamily: 'Raleway-Medium',
    color: 'white',
  },
  addressButton: {
    paddingVertical: hp(2),
    paddingHorizontal: hp(1),
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: hp(0.1),
    marginBottom: hp(2),
    borderRadius: hp(1),
    flexDirection: 'row',
  },
  radioView: {
    paddingTop: hp(0.5),
    alignItems: 'center',
    marginRight: hp(1),
  },
  addressContentView: {width: '90%'},
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  personNameView: {flexDirection: 'row', justifyContent: 'center'},
  personNameText: {
    fontSize: hp(1.8),
    fontFamily: 'Poppins-Medium',
    marginRight: hp(0.5),
    color: 'black',
  },
  addressTypeView: {
    backgroundColor: 'white',
    paddingHorizontal: hp(1),
    paddingVertical: hp(0.5),
    borderRadius: hp(2),
    borderWidth: hp(0.1),
    borderColor: '#fb7ca0',
  },
  addressTypeText: {
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Medium',
    color: '#fb7ca0',
  },
  addressText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.7),
    color: 'black',
  },
});

export default ChangeDeliveryModal;
