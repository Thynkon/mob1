import { Text, TextInput, StyleSheet, View, Pressable } from "react-native";
import { useState } from "react"
import { config } from "../config"
import axios from 'axios'

export function AuthenticationForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Nextep</Text>
            <TextInput placeholder="Email" style={styles.input} onChangeText={(newUsername) => setUsername(newUsername)}/>
            <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} onChangeText={(newPassword) => setPassword(newPassword)}/>
            <Pressable style={styles.button} onPress={() => okPressed(username, password)}>
                <Text style={styles.text}>Login</Text>
            </Pressable>
        </View>
    );
}

function okPressed(username: string, password: string) {
    axios.post(config.api_url + "/me/token", {
        'username': username,
        'password': password
    }).then(response => {
        console.log(response.data);
    }).catch(err => {
        console.log(err);
    });
}

const DIMENSIONS = {
    margin: 12,
    height: 35,
    fontSize: 15,
};


const styles = StyleSheet.create({
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
    },
    label: {
        fontSize: DIMENSIONS.fontSize,
        margin: DIMENSIONS.margin,
    },
    button: {
        margin: DIMENSIONS.margin,
        height: DIMENSIONS.height,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        backgroundColor: '#000',
    },
    form: {
        width: '100%',
        padding: 10,
    },
    text: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
});