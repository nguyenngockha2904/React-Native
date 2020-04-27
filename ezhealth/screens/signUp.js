import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import colors from '../shared/colors';
import * as yup from 'yup'
import { Formik } from 'formik';
const ReviewSchema = yup.object({
    name: yup.string()
        .required()
        .min(8),
    gender: yup.string()
        .required()
        .min(8),
    age: yup.string()
        .required()
        .test('is-num-6->now', 'Age must be a number >6 ', (val) => {
            return parseInt(val) > 6;
        }),
    username: yup.string()
        .required()
        .min(8),
    email: yup.string()
        .required()
        .min(8),
    password: yup.string()
        .required()
        .min(7),
});
export default function SignUp({ addAccount }) {

    return (
        <View style={styles.container}>

            <Formik
                initialValues={{ name: '', gender: '', age: '', username: '', email: '', password: '' }}
                validationSchema={ReviewSchema}
                onSubmit={(values, actions) => {
                    //  console.log(values);   
                    actions.resetForm();
                    addReview(values);
                }}
                style={styles.InputGroup}

            >

                {props => (
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={[styles.divider, { backgroundColor: colors.green, }]} />
                            <Text style={[styles.title, { fontSize: 44 }]}>
                                Sign<Text style={{ fontFamily: 'quicksand-regular', color: colors.orange }}>Up </Text>
                            </Text>
                            <View style={[styles.divider, { backgroundColor: colors.orange, }]} />
                        </View>
                        <TextInput
                            style={[styles.input, { width: 300 },{marginTop:15}]}
                            placeholder='Name'
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                           //onBlur={props.handleBlur('name')}

                        />
                        <Text style={styles.errorText}>{props.touched.name && props.errors.name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput style={[styles.input, { width: 140 }]}
                                placeholder='Gender'
                               onChangeText={props.handleChange('gender')}
                                value={props.values.gender}
                               // onBlur={props.handleBlur('gender')}
                            />
                            <TextInput style={[styles.input, { width: 140 }, { marginLeft: 20 }]}
                                placeholder='Age'
                                keyboardType='number-pad'
                               onChangeText={props.handleChange('age')}
                                value={props.values.age}
                              //  onBlur={props.handleBlur('age')}
                            />
                        </View>
                        <Text style={styles.errorText}>{props.touched.age && props.errors.age}</Text>
                        <TextInput
                            style={[styles.input, { width: 300 }]}
                            placeholder='Username'
                           onChangeText={props.handleChange('username')}
                            value={props.values.username}
                           // onBlur={props.handleBlur('username')}
                        />
                        <Text style={styles.errorText}>{props.touched.username && props.errors.username}</Text>
                        <TextInput
                            style={[styles.input, { width: 300 }]}
                            placeholder='Email'
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                           // onBlur={props.handleBlur('email')}
                        />
                        <Text style={styles.errorText}>{props.touched.email && props.errors.email}</Text>
                        <TextInput
                            style={[styles.input, { width: 300 }]}
                            placeholder='Password'
                            secureTextEntry={true}
                           onChangeText={props.handleChange('password')}
                            value={props.values.password}
                            //onBlur={props.handleBlur('password')}
                        />
                         <Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text>
                        <TouchableOpacity style={[styles.button, { backgroundColor: colors.orange }]}
                            onPress={props.handleSubmit}
                        >
                            <Text style={styles.itemButton}>
                                Create Account
                            </Text>
                        </TouchableOpacity>
                    </View>

                )}

            </Formik>


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
        height: 40,
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
    errorText:{
        color:colors.orange,
        fontWeight:'bold',
        marginBottom:2,
        textAlign:'center',

    }
})
