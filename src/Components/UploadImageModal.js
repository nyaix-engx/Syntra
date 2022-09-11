import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, Platform} from 'react-native';
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
          borderTopLeftRadius: hp(2),
          borderTopRightRadius: hp(2),
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            marginBottom: hp(3),
          }}>
          <View style={{flex: 5, paddingHorizontal: hp(1)}}>
            <Text
              style={{
                fontFamily: 'Raleway-Medium',
                fontWeight: '600',
                textAlign: 'center',
                fontSize: hp(1.8),
                paddingVertical: hp(1),
                color: 'black',
              }}>
              UPLOAD PHOTO
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                textAlign: 'center',
                fontSize: hp(1.6),
                color: '#adadad',
              }}>
              Choose your profile picture
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
            marginBottom: Platform.OS === 'ios' ? insets.bottom : hp(3),
          }}>
          <View style={{paddingHorizontal: hp(3), marginBottom: hp(1)}}>
            <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
              <Button
                viewProps={{
                  backgroundColor: '#fb7ca0',
                  paddingVertical: hp(1.2),
                  width: '100%',
                  borderRadius: hp(1),
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: hp(1.7),
                    fontFamily: 'Poppins-Medium',
                    color: 'white',
                  }}>
                  Take Photo
                </Text>
              </Button>
            </ScaleAnimation>
          </View>
          <View style={{paddingHorizontal: hp(3), marginBottom: hp(1)}}>
            <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
              <Button
                viewProps={{
                  backgroundColor: '#fb7ca0',
                  paddingVertical: hp(1.2),
                  width: '100%',
                  borderRadius: hp(1),
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: hp(1.7),
                    fontFamily: 'Poppins-Medium',
                    color: 'white',
                  }}>
                  Choose from library
                </Text>
              </Button>
            </ScaleAnimation>
          </View>
          <View style={{paddingHorizontal: hp(3), marginBottom: hp(1)}}>
            <ScaleAnimation onPress={() => props.setShowModal()} scaleTo={0.9}>
              <Button
                viewProps={{
                  backgroundColor: 'grey',
                  paddingVertical: hp(1.2),
                  width: '100%',
                  borderRadius: hp(1),
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: hp(1.7),
                    fontFamily: 'Poppins-Medium',
                    color: 'white',
                  }}>
                  Cancel
                </Text>
              </Button>
            </ScaleAnimation>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default UploadImageModal;
