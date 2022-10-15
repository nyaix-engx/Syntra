import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const BackButtonTitle = ({title}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.arrowLeftButton}>
          <Feather
            name="arrow-left"
            size={hp(2.8)}
            style={styles.arrowLeftIcon}
          />
        </Pressable>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    borderBottomColor: '#c7c7c7',
    borderBottomWidth: hp(0.1),
    backgroundColor: 'white',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  arrowLeftButton: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowLeftIcon: {color: '#363636'},
  titleView: {
    flex: 4,
    display: 'flex',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: hp(2.2),
    fontFamily: 'Raleway-Medium',
    fontWeight: '500',
    color: '#363636',
  },
});

export default BackButtonTitle;
