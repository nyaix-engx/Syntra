import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, ScrollView, Image} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar, Input} from '@ui-kitten/components';
import Octicons from 'react-native-vector-icons/Octicons';
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

  const CalendarIcon = props => (
    <Octicons
      name="calendar"
      size={hp(2.3)}
      style={{paddingHorizontal: hp(1), paddingVertical: hp(1)}}
    />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="EDIT PROFILE" />
      </View>
      <View style={{flex: 8}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{
            backgroundColor: 'white',
            paddingVertical: hp(1),
          }}>
          <View
            style={{
              height: hp(20),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: hp(2),
            }}>
            <View
              style={{
                padding: hp(0.2),
                position: 'relative',
                borderRadius: hp(1),
              }}>
              <Avatar
                ImageComponent={() => (
                  <Image
                    style={{
                      width: hp(15),
                      height: hp(15),
                      borderRadius: hp(7.5),
                    }}
                    source={require('../../Assets/Images/avatar.jpeg')}
                  />
                )}
              />
              <Pressable
                onPress={() => setUploadImageModal(true)}
                style={{position: 'absolute', right: 0}}>
                <Image
                  source={require('../../Assets/Images/camera.png')}
                  style={{width: hp(5), height: hp(5)}}
                />
              </Pressable>
            </View>
          </View>
          <View style={{paddingHorizontal: hp(3)}}>
            <Input
              value={mobile}
              disabled
              textStyle={{
                fontSize: hp(1.6),
                fontWeight: '300',
                fontFamily: 'Poppins-Light',
                paddingVertical: hp(1),
              }}
              label={() => (
                <Text
                  style={{
                    fontSize: hp(1.7),
                    fontFamily: 'Poppins-Medium',
                    paddingVertical: hp(1),
                    color: 'black',
                  }}>
                  MOBILE NUMBER
                </Text>
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
                  style={{paddingHorizontal: hp(1)}}>
                  <Text
                    style={{
                      fontSize: hp(1.7),
                      fontFamily: 'Poppins-Medium',
                      color: '#fb7ca0',
                    }}>
                    CHANGE
                  </Text>
                </Pressable>
              )}
            />
          </View>
          <View style={{paddingHorizontal: hp(3)}}>
            <Input
              value={name}
              textStyle={{
                paddingVertical: hp(1),
                fontSize: hp(1.6),
                fontWeight: '300',
                fontFamily: 'Poppins-Light',
              }}
              label={() => (
                <Text
                  style={{
                    fontSize: hp(1.7),
                    fontFamily: 'Poppins-Medium',
                    paddingVertical: hp(1),
                    color: 'black',
                  }}>
                  FULL NAME
                </Text>
              )}
              placeholder="Place your Text"
              onChangeText={nextValue => setName(nextValue)}
            />
          </View>
          <View style={{paddingHorizontal: hp(3), marginBottom: hp(2)}}>
            <Input
              value={email}
              textStyle={{
                paddingVertical: hp(1),
                fontSize: hp(1.6),
                fontWeight: '300',
                fontFamily: 'Poppins-Light',
              }}
              label={() => (
                <Text
                  style={{
                    fontSize: hp(1.7),
                    fontFamily: 'Poppins-Medium',
                    paddingVertical: hp(1),
                    color: 'black',
                  }}>
                  EMAIL
                </Text>
              )}
              onChangeText={nextValue => setEmail(nextValue)}
            />
          </View>
          <View
            style={{
              paddingHorizontal: hp(3),
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Pressable
              onPress={() => setGender('Male')}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                paddingVertical: hp(1.5),
                borderTopLeftRadius: hp(0.5),
                borderBottomLeftRadius: hp(0.5),
                backgroundColor: gender === 'Male' ? '#fb7ca0' : '#ededed',
              }}>
              <Text
                style={{
                  color: gender === 'Male' ? 'white' : '#fb7ca0',
                  fontSize: hp(1.8),
                  fontWeight: '600',
                  fontFamily: 'Raleway-Medium',
                }}>
                MALE
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setGender('Female')}
              style={{
                display: 'flex',
                justifyContent: 'center',
                borderTopRightRadius: hp(0.5),
                borderBottomRightRadius: hp(0.5),
                alignItems: 'center',
                flex: 1,
                backgroundColor: gender === 'Female' ? '#fb7ca0' : '#ededed',
              }}>
              <Text
                style={{
                  fontSize: hp(1.8),
                  fontWeight: '600',
                  fontFamily: 'Raleway-Medium',
                  color: gender === 'Female' ? 'white' : '#fb7ca0',
                }}>
                FEMALE
              </Text>
            </Pressable>
          </View>
          <View style={{paddingHorizontal: hp(3), marginBottom: hp(2)}}>
            <Input
              value={location}
              textStyle={{
                paddingVertical: hp(1),
                fontWeight: '300',
                fontSize: hp(1.6),
                fontFamily: 'Poppins-Light',
              }}
              label={() => (
                <Text
                  style={{
                    fontSize: hp(1.7),
                    fontFamily: 'Poppins-Medium',
                    paddingVertical: hp(1),
                    color: 'black',
                  }}>
                  LOCATION
                </Text>
              )}
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
              style={{
                backgroundColor: 'white',
                paddingVertical: hp(1.5),
                borderRadius: hp(0.3),
                borderWidth: hp(0.1),
                borderColor: '#e6e6e6',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Poppins-Medium',
                  fontSize: hp(1.8),
                  color: 'black',
                }}>
                CHANGE PASSWORD
              </Text>
            </Pressable>
          </View>
        </ScrollView>
        <View
          style={{
            paddingHorizontal: hp(3),
            paddingVertical: hp(2),
            borderTopColor: '#e6e6e6',
            borderTopWidth: hp(0.2),
            backgroundColor: 'white',
          }}>
          <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
            <Button
              viewProps={{
                backgroundColor: '#fb7ca0',
                paddingVertical: hp(1.8),
                borderRadius: hp(0.5),
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Raleway-Medium',
                  fontSize: hp(1.9),
                  fontWeight: '600',
                  color: 'white',
                }}>
                SAVE DETAILS
              </Text>
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

export default EditProfileScreen;
