import { StyleSheet } from 'react-native';
import { DIMENSIONS } from '../../../styles/dimensions';

export const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
    },
    header: {
        backgroundColor: "#DCDCDC",
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
    },
    editButton: {
        marginRight: 10,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        color: "#000000",
        fontWeight: '600',
    },
    userInfo: {
        fontSize: 16,
        color: "#778899",
        fontWeight: '600',
    },
    body: {
        backgroundColor: "#778899",
        height: '100%',
        // alignItems: 'center',
        width: '100%',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingLeft: '20%',
        left: 0,
    },
    infoContent: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 5,
    },
    iconContent: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 5,
    },
    icon: {
        width: DIMENSIONS.iconSize,
        height: DIMENSIONS.iconSize,
        marginTop: 20,
        marginRight: 10
    },
    info: {
        fontSize: 18,
        marginTop: 20,
        color: "#FFFFFF",
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: DIMENSIONS.fontSize * 2,
    },
    input: {
        height: DIMENSIONS.height,
        margin: DIMENSIONS.margin,
        borderWidth: 1,
        borderRadius: DIMENSIONS.inputBorderRadius,
        padding: 10,
        fontSize: DIMENSIONS.fontSize,
        backgroundColor: '#fff',
        width: '100%',
    },
    label: {
        fontSize: DIMENSIONS.fontSize,
        margin: DIMENSIONS.margin,
    },
    button: {
        margin: DIMENSIONS.margin,
        height: DIMENSIONS.height,
        with: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        backgroundColor: '#000',
    },
    form: {
        width: '80%',
        padding: 10,
        flex: 1,
        flexDirection: 'column',
        marginRight: '30%',
    },
    text: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        with: '100%',
    },
    message: {
        height: DIMENSIONS.height,
    }
});