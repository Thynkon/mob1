import React, { useContext, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from "react-native";
import BasicCard from "../../../app/components/Card";
import { DIMENSIONS } from '../../../app/styles/dimensions';
import { EventsContext } from '../../../contexts/eventsContext';
import { UserContext } from '../../../contexts/userContext';

import Api from '../../../app/requests/Request';

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
    let { events, setEvents } = useContext(EventsContext)
    const api = new Api();

    async function fetchEvents() {
       api.getEventsList().then(async (response) => {
            setEvents(response.data)
        });
    }

    async function fetchAuthenticatedUser() {
       api.getCurrentUser().then(async (response) => {
            setUser(response.data);
        });
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