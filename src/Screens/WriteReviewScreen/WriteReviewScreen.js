import React, {useState} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButtonTitle from '../../Components/BackButtonTitle';
import Button from '../../Components/Button';
import ReviewStars from '../../Components/ReviewStars';
import ScaleAnimation from '../../Components/ScaleAnimation';

const WriteReviewScreen = ({navigation}) => {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="WRITE REVIEW" />
      </View>
      <View style={{flex: 8, paddingVertical: hp(2)}}>
        <View
          style={{
            paddingHorizontal: hp(2),
            paddingVertical: hp(2),
            height: hp(14),
            flexDirection: 'row',
            marginBottom: hp(2),
          }}>
          <View style={{height: '100%', width: hp(10)}}>
            <Image
              source={require('../../Assets/Images/polo.png')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: hp(1),
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: hp(1.7),
                color: 'black',
              }}>
              HRX by Hrithik Roshan Ultralyte Men Yellow Running Regular Polo
            </Text>
            <ReviewStars size={hp(2)} />
          </View>
        </View>
        <View style={{paddingHorizontal: hp(2), marginBottom: hp(3)}}>
          <Text
            style={{
              fontFamily: 'Raleway-Medium',
              fontWeight: '500',
              fontSize: hp(1.8),
              marginBottom: hp(2),
              color: 'black',
            }}>
            Write your review here
          </Text>
          <TextInput
            style={{
              fontFamily: 'Poppins-Light',
              height: hp(35),
              paddingTop: hp(2),
              padding: hp(2),
              paddingRight: hp(2),
              paddingBottom: hp(2),
              fontSize: hp(1.7),
              borderWidth: hp(0.1),
              borderColor: 'grey',
              color: 'black',
              textAlignVertical: 'top',
            }}
            numberOfLines={10}
            multiline
            placeholderTextColor={'grey'}
            scrollEnabled
            onChangeText={text => setText(text)}
            value={text}
            placeholder="Please write product review here."
          />
        </View>
        <View style={{paddingHorizontal: hp(2), marginBottom: hp(3)}}>
          <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
            <Button
              viewProps={{
                backgroundColor: '#fb7ca0',
                paddingVertical: hp(2),
                borderRadius: hp(0.5),
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontFamily: 'Raleway-Medium',
                  fontSize: hp(1.8),
                  fontWeight: '600',
                }}>
                SUBMIT
              </Text>
            </Button>
          </ScaleAnimation>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WriteReviewScreen;
