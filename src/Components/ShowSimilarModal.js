import React from 'react';
import Modal from 'react-native-modal';
import {View, Text, ScrollView, Platform, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SimilarStylesCard from './WishlistScreenComps/SimilarStylesCard';

const ShowSimilarModal = props => {
  const insets = useSafeAreaInsets();
  return (
    <Modal
      isVisible={props.showModal}
      setShowModal={props.setShowModal}
      onBackdropPress={props.setShowModal}
      style={styles.modalStyle}>
      <View
        style={[
          styles.modalContentStyle,
          {
            paddingBottom: Platform.OS === 'ios' ? insets.bottom : hp(4),
          },
        ]}>
        <View style={styles.similarStylesView}>
          <Text style={styles.similarStylesText}>SIMILAR STYLES</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContentStyle}>
          <SimilarStylesCard />
          <SimilarStylesCard />
          <SimilarStylesCard />
          <SimilarStylesCard />
          <SimilarStylesCard />
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingVertical: 0,
    margin: 0,
  },
  modalContentStyle: {
    backgroundColor: 'white',
  },
  similarStylesView: {
    paddingVertical: hp(2.1),
    paddingHorizontal: hp(2),
  },
  similarStylesText: {
    fontFamily: 'Raleway-Medium',
    color: 'grey',
    fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(1.7),
  },
  scrollContentStyle: {
    paddingHorizontal: hp(1.5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShowSimilarModal;
