import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AddressRemoveModal from './AddressRemoveModal';
import {useNavigation} from '@react-navigation/native';

const AddressCard = props => {
  const navigation = useNavigation();
  const [showRemoveAddressModal, setShowRemoveAddressModal] = useState(false);
  const swapArray = (arr, indexA, indexB) => {
    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
  };
  const handlePress = () => {
    const newArray = props.userAddresses;
    let defaultIndex, setDefaultIndex;
    newArray.forEach((item, index) => {
      if (item.default) {
        defaultIndex = index;
        newArray[index].default = false;
      }
      if (item.id === props.data.id) {
        setDefaultIndex = index;
        newArray[index].default = true;
      }
    });
    swapArray(newArray, defaultIndex, setDefaultIndex);
    props.addressRef.current.animateNextTransition();
    props.setUserAddresses([...newArray]);
  };

  return (
    <View
      style={{
        paddingTop: hp(2),
        paddingHorizontal: hp(2),
        paddingBottom: hp(1),
        backgroundColor: 'white',
        borderRadius: hp(0.5),
        borderColor: '#cfcfcf',
        borderWidth: hp(0.1),
        marginBottom: hp(2),
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: hp(2),
        }}>
        <Text
          style={{
            fontSize: hp(1.8),
            fontFamily: 'Poppins-Medium',
            color: 'black',
          }}>
          {props.data.name}
        </Text>
        <View
          style={{
            backgroundColor: '#cfcfcf',
            paddingHorizontal: hp(1),
            paddingVertical: hp(0.5),
            borderRadius: hp(2),
          }}>
          <Text
            style={{
              fontSize: hp(1.6),
              fontFamily: 'Poppins-Medium',
              color: 'black',
            }}>
            {props.data.type}
          </Text>
        </View>
      </View>
      <View style={{marginBottom: hp(2)}}>
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: hp(1.7),
            color: 'black',
          }}>
          {props.data.address}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: hp(1.7),
            color: 'black',
          }}>
          {props.data.city} - {props.data.pincode}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: hp(1.7),
            marginBottom: hp(2),
            color: 'black',
          }}>
          {props.data.state}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontSize: hp(1.7),
              color: 'black',
            }}>
            Mobile: {props.data.mobile}
          </Text>
          {!props.data.default ? (
            <Pressable onPress={handlePress}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: hp(1.7),
                  color: '#34a880',
                }}>
                SET AS DEFAULT
              </Text>
            </Pressable>
          ) : (
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: hp(1.7),
                color: '#fb7ca0',
              }}>
              DEFAULT
            </Text>
          )}
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            borderTopColor: '#cfcfcf',
            borderTopWidth: hp(0.1),
            paddingTop: hp(1),
          }}>
          <Pressable
            onPress={() =>
              navigation.navigate('AddNewAddressPage', {
                type: 'EDIT',
                data: props.data,
                index: props.index,
                userAddresses: props.userAddresses,
              })
            }
            style={{
              flex: 1,
              borderRightColor: '#cfcfcf',
              borderRightWidth: hp(0.05),
              paddingVertical: hp(1),
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Raleway-Medium',
                fontWeight: '600',
                fontSize: hp(1.9),
                color: 'blue',
              }}>
              EDIT
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setShowRemoveAddressModal(true)}
            style={{
              flex: 1,
              borderLeftColor: '#cfcfcf',
              borderLeftWidth: hp(0.05),
              paddingVertical: hp(1),
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Raleway-Medium',
                fontWeight: '600',
                fontSize: hp(1.9),
                color: 'black',
              }}>
              REMOVE
            </Text>
          </Pressable>
          <AddressRemoveModal
            heading="Remove Address"
            text="Are you sure you want to delete this address?"
            confirmButtonText="REMOVE"
            cancelButtonText="CANCEL"
            showModal={showRemoveAddressModal}
            setShowModal={() => setShowRemoveAddressModal(false)}
            items={props.userAddresses}
            setItems={props.setUserAddresses}
            index={props.index}
            scrollY={props.scrollY}
            scrollRef={props.scrollRef}
            screenRef={props.addressRef}
          />
        </View>
      </View>
    </View>
  );
};

export default AddressCard;
