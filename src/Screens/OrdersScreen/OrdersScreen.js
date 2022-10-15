import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';

import BackButtonTitle from '../../Components/BackButtonTitle';
import EntryAnimation from '../../Components/EntryAnimation';
import OrdersCard from '../../Components/OrdersCard';

import {ordersData} from '../../Utils/arrays';

const OrderScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButtonTitle title="ORDERS" />
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.scrollStyle} bounces={false}>
          {ordersData.map((data, index) => {
            return (
              <EntryAnimation index={index + 1} key={index} direction="RIGHT">
                <OrdersCard data={data} />
              </EntryAnimation>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flex: 0.8},
  content: {flex: 8},
  scrollStyle: {paddingVertical: hp(2)},
});

export default OrderScreen;
