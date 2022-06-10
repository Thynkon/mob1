import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import BasicCard from "../../components/Card";

export default ({ navigation }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 8,
        },
        card: {
            marginTop: 5,
            marginBottom: 5,
        }
    });

    let event = { title: "event title", description: "event description" };
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.card}>
                <BasicCard event={event} navigation={navigation}></BasicCard>
            </View>
            <View style={styles.card}>
                <BasicCard event={event} navigation={navigation}></BasicCard>
            </View>
            <View style={styles.card}>
                <BasicCard event={event} navigation={navigation}></BasicCard>
            </View>
            <View style={styles.card}>
                <BasicCard event={event} navigation={navigation}></BasicCard>
            </View>
            <View style={styles.card}>
                <BasicCard event={event} navigation={navigation}></BasicCard>
            </View>
            <View style={styles.card}>
                <BasicCard event={event} navigation={navigation}></BasicCard>
            </View>
            <View style={styles.card}>
                <BasicCard event={event} navigation={navigation}></BasicCard>
            </View>
        </View>
        </ScrollView>
    );
}