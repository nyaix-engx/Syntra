import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Octicons from 'react-native-vector-icons/Octicons';

const CustomerReview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.commentText}>
        Fitting is kind of slim fit and is very good. Cloth quality is real good
        for its price. Color is nice and bright. Might look a bit fade in my
        uploaded picture. But actual color is exactly as per the advertised
        modal.
      </Text>
      <View style={styles.itemSizeView}>
        <Text style={styles.itemSizeText}>Size bought:</Text>
        <Text style={styles.itemSize}>M</Text>
      </View>
      <View style={styles.fitView}>
        <View style={styles.fitTextView}>
          <Text style={styles.fitText}>Fit:</Text>
          <Text style={styles.fitTextValue}>As Expected</Text>
        </View>
        <View style={styles.fitTextView}>
          <Text style={styles.fitText}>Length:</Text>
          <Text style={styles.fitTextValue}>As Expected</Text>
        </View>
      </View>
      <View style={styles.commentFooter}>
        <View style={styles.footerLeftView}>
          <View style={styles.nameView}>
            <Text style={styles.nameText}>Manav</Text>
          </View>
          <View style={styles.dateView}>
            <Text style={styles.dateText}>20 Jan, 2021</Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          <View style={styles.thumpsupView}>
            <Octicons
              name="thumbsup"
              size={hp(2.5)}
              style={styles.thumpsupIcon}
            />
            <Text style={styles.icontext}>245</Text>
          </View>
          <View style={styles.thumbsDownView}>
            <Octicons
              name="thumbsdown"
              size={hp(2.5)}
              style={styles.thumpsupIcon}
            />
            <Text style={styles.icontext}>100</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(2.5),
    borderBottomWidth: hp(0.1),
    borderBottomColor: '#c9c9c9',
  },
  commentText: {
    fontSize: hp(1.6),
    textAlign: 'justify',
    fontFamily: 'Poppins-Light',
    color: 'black',
    marginBottom: hp(1),
  },
  itemSizeView: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#d6d6d6',
    alignSelf: 'flex-start',
    paddingHorizontal: hp(1),
    paddingVertical: hp(0.5),
    borderRadius: hp(0.2),
    marginBottom: hp(2),
  },
  itemSizeText: {
    fontSize: hp(1.5),
    fontFamily: 'Poppins-Light',
    fontWeight: 'bold',
    marginRight: hp(0.5),
    color: 'black',
  },
  itemSize: {fontSize: hp(1.5), fontFamily: 'Poppins-Medium'},
  fitView: {marginBottom: hp(2)},
  fitTextView: {display: 'flex', flexDirection: 'row', alignItems: 'center'},
  fitText: {
    fontFamily: 'Poppins-Light',
    fontWeight: 'bold',
    fontSize: hp(1.7),
    color: 'black',
    marginRight: hp(1),
  },
  fitTextValue: {fontFamily: 'Poppins-Light', fontSize: hp(1.7)},
  commentFooter: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  footerLeftView: {
    flex: 1.5,
    display: 'flex',
    flexDirection: 'row',
  },
  nameView: {
    borderRightWidth: hp(0.1),
    borderColor: 'grey',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: hp(14),
  },
  nameText: {
    paddingRight: hp(1),
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  dateView: {
    borderLeftWidth: hp(0.1),
    borderColor: 'grey',
    display: 'flex',
    justifyContent: 'center',
  },
  dateText: {
    paddingLeft: hp(1),
    fontSize: hp(1.6),
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  rightSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  thumpsupView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: hp(1),
  },
  icontext: {
    fontFamily: 'Poppins-Light',
    fontSize: hp(1.6),
    color: 'black',
  },
  thumpsupIcon: {marginRight: hp(1)},
  thumbsDownView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomerReview;
