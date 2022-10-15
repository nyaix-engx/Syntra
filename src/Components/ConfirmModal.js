import React from 'react';
import Modal from 'react-native-modal';
import {View, Text, Pressable, Image, Platform, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import ScaleAnimation from './ScaleAnimation';
import Button from './Button';

const ConfirmModal = props => {
  const insets = useSafeAreaInsets();
  const handlePress = () => {
    const x = props.items.filter((data, itemIndex) => {
      return itemIndex !== props.index;
    });
    props.setItems([...x]);
    props.setShowModal();
    Platform.OS === 'ios' &&
      props.scrollRef.current.scrollTo({
        y: props.scrollY - hp(30),
        animated: true,
      });
  };
  return (
    <Modal
      isVisible={props.showModal}
      setShowModal={props.setShowModal}
      onBackdropPress={props.setShowModal}
      style={styles.modalStyle}>
      <View style={styles.modalContentView}>
        <View style={styles.modalHeaderImageView}>
          {props.image && (
            <View style={styles.modalImageView}>
              <View style={styles.modalImageContentView}>
                <Image style={styles.modalImage} source={props.image} />
              </View>
            </View>
          )}
          <View style={styles.modalTextView}>
            <Text style={styles.modalHeadingText}>{props.heading}</Text>
            <Text style={styles.modalContentText}>{props.text}</Text>
          </View>
          <View style={styles.plusIconView}>
            <Pressable
              onPress={props.setShowModal}
              style={styles.plusIconButton}>
              <Fontisto name="plus-a" size={hp(2.5)} style={styles.plusIcon} />
            </Pressable>
          </View>
        </View>
        <View
          style={[
            styles.ctaWrapper,
            {
              marginBottom: Platform.OS === 'ios' ? insets.bottom : hp(4),
            },
          ]}>
          <View style={styles.ctaButtonContainer}>
            <ScaleAnimation onPress={() => props.setShowModal()} scaleTo={0.9}>
              <Button viewProps={styles.cancelButton}>
                <Text style={styles.ctaButtonText}>
                  {props.cancelButtonText}
                </Text>
              </Button>
            </ScaleAnimation>
          </View>
          <View style={styles.ctaButtonContainer}>
            <ScaleAnimation onPress={handlePress} scaleTo={0.9}>
              <Button viewProps={styles.removeButton}>
                <Text style={styles.ctaButtonText}>
                  {props.confirmButtonText}
                </Text>
              </Button>
            </ScaleAnimation>
          </View>
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
    borderTopRightRadius: hp(1),
    borderTopLeftRadius: hp(1),
  },
  modalHeaderImageView: {
    flexDirection: 'row',
    height: hp(13),
    backgroundColor: 'white',
    marginBottom: hp(1),
  },
  modalImageView: {flex: 2},
  modalImageContentView: {
    height: hp(13),
    width: hp(10),
  },
  modalImage: {width: '100%', height: hp(12)},
  modalTextView: {flex: 5, paddingHorizontal: hp(1)},
  modalHeadingText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    fontSize: hp(1.8),
    paddingVertical: hp(1),
    color: 'black',
  },
  modalContentText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.6),
    color: 'grey',
  },
  plusIconView: {flex: 0.8},
  plusIconButton: {marginBottom: hp(2)},
  plusIcon: {transform: [{rotateZ: '45deg'}], padding: hp(0.8)},
  ctaWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  ctaButtonContainer: {width: '45%'},
  ctaButtonText: {
    textAlign: 'center',
    fontSize: hp(1.7),
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    color: 'white',
  },
  cancelButton: {
    backgroundColor: 'grey',
    paddingVertical: hp(1.4),
    width: '100%',
    borderRadius: hp(0.3),
  },
  removeButton: {
    backgroundColor: '#fb7ca0',
    paddingVertical: hp(1.4),
    width: '100%',
    borderRadius: hp(0.3),
  },
});

export default ConfirmModal;
