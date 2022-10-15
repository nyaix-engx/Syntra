import React from 'react';
import Modal from 'react-native-modal';
import {View, Text, Pressable, Image, Platform, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import ScaleAnimation from './ScaleAnimation';
import Button from './Button';

const AddressRemoveModal = props => {
  const insets = useSafeAreaInsets();
  const handlePress = () => {
    const x = props.items.filter((data, itemIndex) => {
      return itemIndex !== props.index;
    });
    x.length > 0 ? (x[0].default = true) : null;
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
        <View style={styles.modalHeaderView}>
          {props.image && (
            <View style={styles.headerImageView}>
              <View style={styles.imageView}>
                <Image style={styles.headerImage} source={props.image} />
              </View>
            </View>
          )}
          <View style={styles.contentView}>
            <Text style={styles.headingText}>{props.heading}</Text>
            <Text style={styles.modalText}>{props.text}</Text>
          </View>
          <View style={styles.plusIconView}>
            <Pressable onPress={props.setShowModal} style={styles.plusButton}>
              <Fontisto name="plus-a" size={hp(2.5)} style={styles.plusIcon} />
            </Pressable>
          </View>
        </View>
        <View
          style={[
            styles.ctaView,
            {
              marginBottom: Platform.OS === 'ios' ? insets.bottom : hp(4),
            },
          ]}>
          <View style={styles.ctaContainer}>
            <ScaleAnimation onPress={() => props.setShowModal()} scaleTo={0.9}>
              <Button viewProps={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>
                  {props.cancelButtonText}
                </Text>
              </Button>
            </ScaleAnimation>
          </View>
          <View style={styles.ctaContainer}>
            <ScaleAnimation onPress={handlePress} scaleTo={0.9}>
              <Button viewProps={styles.removeButton}>
                <Text style={styles.removeButtonText}>
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
    borderTopLeftRadius: hp(1),
    borderTopRightRadius: hp(1),
    paddingHorizontal: hp(2),
  },
  modalHeaderView: {
    flexDirection: 'row',
    height: hp(13),
    backgroundColor: 'white',
    marginBottom: hp(1),
  },
  headerImageView: {flex: 2},
  imageView: {
    height: hp(13),
    width: hp(10),
    borderColor: '#e0e0e0',
    borderWidth: hp(0.05),
  },
  headerImage: {width: '100%', height: hp(12)},
  contentView: {flex: 5, paddingHorizontal: hp(1)},
  headingText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.8),
    paddingVertical: hp(1),
    color: 'black',
  },
  modalText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.65),
    color: 'grey',
  },
  plusIconView: {flex: 0.8},
  plusButton: {marginBottom: hp(2)},
  plusIcon: {transform: [{rotateZ: '45deg'}], padding: hp(0.8)},
  ctaView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  ctaContainer: {width: '45%'},
  cancelButton: {
    backgroundColor: 'grey',
    paddingVertical: hp(1.4),
    width: '100%',
    borderRadius: hp(0.3),
  },
  cancelButtonText: {
    textAlign: 'center',
    fontSize: hp(1.7),
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    color: 'white',
  },
  removeButton: {
    backgroundColor: '#fb7ca0',
    paddingVertical: hp(1.4),
    width: '100%',
    borderRadius: hp(0.3),
  },
  removeButtonText: {
    textAlign: 'center',
    fontFamily: 'Raleway-Medium',
    fontSize: hp(1.7),
    fontWeight: '600',
    color: 'white',
  },
});

export default AddressRemoveModal;
