import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.lightOrange,
    },
    header: {
        backgroundColor: colors.orange,
        alignSelf: 'flex-start',
        width: '100%',
        height: 250,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    iconMenu: {
        flex: 1,
        color: '#0E263F',
        padding: 10,
        alignSelf: 'flex-start',
    },
    iconSearch: {

        color: '#0E263F',
        padding: 10,
        alignSelf: 'flex-end',
    },
    info: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    avatar: {
        flex: 1,
    },
    avatarImage: {
        borderRadius: 100,
        width: 140,
        height: 140,
        alignSelf: 'flex-end',
        marginRight: 30,
    },
    name: {
        flex: 1,
        fontFamily: 'quicksand-bold',
        marginLeft: 0,
        justifyContent: 'center',
        flex: 1,
    },
    nameText: {
        fontFamily: 'quicksand-bold',
        fontSize: 22,
        color: colors.primary,
    },
    nameSubText: {
        fontFamily: 'quicksand-regular',
        fontSize: 20,
        color: colors.primary,
    },
    body: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
    },
    bodyTitle: {
        padding: 20,
        flexDirection: 'row',

    },
    titleBodyText: {
        color: colors.primary,
        flex: 1,
        alignSelf: 'flex-start',
        fontFamily: 'quicksand-bold',
        fontSize: 22,
    },
    star: {
        alignSelf: 'flex-end',
    },
    bodyContent: {
        flexDirection:'row',
        padding: 0,
        alignItems: 'center',
    },
    bodyTouch: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100 ,
    },
    bodyContentText: {
        color: colors.primary,
    },
    bodyContentTitle: {
        marginLeft: 20,
        fontFamily: 'quicksand-bold',
        fontSize: 18,
    },
    bodyContentSub: {
        color: colors.primary,
        marginLeft: 20,
        fontFamily: 'quicksand-regular',
        fontSize: 16,
    },
    flatlistBoby: {
    }
});