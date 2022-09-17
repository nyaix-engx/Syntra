import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SizeSelectModal from './SizeSelectModal';
import SelectQuantityModal from './SelectQuantityModal';
import ConfirmModal from './ConfirmModal';

const ShoppingBagCard = ({
  data,
  index,
  setShoppingItems,
  shoppingItems,
  scrollRef,
  scrollY,
}) => {
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [showQuantityModal, setShowQuantityModal] = useState(false);
  const [size, setSize] = useState(data.size);
  const [quantity, setQuantity] = useState(data.qty);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const handlePress = () => {
    setShowConfirmModal(true);
  };
  return (
    <View
      style={{
        height: hp(30),
        paddingHorizontal: hp(1),
        backgroundColor: 'white',
        borderRadius: hp(0.5),
        borderColor: '#fb7ca0',
        borderWidth: hp(0.1),
        marginBottom: hp(1),
      }}>
      <View
        style={{
          flex: 5,
          display: 'flex',
          flexDirection: 'row',
          borderBottomColor: '#757575',
          borderBottomWidth: hp(0.05),
          paddingVertical: hp(1),
        }}>
        <View style={{flex: 4}}>
          <Image source={data.image} style={{width: '100%', height: '100%'}} />
        </View>
        <View
          style={{
            flex: 6,
            paddingHorizontal: hp(1),
          }}>
          <View style={{marginBottom: hp(1.5)}}>
            <Text
              style={{
                fontSize: hp(1.8),
                fontFamily: 'Poppins-Medium',
                marginBottom: hp(0.3),
                color: 'black',
              }}>
              {data.company}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                marginBottom: hp(0.3),
                fontSize: hp(1.5),
                color: 'black',
              }}>
              {data.title}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: hp(1.5),
                color: 'grey',
              }}>
              Sold By: BEST UNITED PVT LTD
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: hp(1),
            }}>
            <Pressable
              onPress={() => setShowSizeModal(true)}
              style={{
                alignSelf: 'flex-start',
                paddingHorizontal: hp(0.5),
                paddingVertical: hp(0.5),
                borderRadius: hp(0.2),
                marginRight: hp(1),
                backgroundColor: '#d4d4d4',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: hp(1.6),
                    fontFamily: 'Poppins-Medium',
                    marginRight: hp(0.5),
                    color: 'black',
                  }}>
                  Size : {size}
                </Text>
                <Ionicons
                  name="caret-down-sharp"
                  size={hp(1.5)}
                  style={{color: 'black'}}
                />
              </View>
            </Pressable>
            <Pressable
              onPress={() => setShowQuantityModal(true)}
              style={{
                alignSelf: 'flex-start',
                paddingHorizontal: hp(0.5),
                paddingVertical: hp(0.5),
                borderRadius: hp(0.2),
                backgroundColor: '#d4d4d4',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: hp(1.6),
                    fontFamily: 'Poppins-Medium',
                    marginRight: hp(0.5),
                    color: 'black',
                  }}>
                  Qty: {quantity}
                </Text>
                <Ionicons
                  name="caret-down-sharp"
                  size={hp(1.5)}
                  style={{color: 'black'}}
                />
              </View>
            </Pressable>
          </View>
          <View>
            <Text
              style={{
                fontSize: hp(1.9),
                fontFamily: 'Poppins-Medium',
                color: 'black',
              }}>
              ${data.price}
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1.5, display: 'flex', flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'row', paddingVertical: hp(0.5)}}>
          <Pressable
            onPress={handlePress}
            style={{
              flex: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRightColor: '#757575',
              borderRightWidth: hp(0.025),
            }}>
            <Text
              style={{
                fontFamily: 'Raleway-Medium',
                fontWeight: '600',
                fontSize: hp(1.6),
                color: '#000000',
              }}>
              REMOVE
            </Text>
          </Pressable>
          <Pressable
            style={{
              flex: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderLeftColor: '#757575',
              borderLeftWidth: hp(0.025),
            }}>
            <Text
              style={{
                fontFamily: 'Raleway-Medium',
                fontWeight: '600',
                color: '#fb7ca0',
                fontSize: hp(1.6),
              }}>
              MOVE TO WISHLIST
            </Text>
          </Pressable>
        </View>
      </View>
      <SizeSelectModal
        showModal={showSizeModal}
        type={data.type}
        size={size}
        index={index}
        setSize={setSize}
        setShowModal={() => setShowSizeModal(false)}
      />
      <SelectQuantityModal
        showModal={showQuantityModal}
        quantity={quantity}
        setQuantity={setQuantity}
        setShowModal={() => setShowQuantityModal(false)}
      />
      <ConfirmModal
        heading="Remove Item"
        text="Are you sure you want to remove this item?"
        confirmButtonText="REMOVE"
        cancelButtonText="CANCEL"
        showModal={showConfirmModal}
        setShowModal={() => setShowConfirmModal(false)}
        items={shoppingItems}
        setItems={setShoppingItems}
        index={index}
        scrollY={scrollY}
        scrollRef={scrollRef}
        image={data.image}
      />
    </View>
  );
};

export default ShoppingBagCard;
