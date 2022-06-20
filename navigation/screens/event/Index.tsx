import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from "react-native";
import { DIMENSIONS } from '../../../app/styles/dimensions';
import BasicCard from "../../../app/components/Card";
import { config } from "../../../config";
import { UserContext } from '../../../contexts/userContext';
import { EventsContext } from '../../../contexts/eventsContext';

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

    let { user, setUser } = useContext(UserContext);
    let { events, setEvents } = useContext(EventsContext);

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

    async function fetchAuthenticatedUser() {
        let authToken = await AsyncStorage.getItem('auth-token');
        let r = await axios.get(config.api_url + "/profile", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + authToken,
            }
        });

        setUser(r.data);
    }

    useEffect(() => {
        fetchAuthenticatedUser();
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