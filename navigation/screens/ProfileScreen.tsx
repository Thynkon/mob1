import { Component } from "react";
import { Text, TextInput, StyleSheet, View, Pressable } from "react-native";

export default class ProfileScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    onPress={() => alert('This is the "Home" screen.')}
                    style={{ fontSize: 26, fontWeight: 'bold' }}>Profile Screen</Text>
            </View>
        );
    }
}