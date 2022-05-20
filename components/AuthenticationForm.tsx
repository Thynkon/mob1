import { Text, TextInput, StyleSheet, View, Pressable } from "react-native";
import { Component } from "react";
import { config } from "../config";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Props = {
    username: string,
    password: string,
    message: string,
};

export class AuthenticationForm extends Component {
    state: {
        username: string,
        password: string,
        message: string,
    }

    DIMENSIONS = {
        margin: 12,
        height: 35,
        fontSize: 15,
    };


    readonly styles = StyleSheet.create({
        title: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontStyle: 'italic',
            fontSize: this.DIMENSIONS.fontSize * 2,
        },
        input: {
            height: this.DIMENSIONS.height,
            margin: this.DIMENSIONS.margin,
            borderWidth: 1,
            borderRadius: 3,
            padding: 10,
            fontSize: this.DIMENSIONS.fontSize,
            backgroundColor: '#fff',
        },
        label: {
            fontSize: this.DIMENSIONS.fontSize,
            margin: this.DIMENSIONS.margin,
        },
        button: {
            margin: this.DIMENSIONS.margin,
            height: this.DIMENSIONS.height,
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
        },
        message: {
            height: this.DIMENSIONS.height,
        }
    });

    constructor(props: Props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: '',
        }

    }

    async saveToken(token: string) {
        await AsyncStorage.setItem('auth_token', token);
    }

    okPressed(username: string, password: string) {
        axios.post(config.api_url + "/me/token", {
            'username': username,
            'password': password
        }).then(async (response) => {
            await this.saveToken(response.data);

            this.setState({ message: 'User successfully authenticated!' });
            this.props.navigation.navigate('dashboard');
        }).catch(err => {
            if (err.response.status === 401) {
                this.setState({ message: 'Authentication failed! Please check your credentials and try again.' });
            }
        });
    }

    render() {
        return (
            <View style={this.styles.form}>
                <Text style={this.styles.title}>Nextep</Text>
                <Text style={[this.styles.error, this.styles.label]}>{this.state.message}</Text>
                <TextInput placeholder="Email" style={this.styles.input} onChangeText={(newUsername) => this.setState({ username: newUsername })} />
                <TextInput placeholder="Password" secureTextEntry={true} style={this.styles.input} onChangeText={(newPassword) => this.setState({ password: newPassword })} />
                <Pressable style={this.styles.button} onPress={() => this.okPressed(this.state.username, this.state.password)}>
                    <Text style={this.styles.text}>Login</Text>
                </Pressable>
            </View>
        );
    }
}