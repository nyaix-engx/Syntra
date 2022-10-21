import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BackButtonTitle from '../../Components/BackButtonTitle';
import PaymentInformationModal from '../../Components/PaymentInformationModal';

const ItemDetailsScreen = ({route}) => {
  const {data} = route.params;
  const [showModal, setShowModal] = useState(false);

  const getIcon = type => {
    switch (type) {
      case 'Delivered':
        return (
          <MaterialCommunityIcons
            size={hp(3.5)}
            name="truck-check-outline"
            color="black"
          />
        );
      case 'Cancelled':
        return <MaterialIcons size={hp(3.5)} name="cancel" color="#f56e73" />;
      case 'Returned':
        return <AntDesign size={hp(3.5)} name="back" color="black" />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButtonTitle title="ITEM DETAILS" />
      </View>
      <View style={styles.content}>
        <ScrollView
          style={styles.scrollViewStyle}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <View style={styles.itemImageContentWrapper}>
            <View style={styles.imageViewWrapper}>
              <View style={styles.imageContainer}>
                <Image
                  resizeMode="contain"
                  source={data.productImage}
                  style={styles.imageStyle}
                />
              </View>
            </View>
            <View style={styles.imageDescriptionWrapper}>
              <View style={styles.imageDescTitleView}>
                <Text style={styles.imageTitleText}>{data.productTitle}</Text>
              </View>
              <View style={styles.imageSubtitleView}>
                <Text style={styles.imageSubtitleText}>
                  {data.productSubtitle}
                </Text>
              </View>
              <View style={styles.imageSubtitleView}>
                <Text style={styles.imageSubtitleText}>Size: {data.size}</Text>
              </View>
            </View>
            <View style={styles.statusWrapper}>
              <View
                style={[
                  styles.statusContainer,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    backgroundColor:
                      data.type === 'Delivered' ? '#34a880' : '#eb4034',
                  },
                ]}>
                <View style={styles.iconWrapper}>{getIcon(data.type)}</View>
                <View style={styles.statusTextWrapper}>
                  <View style={styles.imageSubtitleView}>
                    <Text style={styles.statusTextTitle}>{data.type}</Text>
                  </View>
                  <View style={styles.imageSubtitleView}>
                    <Text style={styles.statusTextContent}>{data.date}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {data.type === 'Delivered' && (
            <View style={styles.deliveredViewWrapper}>
              <View style={styles.deliveredTitleTextViewWrapper}>
                <Text style={styles.deliveredTitleText}>Delivery Address</Text>
              </View>
              <View style={styles.statusWrapper}>
                <View style={styles.deliveredContentWrapper}>
                  <View style={styles.nameWrapper}>
                    <Text style={styles.nameText}>Austin</Text>
                  </View>
                  <View style={styles.mobileNumberWrapper}>
                    <Text style={styles.mobileText}>8956723790</Text>
                  </View>
                </View>
                <Text style={styles.addressText}>
                  B-3, Green Park, New Delhi-78
                </Text>
              </View>
            </View>
          )}

          {data.type !== 'Delivered' && (
            <View style={styles.deliveredViewWrapper}>
              <View style={styles.refundDetailsWrapper}>
                <Text style={styles.refundTitle}>Refund Details</Text>
              </View>
              <View style={styles.refundAmountView}>
                <View style={styles.refundAmountContainer}>
                  <Text style={styles.refundAmountText}>
                    Total Refund Amount
                  </Text>
                  <Text style={styles.amount}>$1200</Text>
                </View>
                <View style={styles.bankDetailsWrapper}>
                  <View style={styles.amountView}>
                    <Text style={styles.bankAmountText}>$20</Text>
                  </View>
                  <View style={styles.bankInfoView}>
                    <Text style={styles.bankInfoText}>
                      Added to SBI Bank Account
                    </Text>
                    <Text style={styles.bankInfoText}>Credit Instantly</Text>
                  </View>
                  <View style={styles.bankLogoWrapper}>
                    <FontAwesome name="bank" size={hp(3)} color={'blue'} />
                  </View>
                </View>
              </View>
            </View>
          )}
          <View style={styles.breakdownView}>
            <View style={styles.breakdownViewTitleWrapper}>
              <Text style={styles.totalPriceText}>Total Item Price</Text>
              <Text style={styles.totalPriceText}>$1200</Text>
            </View>
            <View style={styles.breakdownViewContent}>
              <View style={styles.breakdownViewContentWrapper}>
                <Text style={styles.breakdownText}>You saved </Text>
                <Text style={styles.breakdownPrice}>$300 </Text>
                <Text style={styles.breakdownText}>on this item</Text>
              </View>
              <Pressable onPress={() => setShowModal(true)}>
                <Text style={styles.viewBreakupText}>View Breakup</Text>
              </Pressable>
            </View>
          </View>
          {data.type === 'Delivered' && (
            <View style={styles.updatesView}>
              <View style={{marginBottom: hp(2)}}>
                <Text style={styles.updatesSentTitle}>Updates sent to</Text>
              </View>
              <View style={styles.updatesContentView}>
                <MaterialIcons
                  name="call"
                  color="black"
                  size={hp(3)}
                  style={styles.updatesContentIcon}
                />
                <Text style={styles.updatesContentText}>8347734562</Text>
              </View>
              <View style={styles.updatesContentView}>
                <MaterialIcons
                  name="mail"
                  size={hp(3)}
                  color="black"
                  style={styles.updatesContentIcon}
                />
                <Text style={styles.updatesContentText}>
                  austin_345@gmail.com
                </Text>
              </View>
            </View>
          )}
        </ScrollView>
        <PaymentInformationModal
          showModal={showModal}
          image={data.productImage}
          setShowModal={() => setShowModal(false)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flex: 0.8},
  content: {flex: 8},
  scrollViewStyle: {flex: 1},
  itemImageContentWrapper: {paddingVertical: hp(2)},
  imageViewWrapper: {
    height: hp(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: '100%',
    width: hp(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {height: '90%', width: '100%'},
  imageDescriptionWrapper: {paddingVertical: hp(1)},
  imageDescTitleView: {paddingVertical: hp(0.2)},
  imageTitleText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: hp(2),
    color: 'black',
  },
  imageSubtitleView: {paddingVertical: hp(0.2)},
  imageSubtitleText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.8),
    flexWrap: 'wrap',
    color: 'black',
  },
  statusWrapper: {paddingHorizontal: hp(2)},
  statusContainer: {
    borderRadius: hp(0.5),
    height: hp(9),
    flexDirection: 'row',
  },
  iconWrapper: {
    width: hp(7),
    height: '100%',
    justifyContent: 'center',
    paddingVertical: hp(2),
    alignItems: 'center',
  },
  iconStyle: {width: '60%', height: '80%'},
  statusTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: hp(1),
  },
  statusTextTitle: {
    fontSize: hp(1.8),
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  statusTextContent: {
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Light',
    color: 'white',
  },
  deliveredViewWrapper: {
    paddingVertical: hp(3),
    backgroundColor: 'white',
    marginBottom: hp(2),
  },
  deliveredTitleTextViewWrapper: {
    paddingHorizontal: hp(2),
    marginBottom: hp(2),
  },
  deliveredTitleText: {
    fontFamily: 'Raleway-Medium',
    fontSize: hp(1.9),
    fontWeight: '600',
    color: 'black',
  },
  deliveredContentWrapper: {flexDirection: 'row', marginBottom: hp(1)},
  nameWrapper: {
    paddingRight: hp(1.2),
    borderRightWidth: hp(0.1),
    borderRightColor: '#d6d6d6',
  },
  nameText: {
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Light',
    color: 'black',
  },
  mobileNumberWrapper: {paddingLeft: hp(1.2)},
  mobileText: {
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Light',
    color: 'black',
  },
  addressText: {
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Light',
    color: 'black',
  },
  refundDetailsWrapper: {
    marginBottom: hp(1),
    paddingHorizontal: hp(2),
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: hp(0.1),
    paddingBottom: hp(1.5),
  },
  refundTitle: {
    fontFamily: 'Raleway-Medium',
    fontSize: hp(1.9),
    color: 'black',
    fontWeight: '600',
  },
  refundAmountView: {
    paddingHorizontal: hp(2),
    paddingVertical: hp(0.5),
  },
  refundAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  refundAmountText: {
    fontFamily: 'Raleway-Medium',
    fontSize: hp(1.9),
    fontWeight: '600',
    color: 'black',
  },
  amount: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.9),
    color: '#34a880',
  },
  bankDetailsWrapper: {
    flexDirection: 'row',
    padding: hp(3),
    backgroundColor: '#e6ecf2',
    borderRadius: hp(0.5),
  },
  amountView: {flex: 1},
  bankAmountText: {
    fontSize: hp(1.9),
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  bankInfoView: {flex: 4},
  bankInfoText: {
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Light',
    marginBottom: hp(0.5),
    color: 'black',
  },
  bankLogoWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bankLogoImage: {width: hp(4), height: hp(4)},
  breakdownView: {
    paddingVertical: hp(2),
    backgroundColor: 'white',
    marginBottom: hp(2),
  },
  breakdownViewTitleWrapper: {
    paddingHorizontal: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  totalPriceText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.9),
    color: 'black',
    fontWeight: '600',
  },
  breakdownViewContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: hp(2),
    alignItems: 'center',
    paddingVertical: hp(0.5),
  },
  breakdownViewContentWrapper: {flexDirection: 'row', alignItems: 'center'},
  breakdownText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.6),
    color: 'black',
  },
  breakdownPrice: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.9),
    color: '#34a880',
  },
  viewBreakupText: {
    fontFamily: 'Raleway-Medium',
    fontSize: hp(1.8),
    fontWeight: '700',
    color: '#fb7ca0',
  },
  updatesView: {padding: hp(2), backgroundColor: 'white'},
  updatesSentTitle: {
    fontFamily: 'Raleway-Medium',
    fontSize: hp(1.9),
    fontWeight: '600',
    color: 'black',
  },
  updatesContentView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  updatesContentText: {
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Light',
    color: 'black',
  },
  updatesContentIcon: {marginRight: hp(2)},
});

export default ItemDetailsScreen;
