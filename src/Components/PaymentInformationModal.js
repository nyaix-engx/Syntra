import React from 'react';
import Modal from 'react-native-modal';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PaymentInformationModal = props => {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      isVisible={props.showModal}
      setShowModal={props.setShowModal}
      onBackdropPress={props.setShowModal}
      style={styles.modalStyles}>
      <View style={styles.modalContentView}>
        <View style={styles.modalHeaderView}>
          <View style={styles.headerTitleView}>
            <Text style={styles.headerTitleText}>PAYMENT INFORMATION</Text>
          </View>
          <View style={styles.rightSectionView}>
            <View style={styles.imageView}>
              <Image source={props.image} style={styles.headerImage} />
            </View>
            <View style={styles.iconView}>
              <Pressable onPress={props.setShowModal}>
                <Fontisto
                  name="plus-a"
                  size={hp(2.5)}
                  style={styles.iconStyle}
                  color="black"
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.modalContent,
            {
              marginBottom: insets.bottom,
            },
          ]}>
          <View style={styles.contentSection}>
            <View style={styles.priceTextView}>
              <Text style={styles.modalText}>MRP</Text>
              <Text style={styles.modalText}>$3000</Text>
            </View>
            <View style={styles.separator}>
              <Text style={styles.modalText}>Discount</Text>
              <Text style={styles.modalText}>$1500</Text>
            </View>
          </View>
          <View style={styles.verticalSeparator}>
            <View style={styles.separator}>
              <Text style={styles.modalText}>Discounted Price</Text>
              <Text style={styles.modalText}>$1500</Text>
            </View>
          </View>
          <View style={styles.verticalSeparator}>
            <View style={styles.separator}>
              <Text style={styles.modalText}>Coupon Discount</Text>
              <Text style={styles.discountText}>-$300</Text>
            </View>
          </View>
          <View style={styles.totalView}>
            <View style={styles.separator}>
              <Text style={styles.totalText}>Total Paid</Text>
              <Text style={styles.totalText}>$1200</Text>
            </View>
          </View>
          <View style={styles.bankAccountView}>
            <View style={styles.bankAccountContent}>
              <FontAwesome name="bank" size={hp(2.5)} color={'blue'} />
              <Text style={styles.bankText}>Paid by SBI Netbanking</Text>
            </View>
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
  modalContentView: {
    backgroundColor: 'white',
    paddingTop: hp(2),
    paddingHorizontal: hp(2),
    borderTopLeftRadius: hp(1),
    borderTopRightRadius: hp(1),
  },
  modalHeaderView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderBottomWidth: hp(0.1),
    borderBottomColor: '#d6d6d6',
    marginBottom: hp(2),
    paddingBottom: hp(1),
  },
  headerTitleView: {justifyContent: 'center'},
  headerTitleText: {
    fontFamily: 'Raleway-Medium',
    fontSize: hp(2),
    fontWeight: '600',
    paddingVertical: hp(1),
    color: 'black',
  },
  rightSectionView: {flexDirection: 'row'},
  imageView: {paddingHorizontal: hp(2)},
  headerImage: {width: hp(7), height: hp(7), borderRadius: hp(3.5)},
  iconView: {justifyContent: 'center'},
  iconStyle: {transform: [{rotateZ: '45deg'}], padding: hp(0.8)},
  modalContent: {
    width: '100%',
    justifyContent: 'space-between',
  },
  contentSection: {
    paddingHorizontal: hp(1),
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: hp(0.1),
    paddingBottom: hp(2),
  },
  priceTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  modalText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.8),
    color: 'black',
  },
  separator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  verticalSeparator: {
    paddingHorizontal: hp(1),
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: hp(0.1),
    paddingVertical: hp(2),
  },
  discountText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.8),
    color: '#34a880',
  },
  totalView: {paddingHorizontal: hp(1), paddingVertical: hp(2)},
  totalText: {
    fontFamily: 'Raleway-Medium',
    fontSize: hp(2),
    fontWeight: '600',
    color: 'black',
  },
  bankAccountView: {marginVertical: hp(2)},
  bankAccountContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6ecf2',
    paddingVertical: hp(2.5),
    paddingHorizontal: hp(2.5),
    borderRadius: hp(0.5),
  },
  bankText: {
    fontFamily: 'RalewayRoman-Medium',
    fontSize: hp(1.9),
    color: 'black',
    marginLeft: hp(2.5),
  },
});

export default PaymentInformationModal;
