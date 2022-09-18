import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import FadingBackScroll from '../../Components/FadingbackScroll';
import {useNavigation} from '@react-navigation/native';
import FadingBackScrollCard from '../../Components/FadingBackScrollCard';
import {Avatar, ListItem, List, Input} from '@ui-kitten/components';
import {interestArray} from '../../Utils/arrays';
import Fontisto from 'react-native-vector-icons/Fontisto';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();

  const brandsArray = [
    {
      img: require('../../Assets/Images/scroll1.jpg'),
      footerText: 'Upto 30% Off',
    },
    {
      img: require('../../Assets/Images/scroll2.jpg'),
      footerText: 'Upto 30% Off',
    },
    {
      img: require('../../Assets/Images/scroll3.jpg'),
      footerText: 'Upto 30% Off',
    },
  ];
  const renderItem = ({item, index}) => (
    <ListItem
      style={{paddingHorizontal: hp(2)}}
      title={() => (
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: hp(1.6),
            paddingHorizontal: hp(1),
            color: 'black',
          }}>
          {item.brand}
        </Text>
      )}
      description={() => (
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: hp(1.55),
            paddingHorizontal: hp(1),
            color: 'grey',
          }}>
          {item.category}
        </Text>
      )}
      accessoryLeft={() => (
        <Avatar
          ImageComponent={() => (
            <Image
              style={{width: hp(6), height: hp(6), borderRadius: hp(3)}}
              source={item.image}
            />
          )}
        />
      )}
      accessoryRight={() => <Fontisto size={hp(1.6)} name="angle-right" />}
    />
  );

  const getFooter = () => {
    return (
      <>
        <FadingBackScroll
          style={{marginBottom: hp(2)}}
          height={hp(34)}
          headingText={'ITEMS YOU HAVE VIEWED'}
          backgroundImage={require('../../Assets/Images/background.jpg')}
          coverText="RECENTLY VIEWED"
          cardComponent={FadingBackScrollCard}
          array={brandsArray}
        />
        <FadingBackScroll
          style={{marginBottom: hp(2)}}
          height={hp(34)}
          headingText={'RECOMMENDED FOR YOU'}
          backgroundImage={require('../../Assets/Images/background.jpg')}
          coverText="NEW ARRIVALS"
          cardComponent={FadingBackScrollCard}
          array={brandsArray}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          height: hp(8),
          display: 'flex',
          backgroundColor: 'white',
          flexDirection: 'row',
          borderBottomColor: '#c7c7c7',
          borderBottomWidth: hp(0.1),
          alignItems: 'center',
        }}>
        <View style={styles.titleHeader}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Input
              placeholder="Search for bands & products"
              accessoryLeft={() => (
                <Pressable
                  onPress={() => navigation.goBack()}
                  style={{
                    width: hp(5),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Feather
                    name="arrow-left"
                    size={hp(2.8)}
                    style={{color: '#363636'}}
                  />
                </Pressable>
              )}
              value={searchTerm}
              style={{
                width: '100%',
                borderColor: 'white',
                backgroundColor: 'white',
              }}
              textStyle={{
                fontSize: Platform.OS === 'android' ? hp(1.8) : hp(1.7),
                paddingVertical: hp(1.5),
                fontFamily: 'Poppins-Light',
                fontWeight: '300',
              }}
              onChangeText={nextValue => setSearchTerm(nextValue)}
            />
          </View>
        </View>
      </View>
      <List
        style={styles.container}
        bounces={false}
        data={interestArray}
        renderItem={renderItem}
        ListHeaderComponent={
          <View
            style={{
              paddingHorizontal: hp(2),
              height: hp(7),
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'white',
            }}>
            <Text
              style={{
                fontFamily: 'Raleway-Medium',
                fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(1.7),
                fontWeight: '600',
                color: '#363636',
              }}>
              YOU MAY BE INTERESTED IN
            </Text>
          </View>
        }
        ListFooterComponent={getFooter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleHeader: {
    display: 'flex',
    flexDirection: 'row',
    flex: 8,
    backgroundColor: 'white',
  },
});

export default SearchScreen;
