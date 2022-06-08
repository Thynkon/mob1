import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    Image,
    Pressable, StyleSheet,
    Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { config } from "../config";
import {DIMENSIONS} from '../app/styles/dimensions';

export default function Profile() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [creationDate, setCreationDate] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [walletAddress, setWalletAddress] = useState("");

    async function handleAuth() {
        let authToken = await AsyncStorage.getItem('auth-token');
        axios.get(config.api_url + "/profile", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + authToken,
            }
        }).then(async (response) => {
            let user = response.data;

            setEmail(user.email);
            setUsername(user.username);
            setFirstname(user.firstname);
            setLastname(user.lastname);

            let date = new Date(user.creation_date);
            setCreationDate(date.toLocaleString());

            setWalletAddress(user.wallet_address);
        });
    }

    useEffect(() => {
        handleAuth();
    }, []);

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <View>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Image style={styles.avatar} source={{ uri: config.img_url + "/g4.png" }} />

                        <Text style={styles.name}>{username}</Text>
                        <Text style={styles.userInfo}>{email}</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.item}>
                        <Ionicons style={styles.icon} name="calendar-outline" size={30} />
                        <Text style={styles.info}>{creationDate}</Text>
                    </View>

                    <View style={styles.item}>
                        <Ionicons style={styles.icon} name="wallet" size={30} />
                        <Text style={styles.info}>{walletAddress ? walletAddress : 'No wallet available'}</Text>
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
        width: 30,
        height: 30,
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
        borderRadius: 3,
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