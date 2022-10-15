import React from 'react';
import Modal from 'react-native-modal';
import {View, Text, Platform, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import ScaleAnimation from './ScaleAnimation';
import Button from './Button';

const UploadImageModal = props => {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      isVisible={props.showModal}
      setShowModal={props.setShowModal}
      onBackdropPress={props.setShowModal}
      style={styles.modalStyles}>
      <View style={styles.modalContentStyle}>
        <View style={styles.modalHeader}>
          <View style={styles.modalHeaderContentView}>
            <Text style={styles.modalHeaderTitle}>UPLOAD PHOTO</Text>
            <Text style={styles.modalHeaderSubText}>
              Choose your profile picture
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.ctaWrapper,
            {
              marginBottom: Platform.OS === 'ios' ? insets.bottom : hp(3),
            },
          ]}>
          <View style={styles.ctaContentView}>
            <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
              <Button viewProps={styles.buttonView}>
                <Text style={styles.buttonText}>Take Photo</Text>
              </Button>
            </ScaleAnimation>
          </View>
          <View style={styles.ctaContentView}>
            <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
              <Button viewProps={styles.buttonView}>
                <Text style={styles.buttonText}>Choose from library</Text>
              </Button>
            </ScaleAnimation>
          </View>
          <View style={styles.ctaContentView}>
            <ScaleAnimation onPress={() => props.setShowModal()} scaleTo={0.9}>
              <Button viewProps={styles.cancelButton}>
                <Text style={styles.cancelText}>Cancel</Text>
              </Button>
            </ScaleAnimation>
          </View>
        </View>
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
    borderTopLeftRadius: hp(2),
    borderTopRightRadius: hp(2),
  },
  modalHeader: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: hp(3),
  },
  modalHeaderContentView: {flex: 5, paddingHorizontal: hp(1)},
  modalHeaderTitle: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: hp(1.8),
    paddingVertical: hp(1),
    color: 'black',
  },
  modalHeaderSubText: {
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
    fontSize: hp(1.6),
    color: '#adadad',
  },
  ctaWrapper: {
    width: '100%',
    justifyContent: 'space-between',
  },
  ctaContentView: {paddingHorizontal: hp(3), marginBottom: hp(1)},
  buttonView: {
    backgroundColor: '#fb7ca0',
    paddingVertical: hp(1.2),
    width: '100%',
    borderRadius: hp(1),
  },
  buttonText: {
    textAlign: 'center',
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  cancelButton: {
    backgroundColor: 'grey',
    paddingVertical: hp(1.2),
    width: '100%',
    borderRadius: hp(1),
  },
  cancelText: {
    textAlign: 'center',
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
});

export default UploadImageModal;
