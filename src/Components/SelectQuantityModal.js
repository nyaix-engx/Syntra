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
import Number from './number';
import ScaleAnimation from './ScaleAnimation';
import Button from './Button';

import {quantity} from '../Utils/arrays';

const SelectQuantityModal = props => {
  const [tempQuantity, setTempQuantity] = useState(props.quantity);
  const getQuantity = () => {
    return quantity.map((data, index) => {
      return (
        <Number
          key={index}
          size={data}
          selected={tempQuantity}
          setSelected={setTempQuantity}
        />
      );
    });
  };
  return (
    <Modal
      isVisible={props.showModal}
      setShowModal={props.setShowModal}
      onBackdropPress={props.setShowModal}
      style={styles.modalStyles}>
      <View style={styles.modalContentStyle}>
        <View style={styles.modalContentHeader}>
          <Text style={styles.modalContentHeaderText}>SELECT QUANTITY</Text>
          <Pressable onPress={props.setShowModal} style={{marginBottom: hp(2)}}>
            <Fontisto name="plus-a" size={hp(2.5)} style={styles.plusIcon} />
          </Pressable>
        </View>
        <View style={styles.scrollContentWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}>
            {getQuantity()}
          </ScrollView>
        </View>
        <ScaleAnimation
          onPress={() => {
            props.setShowModal();
            props.setQuantity(tempQuantity);
          }}
          scaleTo={0.9}>
          <Button viewProps={styles.doneButton}>
            <Text style={styles.doneText}>DONE</Text>
          </Button>
        </ScaleAnimation>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalStyles: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 0,
    margin: 0,
  },
  modalContentStyle: {
    backgroundColor: 'white',
    paddingTop: hp(2),
    paddingHorizontal: hp(2),
    borderTopLeftRadius: hp(1),
    borderTopRightRadius: hp(1),
  },
  modalContentHeader: {
    paddingHorizontal: hp(1),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContentHeaderText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    fontSize: hp(1.8),
    marginBottom: hp(2),
    color: 'black',
  },
  plusIcon: {transform: [{rotateZ: '45deg'}], padding: hp(0.8)},
  scrollContentWrapper: {marginBottom: hp(2)},
  doneButton: {
    backgroundColor: '#fb7ca0',
    paddingVertical: hp(1.4),
    borderRadius: hp(0.5),
    marginBottom: Platform.OS === 'ios' ? hp(4) : hp(4),
  },
  doneText: {
    textAlign: 'center',
    fontSize: hp(1.9),
    fontFamily: 'Raleway-Medium',
    color: 'white',
    fontWeight: '600',
  },
});

export default SelectQuantityModal;
