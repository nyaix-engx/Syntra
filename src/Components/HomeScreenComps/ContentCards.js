import React from 'react';
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Layout} from '@ui-kitten/components';

const ContentCards = props => {
  return (
    <Pressable style={{height: props.height}}>
      <Layout level="2" style={styles.card}>
        {props.header && <View style={styles.headerView}>{props.header}</View>}
        <Image source={props.data.img} style={styles.imageStyle} />
        {props.footer && (
          <View style={styles.footerTextView}>
            <Text style={styles.footerText}>{props.data.footerText}</Text>
          </View>
        )}
      </Layout>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: '#cdd6e3',
    borderWidth: hp(0.025),
    marginHorizontal: hp(1),
  },
  headerView: {
    height: hp(5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    flex: 1,
    height: hp(20),
    width: hp(25),
    resizeMode: 'cover',
    aspectRatio: 1.5,
  },
  footerTextView: {
    height: hp(6),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.6),
    color: 'black',
  },
});

export default ContentCards;
