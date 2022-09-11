import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabBar from './src/Components/Tabbar/Tabbar';
import * as eva from '@eva-design/eva';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen/ProfileScreen';
import CategoryScreen from './src/Screens/CategoryScreen/CategoryScreen';
import {useWindowDimensions} from 'react-native';
import CustomDrawer from './src/Components/CustomDrawer/CustomDrawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import WishlistScreen from './src/Screens/WishlistScreen/WishlistScreen';
import AuthScreen from './src/Screens/AuthPage/AuthScreen';
import ListingPage from './src/Screens/ListingPage/ListingPage';
import DescriptionScreen from './src/Screens/DescriptionScreen/DescriptionScreen';
import ReviewsScreen from './src/Screens/ReviewsScreen/ReviewsScreen';
import ImageDisplay from './src/Screens/ImageDisplay/ImageDisplay';
import ShoppingBagScreen from './src/Screens/ShoppingBagScreen/ShoppingBagScreen';
import SearchScreen from './src/Screens/SearchScreen/SearchScreen';
import NotificationsScreen from './src/Screens/NotificationsScreen/NotificationsScreen';
import EditProfileScreen from './src/Screens/EditProfileScreen/EditProfileScreen';
import ProfileHelperScreen from './src/Screens/ProfileHelperScreen/ProfileHelperScreen';
import OrderScreen from './src/Screens/OrdersScreen/OrdersScreen';
import WriteReviewScreen from './src/Screens/WriteReviewScreen/WriteReviewScreen';
import ItemDetailsScreen from './src/Screens/ItemDetailsScreen/ItemDetailsScreen';
import SavedCardsScreen from './src/Screens/SavedCardsScreen/SavedCardsScreen';
import AddCardScreen from './src/Screens/AddCardScreen/AddCardScreen';
import AddressScreen from './src/Screens/AddressScreen/AddressScreen';
import AddNewAddressScreen from './src/Screens/AddNewAddressScreen/AddNewAddressScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabPage = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={CategoryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
    </Tab.Navigator>
  );
};

const ScreenPage = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabPage" component={TabPage} />
      <Stack.Screen name="ListingPage" component={ListingPage} />
      <Stack.Screen name="DescriptionPage" component={DescriptionScreen} />
      <Stack.Screen name="ReviewsPage" component={ReviewsScreen} />
      <Stack.Screen name="ImageDisplayPage" component={ImageDisplay} />
      <Stack.Screen name="ShoppingBagPage" component={ShoppingBagScreen} />
      <Stack.Screen name="SearchPage" component={SearchScreen} />
      <Stack.Screen name="NotificationsPage" component={NotificationsScreen} />
      <Stack.Screen name="EditProfilePage" component={EditProfileScreen} />
      <Stack.Screen name="ProfileHelperPage" component={ProfileHelperScreen} />
      <Stack.Screen name="OrdersPage" component={OrderScreen} />
      <Stack.Screen name="WriteReviewPage" component={WriteReviewScreen} />
      <Stack.Screen name="ItemDetailsPage" component={ItemDetailsScreen} />
      <Stack.Screen name="SavedCardsPage" component={SavedCardsScreen} />
      <Stack.Screen name="AddCardPage" component={AddCardScreen} />
      <Stack.Screen name="AddressPage" component={AddressScreen} />
      <Stack.Screen name="AddNewAddressPage" component={AddNewAddressScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  const isSigned = true;
  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {isSigned ? (
            <Drawer.Navigator
              initialRouteName="HomePage"
              drawerType="front"
              drawerStyle={isLargeScreen ? {width: '50%'} : {width: '70%'}}
              overlayColor="transparent"
              drawerContent={props => <CustomDrawer {...props} />}
              drawerContentOptions={{
                activeTintColor: '#ABD8EB',
                activeBackgroundColor: '#ABD8EB',
              }}>
              <Drawer.Screen name="HomePage" component={ScreenPage} />
            </Drawer.Navigator>
          ) : (
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Authpage" component={AuthScreen} />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
};

export default App;
