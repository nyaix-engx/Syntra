import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground, Platform} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButtonTitle from '../../Components/BackButtonTitle';
import LottieView from 'lottie-react-native';
import {Input} from '@ui-kitten/components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import valid from 'card-validator';
import ScaleAnimation from '../../Components/ScaleAnimation';
import Button from '../../Components/Button';

const AddCardScreen = ({route, navigation}) => {
  const [name, setName] = useState(
    route.params.type === 'EDIT' ? route.params.data.name : '',
  );
  const [cardNumber, setCardNumber] = useState(
    route.params.type === 'EDIT' ? route.params.data.number : '',
  );
  const [expiry, setExpiry] = useState(
    route.params.type === 'EDIT' ? route.params.data.expiry : '',
  );
  const [nameBorder, setNameBorder] = useState(
    route.params.type === 'EDIT' ? 'green' : 'grey',
  );
  const [cardBorder, setCardBorder] = useState(
    route.params.type === 'EDIT' ? 'green' : 'grey',
  );
  const [expiryBorder, setExpiryBorder] = useState(
    route.params.type === 'EDIT' ? 'green' : 'grey',
  );
  const [cardType, setCardType] = useState(
    route.params.type === 'EDIT' ? route.params.data.type : '',
  );
  const handlePress = () => {
    if (route.params.type === 'ADD') {
      if (
        nameBorder === 'green' &&
        cardBorder === 'green' &&
        expiryBorder === 'green'
      ) {
        navigation.navigate({
          name: 'SavedCardsPage',
          params: {
            cards: route.params.cards.concat([
              {name, number: cardNumber, expiry, type: cardType},
            ]),
          },
          merge: true,
        });
      }
    } else {
      if (
        nameBorder === 'green' &&
        cardBorder === 'green' &&
        expiryBorder === 'green'
      ) {
        const newArray = route.params.cards;
        newArray.forEach((item, index) => {
          if (index === route.params.index) {
            item.name = name;
            item.number = cardNumber;
            item.expiry = expiry;
            item.type = cardType;
          }
        });
        navigation.navigate({
          name: 'SavedCardsPage',
          params: {cards: newArray},
          merge: true,
        });
      }
    }
  };

  const handleName = cardHolderName => {
    setName(cardHolderName);
    if (valid.cardholderName(cardHolderName).isValid) {
      setNameBorder('green');
    } else {
      setNameBorder('red');
    }
  };
  const handleCardNumber = number => {
    const cardNumb = number
      .replace(/\s?/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
    setCardNumber(cardNumb);
    valid.number(cardNumb).card
      ? setCardType(valid.number(cardNumb).card.type)
      : setCardType('');
    if (valid.number(cardNumb).isValid) {
      setCardBorder('green');
    } else {
      setCardBorder('red');
    }
  };
  const handleCardExpiry = date => {
    let newDate = date;
    if (newDate.length > expiry.length) {
      if (newDate.length <= 2) {
        setExpiry(newDate);
      } else {
        newDate = newDate.replace('/', '');
        setExpiry(newDate.substr(0, 2) + '/' + newDate.substr(2));
      }
    } else {
      setExpiry(newDate);
    }
    if (valid.expirationDate(date).isValid) {
      setExpiryBorder('green');
    } else {
      setExpiryBorder('red');
    }
  };

  const showAnimation = () => {
    if (cardType === 'visa') {
      return (
        <LottieView
          source={require('../../Assets/lottie/visaCard.json')}
          style={{height: hp(6), width: hp(6)}}
          autoPlay
          loop={false}
        />
      );
    } else if (cardType === 'mastercard') {
      return (
        <LottieView
          source={require('../../Assets/lottie/masterCard.json')}
          style={{height: hp(6), width: hp(6)}}
          autoPlay
          loop={false}
        />
      );
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="ADD CARD" />
      </View>
      <View
        style={{
          flex: 8,
          paddingHorizontal: hp(2),
          paddingVertical: hp(2),
          backgroundColor: 'white',
        }}>
        <View style={{marginBottom: hp(2), paddingVertical: hp(2)}}>
          <Text
            style={{
              fontFamily: 'Raleway-Medium',
              fontSize: hp(2),
              fontWeight: '600',
              color: 'black',
            }}>
            Add New Credit/ Debit Card
          </Text>
        </View>
        <ImageBackground
          source={require('../../Assets/Images/cardBack.jpeg')}
          style={{
            height: hp(25),
            padding: hp(2),
            flexDirection: 'row',
            marginBottom: hp(2),
          }}
          imageStyle={{borderRadius: hp(2)}}>
          <View
            style={{
              width: '70%',
              height: '100%',
              justifyContent: 'space-between',

              paddingVertical: hp(1),
            }}>
            <View style={{marginBottom: hp(1)}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: hp(1.6),
                  color: 'grey',
                  marginBottom: hp(0.5),
                }}>
                NAME ON CARD
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: hp(1.8),
                  color: 'black',
                }}>
                {name || 'XXXXX'}
              </Text>
            </View>
            <View style={{marginBottom: hp(1)}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'grey',
                  fontSize: hp(1.6),
                  marginBottom: hp(0.5),
                }}>
                CARD NUMBER
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: hp(1.8),
                  color: 'black',
                }}>
                {cardNumber || 'XXX XXXX XXXX XXXX'}
              </Text>
            </View>
            <View style={{marginBottom: hp(1)}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: hp(1.6),
                  color: 'grey',
                  marginBottom: hp(0.5),
                }}>
                MONTH/YEAR
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: hp(1.8),
                  color: 'black',
                }}>
                {expiry || 'XX/XX'}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '30%',
              height: '100%',
              alignItems: 'center',
              color: 'black',
            }}>
            {showAnimation()}
          </View>
        </ImageBackground>
        <View
          style={{
            paddingVertical: hp(2),
            backgroundColor: 'white',
          }}>
          <Input
            style={{marginBottom: hp(2), borderColor: nameBorder}}
            value={name}
            textStyle={{
              paddingVertical: hp(1),
              fontSize: Platform.OS === 'android' ? hp(1.9) : hp(1.7),
              fontWeight: '300',
              fontFamily: 'Poppins-Light',
              alignItems: 'center',
            }}
            placeholder="Name on card"
            maxLength={25}
            autoCorrect={false}
            onChangeText={handleName}
          />
          <Input
            style={{marginBottom: hp(2), borderColor: cardBorder}}
            value={cardNumber}
            textStyle={{
              paddingVertical: hp(1),
              fontSize: hp(1.7),
              fontWeight: '300',
              fontFamily: 'Poppins-Light',
            }}
            placeholder="Card Number"
            textContentType="creditCardNumber"
            keyboardType="number-pad"
            maxLength={19}
            accessoryLeft={() => (
              <FontAwesome
                name="credit-card"
                size={hp(2)}
                style={{marginRight: hp(0.5), color: 'grey'}}
              />
            )}
            onChangeText={handleCardNumber}
          />
          <Input
            value={expiry}
            style={{borderColor: expiryBorder}}
            textStyle={{
              paddingVertical: hp(1),
              fontSize: hp(1.7),
              fontWeight: '300',
              fontFamily: 'Poppins-Light',
            }}
            placeholder="Expiry"
            maxLength={5}
            onChangeText={handleCardExpiry}
          />
        </View>
        <View style={{paddingVertical: hp(5), paddingHorizontal: hp(2)}}>
          <ScaleAnimation onPress={handlePress} scaleTo={0.9}>
            <Button
              viewProps={{backgroundColor: '#34a880', borderRadius: hp(0.5)}}>
              <Text
                style={{
                  textAlign: 'center',
                  paddingVertical: hp(1.8),
                  fontFamily: 'Raleway-Medium',
                  fontSize: hp(1.9),
                  fontWeight: '600',
                  color: 'white',
                }}>
                SAVE
              </Text>
            </Button>
          </ScaleAnimation>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddCardScreen;
