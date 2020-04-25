import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetail';
import Header from '../shared/header';
import React from 'react';
const screens = {
    Home: {
        screen: Home,
        navigationOptions: ( {navigation}) => {
            return {
                headerTitle :() => <Header navigation={navigation} title='GameZone'/>,
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Detail',
         
        }
    }

}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor:'#333',
        headerStyle: { backgroundColor: '#fff',height:100 }
    }
});

export default HomeStack;