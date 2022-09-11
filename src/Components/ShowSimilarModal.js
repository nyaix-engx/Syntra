import React from 'react';
import Modal from 'react-native-modal';
import {View, Text, ScrollView, Pressable, Platform} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SimilarStylesCard from './WishlistScreenComps/SimilarStylesCard';

const ShowSimilarModal = props => {
  const insets = useSafeAreaInsets();
  return (
    <Modal
      isVisible={props.showModal}
      setShowModal={props.setShowModal}
      onBackdropPress={props.setShowModal}
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        paddingVertical:0,
        margin: 0,
      }}>
       <View style={{backgroundColor:"white",paddingBottom:Platform.OS==='ios'? insets.bottom:hp(4)}}>
          <View
            style={{
              paddingVertical: hp(2.1),
              paddingHorizontal: hp(2),
            }}>
            <Text
              style={{
                fontFamily: 'Raleway-Medium',
                color: 'grey',
                fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(1.7),
              }}>
              SIMILAR STYLES
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: hp(1.5),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SimilarStylesCard />
            <SimilarStylesCard />
            <SimilarStylesCard />
            <SimilarStylesCard />
            <SimilarStylesCard />
          </ScrollView>
        </View>
    </Modal>
  );
};

export default ShowSimilarModal;
