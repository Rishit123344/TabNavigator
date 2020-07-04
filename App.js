import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import TransactionScreen from './Screens/BookTransactionScreen';
import SearchScreen from './Screens/SearchScreen';
import { Transition } from 'react-native-reanimated';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import LoginScreen from './Screens/LoginScreen'
export default class app extends React.Component {
  render(){
  return (
   <AppContainer></AppContainer>
  );
}
}
const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon:({})=>{
      const routeName = navigation.state.routeName
      if(routeName === 'Transaction'){
        return(
          <Image source = {require('./assets/book.png')} style={{width:40,height:40}}/>
        )
      }
      else  if(routeName === 'Search'){
        return(
          <Image source = {require('./assets/searchingbook.png')} style={{width:40,height:40}}/>
        )
      }
    }
  })
})
const SwitchNavigator = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  TabNavigator:{screen:TabNavigator}
})
const AppContainer = createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});