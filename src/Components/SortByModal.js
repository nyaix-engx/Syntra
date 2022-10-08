import React from 'react';
import Modal from 'react-native-modal';
import {View, Text, Pressable, Platform} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {List, ListItem, Divider} from '@ui-kitten/components';
import {sortData} from '../Utils/arrays';

const SortByModal = props => {
  const insets = useSafeAreaInsets();
  const renderItem = ({item, index}) => (
    <ListItem
      key={`index_${index}`}
      style={{
        height: Platform.OS === 'android' ? hp(7) : hp(7),
        paddingHorizontal: hp(2.5),
      }}
      title={props => (
        <Text
          {...props}
          style={{
            fontSize: hp(1.7),
            fontFamily: 'Poppins-Light',
            color: 'black',
          }}>
          {item.title}
        </Text>
      )}
    />
  );
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
          height: hp(6),
          backgroundColor: 'white',
          borderTopLeftRadius: hp(1),
          borderTopRightRadius: hp(1),
        }}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 2,
              display: 'flex',
              justifyContent: 'center',
              paddingHorizontal: hp(2.5),
            }}>
            <Text
              style={{
                fontSize: hp(2),
                fontFamily: 'Raleway-Medium',
                fontWeight: '600',
                color: 'black',
              }}>
              SORT BY
            </Text>
          </View>
          <View
            style={{
              flex: 4,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '75%',
              }}>
              <Pressable
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: hp(2),
                    fontFamily: 'Raleway-Medium',
                    fontWeight: '600',
                    color: 'black',
                  }}>
                  ASC
                </Text>
                <FontAwesome5 name="sort-alpha-down" size={hp(2.3)} />
              </Pressable>
              <Pressable
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: hp(2),
                    fontFamily: 'Raleway-Medium',
                    color: 'black',
                  }}>
                  DESC
                </Text>
                <FontAwesome5 name="sort-alpha-up" size={hp(2.3)} />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          height: hp(35),
          backgroundColor: 'white',
          paddingBottom: insets.bottom,
        }}>
        <List
          style={{flex: 1, backgroundColor: 'white'}}
          data={sortData}
          renderItem={renderItem}
          ItemSeparatorComponent={Divider}
          bounces={false}
        />
      </View>
    </Modal>
  );
};

export default SortByModal;
