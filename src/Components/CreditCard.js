import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

import ConfirmModal from './ConfirmModal';
import {CreditCardsLogo} from '../Utils/arrays';

const CreditCard = ({data, index, cards, setCards, scrollY, scrollRef}) => {
  const navigation = useNavigation();
  const [showRemoveCardModal, setShowRemoveCardModal] = useState(false);
  const getLogo = type => {
    switch (type) {
      case 'visa':
        return CreditCardsLogo[0].logo;
      case 'mastercard':
        return CreditCardsLogo[1].logo;
      case 'american-express':
        return CreditCardsLogo[2].logo;
      case 'diners-club':
        return CreditCardsLogo[3].logo;
      case 'discover':
        return CreditCardsLogo[4].logo;
      case 'jcb':
        return CreditCardsLogo[5].logo;
      case 'unionpay':
        return CreditCardsLogo[6].logo;
      case 'maestro':
        return CreditCardsLogo[7].logo;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>{getLogo(data.type)}</View>
      <View style={styles.cardNumberView}>
        <Text style={styles.cardDataTitle}>CARD NUMBER</Text>
        <Text style={styles.cardData}>{data.number}</Text>
      </View>
      <View style={styles.cardRow}>
        <View>
          <Text style={styles.nameOnCardText}>NAME ON CARD</Text>
          <Text style={styles.cardData}>{data.name}</Text>
        </View>
        <View>
          <Text style={styles.cardDataTitle}>VALIDITY</Text>
          <Text style={styles.cardData}>{data.expiry}</Text>
        </View>
      </View>
      <View style={styles.ctaWrapper}>
        <Pressable
          onPress={() => {
            navigation.navigate('AddCardPage', {
              type: 'EDIT',
              data,
              cards,
              index,
            });
          }}
          style={styles.ctaButton}>
          <Text style={styles.ctaText}>EDIT</Text>
        </Pressable>
        <Pressable
          onPress={() => setShowRemoveCardModal(true)}
          style={styles.ctaButton}>
          <Text style={styles.ctaText}>REMOVE</Text>
        </Pressable>
        <ConfirmModal
          heading="REMOVE CARD"
          text="Are you sure you want to remove this card?"
          confirmButtonText="REMOVE"
          cancelButtonText="CANCEL"
          showModal={showRemoveCardModal}
          setShowModal={() => setShowRemoveCardModal(false)}
          items={cards}
          setItems={setCards}
          index={index}
          scrollY={scrollY}
          scrollRef={scrollRef}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(2),
    paddingHorizontal: hp(2),
    paddingBottom: hp(1),
    backgroundColor: 'white',
    borderRadius: hp(0.5),
    borderColor: '#cfcfcf',
    borderWidth: hp(0.1),
    marginBottom: hp(2),
  },
  logoView: {alignItems: 'flex-end'},
  cardNumberView: {marginBottom: hp(2)},
  cardDataTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.6),
    color: '#bababa',
    marginBottom: hp(0.5),
  },
  cardData: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.8),
    color: 'black',
  },
  cardRow: {
    marginBottom: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameOnCardText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.6),
    color: '#bababa',
    marginBottom: hp(0.5),
  },
  ctaWrapper: {
    flexDirection: 'row',
    borderTopColor: '#cfcfcf',
    borderTopWidth: hp(0.1),
    paddingVertical: hp(1),
  },
  ctaButton: {
    flex: 1,
    borderRightColor: '#cfcfcf',
    borderRightWidth: hp(0.05),
    paddingVertical: hp(1),
  },
  ctaText: {
    textAlign: 'center',
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    fontSize: hp(1.9),
    color: 'blue',
  },
});

export default CreditCard;
