import React, { useContext, useEffect } from 'react';
import {
    Image, StyleSheet,
    Text, View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DIMENSIONS } from '../../app/styles/dimensions';
import { config } from "../../config";
import { UserContext } from '../../contexts/userContext';

export default function Profile() {
    let { user, setUser } = useContext(UserContext);

    useEffect(() => {
    }, []);

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <View>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Image style={styles.avatar} source={{ uri: `${config.img_url}/${user?.picture}` }} />

                        <Text style={styles.name}>{user?.username}</Text>
                        <Text style={styles.userInfo}>{user?.email}</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.item}>
                        <Ionicons style={styles.icon} name="calendar-outline" size={30} />
                        <Text style={styles.info}>{user?.creation_date}</Text>
                    </View>

                    <View style={styles.item}>
                        <Ionicons style={styles.icon} name="wallet" size={30} />
                        <Text style={styles.info}>{user?.wallet_address ? user?.wallet_address : 'No wallet available'}</Text>
                    </View>

                    <View style={styles.item}>
                        <Ionicons style={styles.icon} name="exit" size={30} />
                        <Text style={styles.info}>Logout</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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