import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import colors from '../shared/colors';
import { MaterialIcons } from '@expo/vector-icons'
export default class login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                
                 <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.divider, { backgroundColor: colors.green, }]} />
                    <Text style={[styles.title, { fontSize: 64 }]}>
                        Log<Text style={{ fontFamily: 'quicksand-regular', color: colors.orange }}>in </Text>
                    </Text>
                    <View style={[styles.divider, { backgroundColor: colors.orange, }]} />
                </View>
                <View style={styles.InputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder='UserName'
                    //onChangeText={text => this.setState({ name: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}
                    //onChangeText={text => this.setState({ name: text })}
                    />
                </View>
                <TouchableOpacity style={[styles.button, { backgroundColor: colors.green }]}
                >
                    <Text style={styles.itemButton}>
                        LogIn
                        </Text>
                </TouchableOpacity>

            </View>

        )
    }

    s
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'quicksand-bold',
        color: colors.green,
        paddingHorizontal: 38,
    },
    divider: {
        height: 2,
        flex: 1,
        marginTop: 15,
        alignSelf: 'center',
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.blue,
        borderRadius: 10,
        height: 50,
        width: 300,
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 16,
        fontSize: 18,
        fontFamily: 'quicksand-bold',
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
})
