import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DIMENSIONS } from '../app/styles/dimensions';
import { config } from "../config";

import * as React from 'react';
import { Image, Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

export default (props) => {
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            email: '',
            description: '',
            walletAddress: '',
        }
    });
    const onSubmit = async (data) => {
        let authToken = await AsyncStorage.getItem('auth-token');
        axios.post(config.api_url + "/profile", {
            '_method': 'PATCH',
            'username': data.username,
            'email': data.email,
            'description': data.description,
            'wallet_address': data.walletAddress,
        }, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + authToken,
            }
        }).then(async (response) => {
            props.navigation.goBack();
        }).catch(err => {
            console.log(err);
        });
    };

    const onChange = arg => {
        return {
            value: arg.nativeEvent.text,
        };
    };

    async function handleAuth() {
        let authToken = await AsyncStorage.getItem('auth-token');
        axios.get(config.api_url + "/profile", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + authToken,
            }
        }).then(async (response) => {
            const user = response.data;
            reset({
                email: user.email,
                username: user.username,
                walletAddress: user.wallet_address,
                description: user.description == null ? '' : user.description,
            })
        });
    }

    useEffect(() => {
        handleAuth();
    }, []);

    console.log('errors', errors);

    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={{ uri: config.img_url + "/g4.png" }} />
            
            <View>
                <Text style={styles.label}>Full name</Text>
                <ErrorMessage errors={errors} name="username" message="This is required"
                    render={({ message }) => (
                        <View style={styles.error}>
                            <Text style={styles.errorText}>{message}</Text>
                        </View>
                    )}
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="username"
                    rules={{ required: true }}
                />

                <Text style={styles.label}>Email</Text>
                <ErrorMessage errors={errors} name="email" message="This is required"
                    render={({ message }) => (
                        <View style={styles.error}>
                            <Text style={styles.errorText}>{message}</Text>
                        </View>
                    )}
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="email"
                    rules={{ required: true }}
                />

                <Text style={styles.label}>Wallet address</Text>
                <ErrorMessage errors={errors} name="walletAddress" message="This is required"
                    render={({ message }) => (
                        <View style={styles.error}>
                            <Text style={styles.errorText}>{message}</Text>
                        </View>
                    )}
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="walletAddress"
                    rules={{ required: true }}
                />


                <Text style={styles.label}>Description</Text>
                <ErrorMessage errors={errors} name="description" message="This is required"
                    render={({ message }) => (
                        <View style={styles.error}>
                            <Text style={styles.errorText}>{message}</Text>
                        </View>
                    )}
                />
                <Controller
                    control={control}
                    render={({ field: { ref, onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.input, styles.multiline]}
                            multiline
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="description"
                    rules={{ required: true }}
                />

                <View style={styles.button}>
                    <Button
                        style={styles.buttonInner}
                        color
                        title="Save"
                        onPress={handleSubmit(onSubmit)}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        marginTop: 20,
        marginLeft: 5,
    },
    avatarContainer: {
        flex: 1,
        textAlign: 'center',

    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
    },
    button: {
        marginTop: 20,
        color: 'white',
        height: 40,
        backgroundColor: '#ec5990',
        borderRadius: 4,
        marginLeft: 5,
        marginRight: 5,
    },
    container: {
        flex: 1,
        padding: 8,
    },
    input: {
        padding: 5,
        borderRadius: 4,
        height: DIMENSIONS.height,
        marginTop: 5,
        marginRight: 5,
        marginLeft: 5,
        // margin: DIMENSIONS.margin,
        backgroundColor: '#fff',
    },
    multiline: {
        height: DIMENSIONS.height + 20,
        textAlignVertical: 'top',
    },
    error: {
        backgroundColor: '#ffb0b7',
        width: '100%',
        height: 20,
        borderRadius: 4,
        justifyContent: 'center',
        padding: 5,
        marginLeft: 5,
        marginRight: 5
    },
    errorText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
});
