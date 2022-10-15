import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import {Input} from '@ui-kitten/components';

import ScaleAnimation from '../../Components/ScaleAnimation';
import Button from '../../Components/Button';

const ProfileHelperScreen = ({navigation, route}) => {
  const [mobile, setMobile] = useState(route.params.mobile);
  const {topic, title} = route.params;
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePress = () => {
    navigation.navigate({
      name: 'EditProfilePage',
      params: {mobile},
      merge: true,
    });
  };

  const getContent = () => {
    switch (topic) {
      case 'CHANGE_MOBILE_NUMBER':
        return (
          <View style={styles.updateMobileView}>
            <View style={styles.updateTextView}>
              <Text style={styles.updateText}>Update your mobile number</Text>
              <Text style={styles.followUpText}>
                Will be verfied in the next step
              </Text>
            </View>
            <View style={styles.inputTextWrapper}>
              <Input
                value={mobile}
                textStyle={styles.inputStyle}
                onChangeText={nextValue => setMobile(nextValue)}
              />
            </View>
            <View style={{paddingHorizontal: hp(2), paddingVertical: hp(1)}}>
              <Pressable onPress={handlePress} style={styles.continueCta}>
                <Text style={styles.continueCtaText}>CONTINUE</Text>
              </Pressable>
            </View>
          </View>
        );
      case 'CHANGE_PASSWORD':
        return (
          <View style={styles.updateMobileView}>
            <View style={styles.updateTextView}>
              <Input
                value={oldPassword}
                placeholder="Old Password"
                textStyle={styles.inputStyle}
                onChangeText={nextValue => setOldPassword(nextValue)}
              />
            </View>
            <View style={{paddingHorizontal: hp(2), marginBottom: hp(2)}}>
              <Input
                value={newPassword}
                placeholder="New Password"
                textStyle={styles.inputStyle}
                onChangeText={nextValue => setNewPassword(nextValue)}
              />
            </View>
            <View style={{paddingHorizontal: hp(2), marginBottom: hp(2)}}>
              <Input
                value={confirmPassword}
                placeholder="Confirm Password"
                textStyle={styles.inputStyle}
                onChangeText={nextValue => setConfirmPassword(nextValue)}
              />
            </View>
            <View style={styles.changePasswordView}>
              <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
                <Button viewProps={styles.changePasswordCtaStyle}>
                  <Text style={styles.changePasswordCtaText}>
                    CHANGE PASSWORD
                  </Text>
                </Button>
              </ScaleAnimation>
            </View>
          </View>
        );
      default:
        return <></>;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Feather name="arrow-left" size={hp(2.8)} style={styles.arrowIcon} />
        </Pressable>
        {title && (
          <View style={styles.titleTextView}>
            <Text style={styles.titleText}>CHANGE PASSWORD</Text>
          </View>
        )}
      </View>
      {getContent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  header: {
    height: hp(9),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: hp(2),
  },
  titleText: {
    fontSize: hp(1.9),
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    color: '#363636',
  },
  titleTextView: {paddingHorizontal: hp(0.5)},
  arrowIcon: {color: '#363636'},
  updateMobileView: {flex: 1, paddingHorizontal: hp(2)},
  updateTextView: {paddingHorizontal: hp(2), marginBottom: hp(2)},
  updateText: {
    fontFamily: 'Raleway-Medium',
    fontSize: hp(2.2),
    fontWeight: '600',
    marginBottom: hp(1),
    color: 'black',
  },
  followUpText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.7),
    color: 'grey',
  },
  inputTextWrapper: {paddingHorizontal: hp(2), marginBottom: hp(2)},
  inputStyle: {
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Light',
    fontWeight: '300',
    paddingVertical: hp(1),
  },
  continueCta: {backgroundColor: '#fb7ca0', borderRadius: hp(0.5)},
  continueCtaText: {
    fontFamily: 'Raleway-Medium',
    color: 'white',
    textAlign: 'center',
    fontSize: hp(1.9),
    fontWeight: '600',
    paddingVertical: hp(1.5),
  },
  changePasswordView: {paddingHorizontal: hp(2), paddingVertical: hp(1)},
  changePasswordCtaStyle: {
    backgroundColor: '#fb7ca0',
    borderRadius: hp(0.5),
  },
  changePasswordCtaText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    fontSize: hp(1.7),
    color: 'white',
    textAlign: 'center',
    paddingVertical: hp(1.8),
  },
});

export default ProfileHelperScreen;
