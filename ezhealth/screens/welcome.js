import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons'
import colors from '../shared/colors';
import Login from '../screens/login';
import SignUp from '../screens/signUp';
export default function Wellcome() {
    const [modalLogin, setModalLogin] = useState(false);
    const [modalSignUp, setModalSignUp] = useState(false);


    return (

        <View style={styles.container}>
            <Modal visible={modalLogin} animationType='slide'
                onRequestClose={() => setModalLogin(false)}


            >
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss();
                }}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={[styles.modalToggle, { backgroundColor: colors.green }]}
                            onPress={() => setModalLogin(false)}>
                            <MaterialIcons
                                name='close'
                                size={24}
                                style={styles.modalClose}

                            />
                        </TouchableOpacity>
                        <Login />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Modal visible={modalSignUp} animationType='slide'
                onRequestClose={() => setModalSignUp(false)}
            >
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss();
                }}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={[styles.modalToggle, { backgroundColor: colors.orange }]}
                            onPress={() => setModalSignUp(false)}>
                            <MaterialIcons
                                name='close'
                                size={24}
                                style={styles.modalClose}
                                onPress={() => setModalSignUp(false)}
                            />
                        </TouchableOpacity>
                        <SignUp />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Image
                    style={{ width: 180, height: 180 }}
                    source={require('../assets/icon.png')}
                />
                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.divider, { backgroundColor: colors.green, }]} />
                    <Text style={[styles.title, { fontSize: 36 }]}>
                        Easy <Text style={{ fontFamily: 'quicksand-regular', color: colors.orange }}>Health</Text>
                    </Text>
                    <View style={[styles.divider, { backgroundColor: colors.orange, }]} />
                </View>

                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: colors.green }]}
                        onPress={() => setModalLogin(true)}
                    >
                        <Text style={styles.itemButton}>
                            LogIn
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: colors.orange }]}
                        onPress={() => setModalSignUp(true)}
                    >
                        <Text style={styles.itemButton}

                        >
                            Sign Up
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Linkcontainer}>
                    <Text style={[styles.title, { fontSize: 14 }]}>
                        Or , <Text style={{ fontFamily: 'quicksand-regular', color: colors.orange }}>Login as </Text>
                    </Text>
                    <View style={styles.linkFBGG}>
                        <TouchableOpacity style={styles.linkLogo}>
                            <Image
                                style={{ width: 40, height: 40 }}
                                source={require('../assets/logo_fb.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.linkLogo}>
                            <Image
                                style={{ width: 40, height: 40 }}
                                source={require('../assets/logo_Google.png')}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divider: {

        height: 2,
        flex: 1,
    },
    title: {
        fontFamily: 'quicksand-bold',
        color: colors.green,
        paddingHorizontal: 38,
    },
    addList: {
        fontFamily: 'quicksand-regular',
        borderWidth: 2,
        borderColor: colors.gray,
        borderRadius: 4,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    add: {
        color: colors.black,
        fontFamily: 'quicksand-regular',
        fontSize: 14,
        marginTop: 8,
    },

    buttonGroup: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
        paddingTop: 50

    },
    button: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 200,
        marginTop: 20,
        padding: 5,
        borderRadius: 20

    },
    itemButton: {

        fontSize: 15,
        fontWeight: 'normal',
        color: colors.white,

    },
    modalContent: {
        flex: 1,

    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-end',
        marginRight: 10,
       
    },

    modalClose: {
        marginBottom: 0,
        fontWeight:'700',
        color: '#fff',
    },
    Linkcontainer: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 5,
    },
    linkLogo: {
        alignContent: 'center',
        paddingRight: 10,
        paddingLeft: 10,
    },
    linkFBGG: {
        flexDirection: 'row',
        margin: 5,
    }


});