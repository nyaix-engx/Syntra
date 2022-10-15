import React from 'react';
import Modal from 'react-native-modal';
import {View, Text, Pressable, Platform, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const RemoveAllModal = props => {
  const handlePress = () => {
    props.setOutOfStock([]);
    props.setShowModal();
    Platform.OS === 'ios' &&
      props.scrollRef.current.scrollTo({y: 0, animated: true});
  };

  return (
    <Modal
      isVisible={props.showModal}
      setShowModal={props.setShowModal}
      onBackdropPress={props.setShowModal}
      style={styles.modalStyles}>
      <View style={styles.modalContentStyle}>
        <View style={styles.removeWishlistView}>
          <Text style={styles.removeWishlistText}>REMOVE FROM WISHLIST</Text>
        </View>
        <View style={styles.modalTextView}>
          <Text style={styles.modalText}>
            16 item(s) will be removed from your wishlist.
          </Text>
          <Text style={styles.modalText}>
            Are you sure you want to continue?
          </Text>
        </View>
        <View style={styles.ctaViewWrapper}>
          <Pressable
            style={styles.ctaButton}
            onPress={() => props.setShowModal()}>
            <Text style={styles.cancelText}>CANCEL</Text>
          </Pressable>
          <Pressable onPress={handlePress} style={styles.ctaButton}>
            <Text style={styles.removeText}>REMOVE</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalStyles: {
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: hp(3),
    margin: 0,
  },
  modalContentStyle: {
    paddingVertical: hp(1),
    paddingHorizontal: hp(2),
    backgroundColor: 'white',
    borderRadius: hp(1),
  },
  removeWishlistView: {
    display: 'flex',
    justifyContent: 'center',
    paddingVertical: hp(2),
  },
  removeWishlistText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.6),
    color: 'black',
  },
  modalTextView: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: hp(2),
  },
  modalText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.5),
    color: 'black',
  },
  ctaViewWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: hp(1),
  },
  cancelText: {
    fontFamily: 'Raleway-Medium',
    fontSize: hp(1.6),
    fontWeight: '600',
    color: 'black',
  },
  removeText: {
    fontFamily: 'Raleway-Medium',
    fontSize: hp(1.6),
    fontWeight: '600',
    color: '#fb7ca0',
  },
  ctaButton: {padding: hp(2)},
});

export default RemoveAllModal;
