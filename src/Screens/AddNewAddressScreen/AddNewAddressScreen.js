import React, {useState} from 'react';
import {View, Text, ScrollView, Platform, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Input, Radio, RadioGroup, CheckBox} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native-safe-area-context';

import BackButtonTitle from '../../Components/BackButtonTitle';
import ScaleAnimation from '../../Components/ScaleAnimation';
import Button from '../../Components/Button';

const AddNewAddressScreen = ({navigation, route}) => {
  const [name, setName] = useState(
    route.params.type === 'EDIT' ? route.params.data.name : '',
  );
  const [mobile, setMobile] = useState(
    route.params.type === 'EDIT' ? route.params.data.mobile : '',
  );
  const [pincode, setPincode] = useState(
    route.params.type === 'EDIT' ? route.params.data.pincode : '',
  );
  const [state, setState] = useState(
    route.params.type === 'EDIT' ? route.params.data.state : '',
  );
  const [address, setAddress] = useState(
    route.params.type === 'EDIT' ? route.params.data.address : '',
  );
  const [city, setCity] = useState(
    route.params.type === 'EDIT' ? route.params.data.district : '',
  );
  const [selectedIndex, setSelectedIndex] = useState(
    route.params.type === 'EDIT'
      ? route.params.data.type === 'HOME'
        ? 0
        : 1
      : 0,
  );
  const [isDefault, setIsDefault] = useState(
    route.params.type === 'EDIT' ? route.params.data.default : false,
  );
  const swapArray = (arr, indexA, indexB) => {
    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
  };
  const handleSave = () => {
    if (route.params.type === 'EDIT') {
      const newArray = route.params.userAddresses;
      newArray.forEach((item, index) => {
        if (index === route.params.index) {
          item.name = name;
          item.mobile = mobile;
          item.pincode = pincode;
          item.state = state;
          item.address = address;
          item.city = city;
          item.type = selectedIndex === 0 ? 'HOME' : 'OFFICE';
          item.default = isDefault;
        }
      });
      if (newArray[route.params.index].default && route.params.index !== 0) {
        newArray[0].default = false;
        swapArray(newArray, 0, route.params.index);
      }
      navigation.navigate({
        name: 'AddressPage',
        params: {userAddresses: newArray},
        merge: true,
      });
    } else {
      navigation.navigate({
        name: 'AddressPage',
        params: {
          userAddresses: route.params.userAddresses.concat([
            {
              name,
              mobile,
              pincode,
              state,
              address,
              city,
              type: selectedIndex === 0 ? 'HOME' : 'OFFICE',
              default: isDefault,
            },
          ]),
        },
        merge: true,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <BackButtonTitle
          title={route.params?.data ? 'EDIT ADDRESS' : 'ADD NEW ADDRESS'}
        />
      </View>
      <View style={styles.contentWrapper}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={styles.scrollViewStyle}
          contentContainerStyle={styles.scrollViewContentStyle}>
          <View style={styles.contentSections}>
            <Input
              value={name}
              style={styles.nameInputStyle}
              textStyle={styles.inputTextStyle}
              placeholder="Name"
              onChangeText={nextValue => setName(nextValue)}
            />
            <Input
              value={mobile}
              textStyle={styles.inputTextStyle}
              placeholder="Mobile"
              onChangeText={nextValue => setMobile(nextValue)}
            />
          </View>
          <View style={styles.contentSections}>
            <View style={styles.contentSectionContainer}>
              <Input
                style={styles.inputWidthStyle}
                value={pincode}
                textStyle={styles.inputTextStyle}
                placeholder="Pincode"
                onChangeText={nextValue => setPincode(nextValue)}
              />
              <Input
                style={styles.inputWidthStyle}
                value={state}
                textStyle={styles.inputTextStyle}
                placeholder="State"
                onChangeText={nextValue => setState(nextValue)}
              />
            </View>
            <Input
              value={address}
              style={{marginBottom: hp(2)}}
              textStyle={styles.inputTextStyle}
              placeholder="Address (House No, Building, Street, Area)"
              onChangeText={nextValue => setAddress(nextValue)}
            />
            <Input
              value={city}
              textStyle={styles.inputTextStyle}
              placeholder="City/ District"
              onChangeText={nextValue => setCity(nextValue)}
            />
          </View>
          <View style={styles.contentSections}>
            <View style={{marginBottom: hp(2)}}>
              <Text style={styles.typeAddress}>Type of Address</Text>
              <RadioGroup
                selectedIndex={selectedIndex}
                style={styles.radioStyle}
                onChange={index => setSelectedIndex(index)}>
                <Radio
                  style={{marginRight: hp(3)}}
                  children={() => <Text style={styles.optionText}>Home</Text>}
                />
                <Radio
                  children={() => <Text style={styles.optionText}>Office</Text>}
                />
              </RadioGroup>
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                checked={isDefault}
                disabled={
                  route.params.type === 'EDIT'
                    ? route.params.data.default
                    : false
                }
                onChange={nextChecked => setIsDefault(nextChecked)}
                children={() => (
                  <Text style={styles.defaultText}>
                    Make this as my default address
                  </Text>
                )}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonsWrapper}>
            <ScaleAnimation onPress={() => navigation.goBack()} scaleTo={0.9}>
              <Button viewProps={styles.cancelButton}>
                <Text style={styles.cancelButtontext}>CANCEL</Text>
              </Button>
            </ScaleAnimation>
          </View>
          <View style={styles.buttonsWrapper}>
            <ScaleAnimation onPress={handleSave} scaleTo={0.9}>
              <Button viewProps={styles.saveButton}>
                <Text style={styles.saveButtonText}>SAVE</Text>
              </Button>
            </ScaleAnimation>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  headerWrapper: {flex: 0.8},
  contentWrapper: {flex: 8},
  scrollViewStyle: {marginBottom: hp(2)},
  scrollViewContentStyle: {marginTop: hp(2)},
  contentSections: {
    paddingHorizontal: hp(2),
    paddingVertical: hp(4),
    marginBottom: hp(4),
    backgroundColor: 'white',
  },
  inputTextStyle: {
    paddingVertical: hp(1),
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Light',
    fontWeight: '300',
  },
  contentSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
  inputWidthStyle: {width: '48%'},
  typeAddress: {
    fontSize: hp(1.8),
    fontFamily: 'Poppins-Medium',
    marginBottom: hp(1),
    color: 'black',
  },
  buttonsWrapper: {width: '48%'},
  saveButton: {
    alignItems: 'center',
    paddingVertical: hp(1.8),
    backgroundColor: 'grey',
    borderRadius: hp(0.5),
  },
  saveButtonText: {
    textAlign: 'center',
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    color: 'white',
    fontSize: hp(1.9),
  },
  cancelButtontext: {
    textAlign: 'center',
    fontFamily: 'Raleway-Medium',
    fontSize: hp(1.9),
    fontWeight: '600',
    color: 'black',
  },
  cancelButton: {
    paddingVertical: hp(1.8),
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: hp(0.5),
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: hp(2),
    marginBottom: Platform.OS === 'android' ? hp(2) : hp(0),
    justifyContent: 'space-between',
  },
  defaultText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.7),
    paddingHorizontal: hp(1.5),
    color: 'black',
  },
  nameInputStyle: {marginBottom: hp(2)},
  optionText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.8),
    paddingHorizontal: hp(1),
    color: 'black',
  },
  checkboxWrapper: {
    paddingTop: hp(2),
    borderTopColor: '#d6d6d6',
    borderTopWidth: hp(0.1),
  },
  radioStyle: {flexDirection: 'row'},
});

export default AddNewAddressScreen;
