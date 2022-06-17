import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from "react-native";
import { DIMENSIONS } from '../../../app/styles/dimensions';
import BasicCard from "../../../components/Card";
import { config } from "../../../config";

export default ({ navigation }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 8,
        },
        card: {
            marginTop: DIMENSIONS.cardMargin,
            marginBottom: DIMENSIONS.cardMargin,
        }
    });
    const [events, setEvents] = useState([]);

    async function fetchEvents() {
        let authToken = await AsyncStorage.getItem('auth-token');
        axios.get(config.api_url + "/events", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + authToken,
            }
        }).then(async (response) => {
            setEvents(response.data)
        });
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                {events.map((event, i) =>
                    <View key={i} style={styles.card}>
                        <BasicCard event={event} navigation={navigation}></BasicCard>
                    </View>)}
            </View>
        </ScrollView>
    );
}