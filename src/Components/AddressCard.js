import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

import AddressRemoveModal from './AddressRemoveModal';

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
    props.setUserAddresses([...newArray]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardHeaderView}>
        <Text style={styles.headerName}>{props.data.name}</Text>
        <View style={styles.addressTypeView}>
          <Text style={styles.addressTypeText}>{props.data.type}</Text>
        </View>
      </View>
      <View style={styles.addressView}>
        <Text style={styles.addressText}>{props.data.address}</Text>
        <Text style={styles.addressText}>
          {props.data.city} - {props.data.pincode}
        </Text>
        <Text style={styles.stateText}>{props.data.state}</Text>
        <View style={styles.defaultView}>
          <Text style={styles.addressText}>Mobile: {props.data.mobile}</Text>
          {!props.data.default ? (
            <Pressable onPress={handlePress}>
              <Text style={styles.setDefaultText}>SET AS DEFAULT</Text>
            </Pressable>
          ) : (
            <Text style={styles.defaultText}>DEFAULT</Text>
          )}
        </View>
      </View>
      <View style={styles.ctaView}>
        <Pressable
          onPress={() =>
            navigation.navigate('AddNewAddressPage', {
              type: 'EDIT',
              data: props.data,
              index: props.index,
              userAddresses: props.userAddresses,
            })
          }
          style={styles.ctaButton}>
          <Text style={styles.editText}>EDIT</Text>
        </Pressable>
        <Pressable
          onPress={() => setShowRemoveAddressModal(true)}
          style={styles.ctaButton}>
          <Text style={styles.removeText}>REMOVE</Text>
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
  cardHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  headerName: {
    fontSize: hp(1.8),
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  addressTypeView: {
    backgroundColor: '#cfcfcf',
    paddingHorizontal: hp(1),
    paddingVertical: hp(0.5),
    borderRadius: hp(2),
  },
  addressTypeText: {
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  addressView: {marginBottom: hp(2)},
  addressText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.7),
    color: 'black',
  },
  stateText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.7),
    marginBottom: hp(2),
    color: 'black',
  },
  defaultView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  setDefaultText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.7),
    color: '#34a880',
  },
  defaultText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(1.7),
    color: '#fb7ca0',
  },
  ctaView: {
    flexDirection: 'row',
    borderTopColor: '#cfcfcf',
    borderTopWidth: hp(0.1),
    paddingTop: hp(1),
  },
  ctaButton: {
    flex: 1,
    borderRightColor: '#cfcfcf',
    borderRightWidth: hp(0.05),
    paddingVertical: hp(1),
  },
  editText: {
    textAlign: 'center',
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    fontSize: hp(1.9),
    color: 'blue',
  },
  removeText: {
    textAlign: 'center',
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    fontSize: hp(1.9),
    color: 'black',
  },
});

export default AddressCard;
