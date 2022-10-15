import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Platform,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Number from './number';
import ScaleAnimation from './ScaleAnimation';
import Button from './Button';

import {size} from '../Utils/arrays';

const SizeSelectModal = props => {
  const [tempSize, setTempSize] = useState(props.size);
  const getNumber = () => {
    switch (props.type) {
      case 'type1':
        return size.type1.map((data, index) => {
          return (
            <Number
              key={index}
              size={data}
              selected={tempSize}
              setSelected={setTempSize}
            />
          );
        });
      case 'type2':
        return size.type2.map((data, index) => {
          return (
            <Number
              key={index}
              size={data}
              selected={tempSize}
              setSelected={setTempSize}
            />
          );
        });
    }
  };
  const handlePress = () => {
    props.setShowModal();
    props.setSize(tempSize);
  };
  return (
    <Modal
      isVisible={props.showModal}
      setShowModal={props.setShowModal}
      onBackdropPress={props.setShowModal}
      style={styles.modalStyles}>
      <View style={styles.modalContentStyle}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalHeaderTitle}>SELECT SIZE</Text>
          <Pressable
            onPress={props.setShowModal}
            style={styles.crossIconButton}>
            <Fontisto name="plus-a" size={hp(2.5)} style={styles.crossIcon} />
          </Pressable>
        </View>
        <View style={styles.scrollContentView}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}>
            {getNumber()}
          </ScrollView>
        </View>
        <ScaleAnimation onPress={handlePress} scaleTo={0.9}>
          <Button viewProps={styles.doneButton}>
            <Text style={styles.doneButtonText}>DONE</Text>
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
    borderTopRightRadius: hp(1),
    borderTopLeftRadius: hp(1),
  },
  modalHeader: {
    paddingHorizontal: hp(1),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalHeaderTitle: {
    fontFamily: 'Raleway-Medium',
    fontSize: hp(1.8),
    fontWeight: '600',
    marginBottom: hp(2),
    color: 'black',
  },
  crossIconButton: {marginBottom: hp(2)},
  crossIcon: {transform: [{rotateZ: '45deg'}], padding: hp(0.8)},
  scrollContentView: {marginBottom: hp(2)},
  doneButton: {
    backgroundColor: '#fb7ca0',
    paddingVertical: hp(1.4),
    borderRadius: hp(0.5),
    marginBottom: Platform.OS === 'ios' ? hp(4) : hp(4),
  },
  doneButtonText: {
    textAlign: 'center',
    fontSize: hp(1.9),
    fontFamily: 'Raleway-Medium',
    color: 'white',
    fontWeight: '600',
  },
});

export default SizeSelectModal;
