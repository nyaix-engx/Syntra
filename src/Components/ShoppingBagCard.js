import React, {useState} from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.contentView}>
        <View style={styles.imageView}>
          <Image source={data.image} style={styles.image} />
        </View>
        <View style={styles.rightSection}>
          <View style={styles.productDataView}>
            <Text style={styles.brandTitle}>{data.company}</Text>
            <Text style={styles.productDesc}>{data.title}</Text>
            <Text style={styles.soldBy}>Sold By: BEST UNITED PVT LTD</Text>
          </View>
          <View style={styles.dropdownWrapper}>
            <Pressable
              onPress={() => setShowSizeModal(true)}
              style={styles.sizeButton}>
              <View style={styles.sizeButtonView}>
                <Text style={styles.sizeButtonText}>Size : {size}</Text>
                <Ionicons
                  name="caret-down-sharp"
                  size={hp(1.5)}
                  style={styles.caretIcon}
                />
              </View>
            </Pressable>
            <Pressable
              onPress={() => setShowQuantityModal(true)}
              style={styles.sizeButton}>
              <View style={styles.sizeButtonView}>
                <Text style={styles.sizeButtonText}>Qty: {quantity}</Text>
                <Ionicons
                  name="caret-down-sharp"
                  size={hp(1.5)}
                  style={styles.caretIcon}
                />
              </View>
            </Pressable>
          </View>
          <View style={styles.priceView}>
            <Text style={styles.price}>${data.price}</Text>
          </View>
        </View>
      </View>
      <View style={styles.ctaWrapper}>
        <View style={styles.ctaContainer}>
          <Pressable onPress={handlePress} style={styles.removeButton}>
            <Text style={styles.removeButtonText}>REMOVE</Text>
          </Pressable>
          <Pressable style={styles.wishlistButton}>
            <Text style={styles.wishlistText}>MOVE TO WISHLIST</Text>
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

const styles = StyleSheet.create({
  container: {
    height: hp(30),
    paddingHorizontal: hp(1),
    backgroundColor: 'white',
    borderRadius: hp(0.5),
    borderColor: '#fb7ca0',
    borderWidth: hp(0.1),
    marginBottom: hp(1),
  },
  contentView: {
    flex: 5,
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: '#757575',
    borderBottomWidth: hp(0.05),
    paddingVertical: hp(1),
  },
  imageView: {flex: 4},
  image: {width: '100%', height: '100%'},
  rightSection: {
    flex: 6,
    paddingHorizontal: hp(1),
  },
  productDataView: {marginBottom: hp(1.5)},
  brandTitle: {
    fontSize: hp(1.8),
    fontFamily: 'Poppins-Medium',
    marginBottom: hp(0.3),
    color: 'black',
  },
  productDesc: {
    fontFamily: 'Poppins-Light',
    marginBottom: hp(0.3),
    fontSize: hp(1.5),
    color: 'black',
  },
  soldBy: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.5),
    color: 'grey',
  },
  dropdownWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: hp(1),
  },
  sizeButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: hp(0.5),
    paddingVertical: hp(0.5),
    borderRadius: hp(0.2),
    marginRight: hp(1),
    backgroundColor: '#d4d4d4',
  },
  sizeButtonView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sizeButtonText: {
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Medium',
    marginRight: hp(0.5),
    color: 'black',
  },
  caretIcon: {color: 'black'},
  priceView: {marginTop: hp(1)},
  price: {
    fontSize: hp(1.9),
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  ctaWrapper: {flex: 1.5, display: 'flex', flexDirection: 'row'},
  ctaContainer: {flex: 1, flexDirection: 'row', paddingVertical: hp(0.5)},
  removeButton: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#757575',
    borderRightWidth: hp(0.025),
  },
  removeButtonText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    fontSize: hp(1.6),
    color: '#000000',
  },
  wishlistButton: {
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: '#757575',
    borderLeftWidth: hp(0.025),
  },
  wishlistText: {
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    color: '#fb7ca0',
    fontSize: hp(1.6),
  },
});

export default ShoppingBagCard;
