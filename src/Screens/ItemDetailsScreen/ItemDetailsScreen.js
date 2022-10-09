import React, {useState} from 'react';
import {View, Text, ScrollView, Pressable, Image} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import BackButtonTitle from '../../Components/BackButtonTitle';
import PaymentInformationModal from '../../Components/PaymentInformationModal';

const ItemDetailsScreen = ({navigation, route}) => {
  const {data} = route.params;
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="ITEM DETAILS" />
      </View>
      <View style={{flex: 8}}>
        <ScrollView
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <View style={{paddingVertical: hp(2)}}>
            <View
              style={{
                height: hp(25),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: '100%',
                  width: hp(25),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  resizeMode="contain"
                  source={data.productImage}
                  style={{height: '90%', width: '100%'}}
                />
              </View>
            </View>
            <View style={{paddingVertical: hp(1)}}>
              <View style={{paddingVertical: hp(0.2)}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Poppins-Medium',
                    fontSize: hp(2),
                    color: 'black',
                  }}>
                  {data.productTitle}
                </Text>
              </View>
              <View style={{paddingVertical: hp(0.2)}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Poppins-Light',
                    fontSize: hp(1.8),
                    flexWrap: 'wrap',
                    color: 'black',
                  }}>
                  {data.productSubtitle}
                </Text>
              </View>
              <View style={{paddingVertical: hp(0.2)}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Poppins-Light',
                    fontSize: hp(1.8),
                    color: 'black',
                  }}>
                  Size: {data.size}
                </Text>
              </View>
            </View>
            <View style={{paddingHorizontal: hp(2)}}>
              <View
                style={{
                  backgroundColor:
                    data.type === 'Delivered' ? '#34a880' : '#eb4034',
                  borderRadius: hp(0.5),
                  height: hp(9),
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: hp(7),
                    height: '100%',
                    justifyContent: 'center',
                    paddingVertical: hp(2),
                    alignItems: 'center',
                  }}>
                  <Image
                    resizeMethod="resize"
                    source={data.iconImage}
                    style={{width: '60%', height: '80%'}}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    paddingHorizontal: hp(1),
                  }}>
                  <View style={{paddingVertical: hp(0.2)}}>
                    <Text
                      style={{
                        fontSize: hp(1.8),
                        fontFamily: 'Poppins-Medium',
                        color: 'white',
                      }}>
                      {data.type}
                    </Text>
                  </View>
                  <View style={{paddingVertical: hp(0.2)}}>
                    <Text
                      style={{
                        fontSize: hp(1.6),
                        fontFamily: 'Poppins-Light',
                        color: 'white',
                      }}>
                      {data.date}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {data.type === 'Delivered' && (
            <View
              style={{
                paddingVertical: hp(3),
                backgroundColor: 'white',
                marginBottom: hp(2),
              }}>
              <View style={{paddingHorizontal: hp(2), marginBottom: hp(2)}}>
                <Text
                  style={{
                    fontFamily: 'Raleway-Medium',
                    fontSize: hp(1.9),
                    fontWeight: '600',
                    color: 'black',
                  }}>
                  Delivery Address
                </Text>
              </View>
              <View style={{paddingHorizontal: hp(2)}}>
                <View style={{flexDirection: 'row', marginBottom: hp(1)}}>
                  <View
                    style={{
                      paddingRight: hp(1.2),
                      borderRightWidth: hp(0.1),
                      borderRightColor: '#d6d6d6',
                    }}>
                    <Text
                      style={{
                        fontSize: hp(1.6),
                        fontFamily: 'Poppins-Light',
                        color: 'black',
                      }}>
                      Austin
                    </Text>
                  </View>
                  <View style={{paddingLeft: hp(1.2)}}>
                    <Text
                      style={{
                        fontSize: hp(1.6),
                        fontFamily: 'Poppins-Light',
                        color: 'black',
                      }}>
                      8956723790
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: hp(1.6),
                      fontFamily: 'Poppins-Light',
                      color: 'black',
                    }}>
                    B-3, Green Park, New Delhi-78
                  </Text>
                </View>
              </View>
            </View>
          )}

          {data.type !== 'Delivered' && (
            <View
              style={{
                paddingVertical: hp(2),
                backgroundColor: 'white',
                marginBottom: hp(2),
              }}>
              <View
                style={{
                  marginBottom: hp(1),
                  paddingHorizontal: hp(2),
                  borderBottomColor: '#d6d6d6',
                  borderBottomWidth: hp(0.1),
                  paddingBottom: hp(1.5),
                }}>
                <Text
                  style={{
                    fontFamily: 'Raleway-Medium',
                    fontSize: hp(1.9),
                    color: 'black',
                    fontWeight: '600',
                  }}>
                  Refund Details
                </Text>
              </View>
              <View
                style={{
                  paddingHorizontal: hp(2),
                  paddingVertical: hp(0.5),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: hp(2),
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Raleway-Medium',
                      fontSize: hp(1.9),
                      fontWeight: '600',
                      color: 'black',
                    }}>
                    Total Refund Amount
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Medium',
                      fontSize: hp(1.9),
                      color: '#34a880',
                    }}>
                    $1200
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    padding: hp(3),
                    backgroundColor: '#e6ecf2',
                    borderRadius: hp(0.5),
                  }}>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        fontSize: hp(1.9),
                        fontFamily: 'Poppins-Medium',
                        color: 'black',
                      }}>
                      $20
                    </Text>
                  </View>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        fontSize: hp(1.7),
                        fontFamily: 'Poppins-Light',
                        marginBottom: hp(1),
                        color: 'black',
                      }}>
                      Added to SBI Bank Account
                    </Text>
                    <Text
                      style={{
                        fontSize: hp(1.7),
                        fontFamily: 'Poppins-Light',
                        color: 'black',
                      }}>
                      Credit Instantly
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../../Assets/Images/sbi.png')}
                      style={{width: hp(4), height: hp(4)}}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
          <View
            style={{
              paddingVertical: hp(2),
              backgroundColor: 'white',
              marginBottom: hp(2),
            }}>
            <View
              style={{
                paddingHorizontal: hp(2),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: hp(1),
              }}>
              <Text
                style={{
                  fontFamily: 'Raleway-Medium',
                  fontSize: hp(1.9),
                  color: 'black',
                  fontWeight: '600',
                }}>
                Total Item Price
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: hp(1.9),
                  color: 'black',
                }}>
                $1200
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: hp(2),
                alignItems: 'center',
                paddingVertical: hp(0.5),
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Light',
                    fontSize: hp(1.6),
                    color: 'black',
                  }}>
                  You saved{' '}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: hp(1.9),
                    color: '#34a880',
                  }}>
                  $300{' '}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Light',
                    fontSize: hp(1.6),
                    color: 'black',
                  }}>
                  on this item
                </Text>
              </View>
              <Pressable onPress={() => setShowModal(true)}>
                <Text
                  style={{
                    fontFamily: 'Raleway-Medium',
                    fontSize: hp(1.8),
                    fontWeight: '700',
                    color: '#fb7ca0',
                  }}>
                  View Breakup
                </Text>
              </Pressable>
            </View>
          </View>
          {data.type === 'Delivered' && (
            <View style={{padding: hp(2), backgroundColor: 'white'}}>
              <View style={{marginBottom: hp(2)}}>
                <Text
                  style={{
                    fontFamily: 'Raleway-Medium',
                    fontSize: hp(1.9),
                    fontWeight: '600',
                    color: 'black',
                  }}>
                  Updates sent to
                </Text>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: hp(2),
                  }}>
                  <MaterialIcons
                    name="call"
                    size={hp(3)}
                    style={{marginRight: hp(2)}}
                  />
                  <Text
                    style={{
                      fontSize: hp(1.6),
                      fontFamily: 'Poppins-Light',
                      color: 'black',
                    }}>
                    8347734562
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: hp(2),
                  }}>
                  <MaterialIcons
                    name="mail"
                    size={hp(3)}
                    style={{marginRight: hp(2)}}
                  />
                  <Text
                    style={{
                      fontSize: hp(1.6),
                      fontFamily: 'Poppins-Light',
                      color: 'black',
                    }}>
                    austin_345@gmail.com
                  </Text>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
        <PaymentInformationModal
          showModal={showModal}
          image={data.productImage}
          setShowModal={() => setShowModal(false)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ItemDetailsScreen;
