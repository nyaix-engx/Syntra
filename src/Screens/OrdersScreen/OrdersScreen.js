import React from 'react';
import {View, ScrollView} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButtonTitle from '../../Components/BackButtonTitle';
import EntryAnimation from '../../Components/EntryAnimation';
import OrdersCard from '../../Components/OrdersCard';
import {ordersData} from '../../Utils/arrays';

const OrderScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="ORDERS" />
      </View>
      <View style={{flex: 8}}>
        <ScrollView style={{paddingVertical: hp(2)}} bounces={false}>
          {ordersData.map((data, index) => {
            return (
              <EntryAnimation index={index+1} key={index} direction="RIGHT" >
                <OrdersCard data={data} />
              </EntryAnimation>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;
