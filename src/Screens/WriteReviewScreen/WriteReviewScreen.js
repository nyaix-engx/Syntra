import React, {useState} from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';

import BackButtonTitle from '../../Components/BackButtonTitle';
import Button from '../../Components/Button';
import ReviewStars from '../../Components/ReviewStars';
import ScaleAnimation from '../../Components/ScaleAnimation';

const WriteReviewScreen = () => {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButtonTitle title="WRITE REVIEW" />
      </View>
      <View style={styles.content}>
        <View style={styles.imageView}>
          <View style={styles.imageContentWrapper}>
            <Image
              source={{uri: 'https://dummyimage.com/250x250/000/fb7ca0'}}
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.productTextView}>
            <Text style={styles.productText}>
              HRX by Hrithik Roshan Ultralyte Men Yellow Running Regular Polo
            </Text>
            <ReviewStars size={hp(2)} />
          </View>
        </View>
        <View style={styles.writeReviewView}>
          <Text style={styles.writeReviewText}>Write your review here</Text>
          <TextInput
            style={styles.writeReviewTextInput}
            numberOfLines={10}
            multiline
            placeholderTextColor={'grey'}
            scrollEnabled
            onChangeText={value => setText(value)}
            value={text}
            placeholder="Please write product review here."
          />
        </View>
        <View style={styles.submitButtonWrapper}>
          <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
            <Button viewProps={styles.submitButton}>
              <Text style={styles.submitButtonText}>SUBMIT</Text>
            </Button>
          </ScaleAnimation>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  header: {flex: 0.8},
  content: {flex: 8, paddingVertical: hp(2)},
  imageView: {
    paddingHorizontal: hp(2),
    paddingVertical: hp(2),
    height: hp(14),
    flexDirection: 'row',
    marginBottom: hp(2),
  },
  imageContentWrapper: {height: '100%', width: hp(10)},
  imageStyle: {height: '100%', width: '100%'},
  productTextView: {
    flex: 1,
    paddingHorizontal: hp(1),
  },
  productText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.7),
    color: 'black',
  },
  writeReviewView: {paddingHorizontal: hp(2), marginBottom: hp(3)},
  writeReviewText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '500',
    fontSize: hp(1.8),
    marginBottom: hp(2),
    color: 'black',
  },
  writeReviewTextInput: {
    fontFamily: 'Poppins-Light',
    height: hp(35),
    paddingTop: hp(2),
    padding: hp(2),
    paddingRight: hp(2),
    paddingBottom: hp(2),
    fontSize: hp(1.7),
    borderWidth: hp(0.1),
    borderColor: '#b9b9b9',
    borderRadius: hp(1),
    color: 'black',
    textAlignVertical: 'top',
  },
  submitButtonWrapper: {paddingHorizontal: hp(2), marginBottom: hp(3)},
  submitButton: {
    backgroundColor: '#fb7ca0',
    paddingVertical: hp(2),
    borderRadius: hp(0.5),
  },
  submitButtonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Raleway-Medium',
    fontSize: hp(1.8),
    fontWeight: '600',
  },
});

export default WriteReviewScreen;
