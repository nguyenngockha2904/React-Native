import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../colors';
export default class TodoModal extends Component {

    state = {
        name: this.props.list.name,
        color: this.props.list.color,
        todos: this.props.list.todos
    };

    render() {

        const taskCount = this.state.todos.length;
        const completedCount = this.state.todos.filler(todo => todo.completed).length;

        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={{ position: 'absolute', top: 64, right: 32, zIndex: 10 }}
                    onPress={this.props.closeModal}
                >
                    <AntDesign name='close' size={24} color={colors.black} />
                </TouchableOpacity>

                <View style={[styles.section, styles.header, { borderBottomColor: this.state.color }]}>
                    <View>
                        <Text style={styles.title}>{this.state.name}</Text>
                        <Text style={styles.taskCount}>
                             of {taskCount} Tasks
                       </Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    section: {
        flex: 1,
        alignSelf: 'stretch',

    },
    header: {
        justifyContent: 'flex-end',
        marginLeft: 64,
        borderBottomWidth: 3,
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        color: colors.black
    },
    taskCount: {
        marginTop: 4,
        marginBottom: 16,
        color: colors.gray,
        fontWeight: '600',
    }
})
