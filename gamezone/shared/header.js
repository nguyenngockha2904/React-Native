import React from 'react';
import { StyleSheet, Text, View, Dimensions ,Image,ImageBackground} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header} >
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle} >
                <Image source ={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#bbb',
        letterSpacing: 2,
        alignItems: "center",
    },
    icon: {
        position: 'relative',
        flexDirection: 'column',
        color: '#333',
        flex: 0.45
    },
    headerTitle: {
        flexDirection:'row',
    },
    headerImage:{
        width:26,
        height:26,
        marginHorizontal:7
    }
});