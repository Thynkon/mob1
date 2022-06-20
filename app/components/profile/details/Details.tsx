import React, { useContext, useEffect } from 'react';
import {
    Image,
    Text, View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { config } from '../../../../config';
import { UserContext } from '../../../../contexts/userContext';
import { styles } from './Styles';

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
                        <Text style={styles.info}>{new Date(user?.creation_date).toLocaleDateString()}</Text>
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
