import React from 'react';
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Layout} from '@ui-kitten/components';
// import HM from '../../Assets/Svg/hm.svg';

const ContentCards = props => {
  return (
    <Pressable style={{height: props.height}}>
      <Layout level="2" style={styles.card}>
        {props.header && (
          <View
            style={{
              height: hp(5),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <HM width={hp(6)} height={hp(6)} /> */}
          </View>
        )}
        <Image
          source={props.data.img}
          style={{
            flex: 1,
            height: hp(20),
            width: hp(25),
            resizeMode: 'cover',
            aspectRatio: 1.5,
          }}
        />
        {props.footer && (
          <View
            style={{
              height: hp(6),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: hp(1.6),
                color: 'black',
              }}>
              {props.data.footerText}
            </Text>
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
});

export default ContentCards;
