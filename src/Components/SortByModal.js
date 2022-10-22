import React from 'react';
import Modal from 'react-native-modal';
import {View, Text, Pressable, Platform, StyleSheet} from 'react-native';
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
      style={styles.listItemStyle}
      title={props => (
        <Text {...props} style={styles.listTextStyle}>
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
      style={styles.modalStyle}>
      <View style={styles.modalContentStyle}>
        <View style={styles.modalHeaderView}>
          <View style={styles.sortByView}>
            <Text style={styles.sortByText}>SORT BY</Text>
          </View>
          <View style={styles.headerRightSection}>
            <View style={styles.headerButtonsWrapper}>
              <Pressable style={styles.ascButton}>
                <Text style={styles.buttonText}>ASC</Text>
                <FontAwesome5
                  name="sort-alpha-down"
                  size={hp(2.3)}
                  color="black"
                />
              </Pressable>
              <Pressable style={styles.descButton}>
                <Text style={styles.buttonText}>DESC</Text>
                <FontAwesome5
                  name="sort-alpha-up"
                  size={hp(2.3)}
                  color="black"
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.listContentView,
          {
            paddingBottom: insets.bottom,
          },
        ]}>
        <List
          style={styles.listStyle}
          data={sortData}
          renderItem={renderItem}
          ItemSeparatorComponent={Divider}
          bounces={false}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 0,
    margin: 0,
  },
  modalContentStyle: {
    height: hp(6),
    backgroundColor: 'white',
    borderTopLeftRadius: hp(1),
    borderTopRightRadius: hp(1),
  },
  modalHeaderView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  sortByView: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: hp(2.5),
  },
  sortByText: {
    fontSize: hp(2),
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    color: 'black',
  },
  headerRightSection: {
    flex: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerButtonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '75%',
  },
  ascButton: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: hp(2),
    fontFamily: 'Raleway-Medium',
    fontWeight: '600',
    color: 'black',
  },
  descButton: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContentView: {
    height: hp(35),
    backgroundColor: 'white',
  },
  listStyle: {flex: 1, backgroundColor: 'white'},
  listItemStyle: {
    height: Platform.OS === 'android' ? hp(7) : hp(7),
    paddingHorizontal: hp(2.5),
  },
  listTextStyle: {
    fontSize: hp(1.7),
    fontFamily: 'Poppins-Light',
    color: 'black',
  },
});

export default SortByModal;
