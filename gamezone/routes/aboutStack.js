import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';
import drawer from './drawer';
const screens = {
    About: {
        screen: About,
        navigationOptions: ( {navigation}) => {
            return {
                headerTitle :() => <Header navigation={navigation} title='About GameZone'/>,
            }
        }
    }, 

}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerTintColor:'#444',
        headerStyle: { backgroundColor: '#fff',height :100 }
    }
});
export default AboutStack;