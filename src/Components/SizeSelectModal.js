import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Number from './number';
import {size} from '../Utils/arrays';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ScaleAnimation from './ScaleAnimation';
import Button from './Button';

const SizeSelectModal = props => {
  const insets = useSafeAreaInsets();
  const [tempSize, setTempSize] = useState(props.size);
  const getNumber = () => {
    switch (props.type) {
      case 'type1':
        return size.type1.map((data, index) => {
          return (
            <Number
              key={index}
              size={data}
              selected={tempSize}
              setSelected={setTempSize}
            />
          );
        });
      case 'type2':
        return size.type2.map((data, index) => {
          return (
            <Number
              key={index}
              size={data}
              selected={tempSize}
              setSelected={setTempSize}
            />
          );
        });
    }
  };
  const handlePress = () => {
    props.setShowModal();
    props.setSize(tempSize);
  };
  return (
    <Modal
      isVisible={props.showModal}
      setShowModal={props.setShowModal}
      onBackdropPress={props.setShowModal}
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 0,
        margin: 0,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          paddingTop: hp(2),
          paddingHorizontal: hp(2),
          borderTopRightRadius: hp(1),
          borderTopLeftRadius: hp(1),
        }}>
        <View
          style={{
            paddingHorizontal: hp(1),
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'Raleway-Medium',
              fontSize: hp(1.8),
              fontWeight: '600',
              marginBottom: hp(2),
              color: 'black',
            }}>
            SELECT SIZE
          </Text>
          <Pressable onPress={props.setShowModal} style={{marginBottom: hp(2)}}>
            <Fontisto
              name="plus-a"
              size={hp(2.5)}
              style={{transform: [{rotateZ: '45deg'}], padding: hp(0.8)}}
            />
          </Pressable>
        </View>
        <View style={{marginBottom: hp(2)}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}>
            {getNumber()}
          </ScrollView>
        </View>
        <ScaleAnimation onPress={handlePress} scaleTo={0.9}>
          <Button
            viewProps={{
              backgroundColor: '#fb7ca0',
              paddingVertical: hp(1.4),
              borderRadius: hp(0.5),
              marginBottom: Platform.OS === 'ios' ? insets.bottom : hp(4),
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: hp(1.9),
                fontFamily: 'Raleway-Medium',
                color: 'white',
                fontWeight: '600',
              }}>
              DONE
            </Text>
          </Button>
        </ScaleAnimation>
      </View>
    </Modal>
  );
};

export default SizeSelectModal;
