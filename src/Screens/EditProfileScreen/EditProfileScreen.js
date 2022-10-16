import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar, Input} from '@ui-kitten/components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import BackButtonTitle from '../../Components/BackButtonTitle';
import ScaleAnimation from '../../Components/ScaleAnimation';
import Button from '../../Components/Button';
import UploadImageModal from '../../Components/UploadImageModal';

const EditProfileScreen = ({navigation, route}) => {
  const [mobile, setMobile] = useState('8978673456');
  const [name, setName] = useState('Alex Mahone');
  const [email, setEmail] = useState('alex_mahone@gmail.com');
  const [gender, setGender] = useState('Male');
  const [location, setLocation] = useState('New York, USA');
  const [uploadImageModal, setUploadImageModal] = useState(false);

  useEffect(() => {
    if (route.params?.mobile) {
      setMobile(route.params.mobile);
    }
  }, [route.params?.mobile]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <BackButtonTitle title="EDIT PROFILE" />
      </View>
      <View style={styles.contentWrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={styles.scrollStyle}>
          <ImageBackground
            style={styles.imageViewWrapper}
            resizeMode="stretch"
            resizeMethod="scale"
            source={require('../../Assets/Images/Categories/banner_2.jpg')}>
            <View style={styles.avatarWrapper}>
              <Avatar
                ImageComponent={() => (
                  <Image
                    style={styles.avatarImage}
                    source={require('../../Assets/Images/avatar.jpeg')}
                  />
                )}
              />
              <Pressable
                onPress={() => setUploadImageModal(true)}
                style={styles.imageButton}>
                <MaterialIcons
                  size={hp(2.5)}
                  color="#fb7ca0"
                  name="photo-camera"
                  style={styles.cameraImage}
                />
              </Pressable>
            </View>
          </ImageBackground>
          <View style={styles.inputRowWrapper}>
            <Input
              value={mobile}
              disabled
              textStyle={styles.inputStyle}
              label={() => (
                <Text style={styles.inputTitleText}>MOBILE NUMBER</Text>
              )}
              onChangeText={nextValue => setMobile(nextValue)}
              accessoryRight={() => (
                <Pressable
                  onPress={() =>
                    navigation.navigate('ProfileHelperPage', {
                      topic: 'CHANGE_MOBILE_NUMBER',
                      mobile,
                    })
                  }
                  style={styles.changeButton}>
                  <Text style={styles.changeButtonText}>CHANGE</Text>
                </Pressable>
              )}
            />
          </View>
          <View style={styles.inputRowWrapper}>
            <Input
              value={name}
              textStyle={styles.inputStyle}
              label={() => <Text style={styles.inputTitleText}>FULL NAME</Text>}
              placeholder="Place your Text"
              onChangeText={nextValue => setName(nextValue)}
            />
          </View>
          <View style={{paddingHorizontal: hp(3), marginBottom: hp(2)}}>
            <Input
              value={email}
              textStyle={styles.inputStyle}
              label={() => <Text style={styles.inputTitleText}>EMAIL</Text>}
              onChangeText={nextValue => setEmail(nextValue)}
            />
          </View>
          <View style={styles.toggleButtonContainer}>
            <Pressable
              onPress={() => setGender('Male')}
              style={[
                styles.toggleButton,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  backgroundColor: gender === 'Male' ? '#fb7ca0' : '#ededed',
                },
              ]}>
              <Text
                style={[
                  styles.toggleButtonText,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    color: gender === 'Male' ? 'white' : '#fb7ca0',
                  },
                ]}>
                MALE
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setGender('Female')}
              style={[
                styles.toggleButton,
                // eslint-disable-next-line react-native/no-inline-styles
                {backgroundColor: gender === 'Female' ? '#fb7ca0' : '#ededed'},
              ]}>
              <Text
                style={[
                  styles.toggleButtonText,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    color: gender === 'Female' ? 'white' : '#fb7ca0',
                  },
                ]}>
                FEMALE
              </Text>
            </Pressable>
          </View>
          <View style={{paddingHorizontal: hp(3), marginBottom: hp(2)}}>
            <Input
              value={location}
              textStyle={styles.inputStyle}
              label={() => <Text style={styles.inputTitleText}>LOCATION</Text>}
              onChangeText={nextValue => setLocation(nextValue)}
            />
          </View>
          <View style={{paddingHorizontal: hp(3), marginBottom: hp(2)}}>
            <Pressable
              onPress={() =>
                navigation.navigate('ProfileHelperPage', {
                  topic: 'CHANGE_PASSWORD',
                  title: 'Change Password',
                })
              }
              style={styles.changePasswordButton}>
              <Text style={styles.changePasswordButtonText}>
                CHANGE PASSWORD
              </Text>
            </Pressable>
          </View>
        </ScrollView>
        <View style={styles.saveDetailsButtonWrapper}>
          <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
            <Button viewProps={styles.saveDetailsButton}>
              <Text style={styles.saveDetailsText}>SAVE DETAILS</Text>
            </Button>
          </ScaleAnimation>
        </View>
        <UploadImageModal
          showModal={uploadImageModal}
          setShowModal={() => setUploadImageModal(false)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  headerWrapper: {flex: 0.8},
  contentWrapper: {flex: 8},
  scrollStyle: {
    backgroundColor: 'white',
    paddingVertical: hp(1),
  },
  imageViewWrapper: {
    height: hp(27),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  avatarWrapper: {
    padding: hp(0.2),
    position: 'relative',
    borderRadius: hp(1),
  },
  avatarImage: {
    width: hp(18),
    height: hp(18),
    borderRadius: hp(9),
    borderColor: '#b9b9b9',
    borderWidth: hp(0.1),
  },
  imageButton: {position: 'absolute', right: hp(1)},
  cameraImage: {width: hp(5), height: hp(5)},
  inputRowWrapper: {paddingHorizontal: hp(3)},
  inputStyle: {
    fontSize: hp(1.6),
    fontWeight: '300',
    fontFamily: 'Poppins-Light',
    paddingVertical: hp(1),
  },
  inputTitleText: {
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Medium',
    paddingVertical: hp(1),
    color: 'black',
  },
  changeButton: {paddingHorizontal: hp(1)},
  changeButtonText: {
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Medium',
    color: '#fb7ca0',
  },
  toggleButtonContainer: {
    paddingHorizontal: hp(3),
    display: 'flex',
    flexDirection: 'row',
  },
  toggleButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingVertical: hp(1.5),
  },
  toggleButtonText: {
    fontSize: hp(1.8),
    fontWeight: '600',
    fontFamily: 'Raleway-Medium',
  },
  changePasswordButton: {
    backgroundColor: 'white',
    paddingVertical: hp(1.5),
    borderRadius: hp(0.3),
    borderWidth: hp(0.1),
    borderColor: '#e6e6e6',
  },
  changePasswordButtonText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.8),
    color: 'black',
  },
  saveDetailsButtonWrapper: {
    paddingHorizontal: hp(3),
    paddingVertical: hp(2),
    borderTopColor: '#e6e6e6',
    borderTopWidth: hp(0.2),
    backgroundColor: 'white',
  },
  saveDetailsText: {
    textAlign: 'center',
    fontFamily: 'Raleway-Medium',
    fontSize: hp(1.9),
    fontWeight: '600',
    color: 'white',
  },
  saveDetailsButton: {
    backgroundColor: '#fb7ca0',
    paddingVertical: hp(1.8),
    borderRadius: hp(0.5),
  },
});

export default EditProfileScreen;
