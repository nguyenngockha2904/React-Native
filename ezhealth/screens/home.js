import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons'
import colors from '../shared/colors';
import { homeStyles } from '../styles/homeStyles';
import advices from '../shared/tempAdvices';
import users from '../shared/tempUsers';

const usersData = users[1];

export default function Home() {

    return (
        <View style={homeStyles.container}>

            {/* header */}
            <View style={homeStyles.header}>
                <View style={{ flexDirection: 'row', paddingTop: 30 }}>

                    <MaterialIcons
                        name='menu'
                        size={24}
                        style={homeStyles.iconMenu}
                    />
                    <MaterialIcons
                        name='search'
                        size={24}
                        style={homeStyles.iconSearch}
                    />
                </View>

                <View style={homeStyles.info}>
                    <View style={homeStyles.avatar}>
                        <Image
                            style={homeStyles.avatarImage}
                            source={{ uri: usersData.avatar }}
                        />
                    </View>
                    <View style={homeStyles.name}>
                        <Text style={homeStyles.nameText}>{usersData.name}</Text>
                        <Text style={homeStyles.nameSubText}>{usersData.job}</Text>
                    </View>
                </View>

            </View>

            {/* body */}
            <View style={homeStyles.body}>

                <View style={homeStyles.bodyTitle}>
                    <Text style={homeStyles.titleBodyText}>My Advices</Text>
                    <AntDesign
                        name='star'
                        size={30}
                        color={colors.green}
                        style={homeStyles.star}
                    />
                </View>

                <View style={homeStyles.bodyContent}>
                    <FlatList
                        style={homeStyles.flatlistBoby}
                        data={advices}
                        contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 15 }}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10, width: '100%', paddingBottom: 20 }}>
                                <TouchableOpacity style={[homeStyles.bodyTouch, { backgroundColor: item.color }]}>
                                    <FontAwesome5
                                        name={item.icon}
                                        size={40}
                                        color={colors.lightOrange}
                                    />
                                </TouchableOpacity>
                                <View style={homeStyles.bodyContentText}>
                                    <Text style={[homeStyles.bodyContentTitle, {color: item.color}]}>{item.name} </Text>
                                    <Text style={homeStyles.bodyContentSub}>{item.todos.length} {item.name} Today</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.name}
                    />
                </View>


            </View>
        </View>
    );
}
