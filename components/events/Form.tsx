import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DIMENSIONS } from '../../app/styles/dimensions';
import { config } from "../../config";

import * as React from 'react';
import { Image, Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

export default (props) => {
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            title: '',
            description: '',
            subject: '',
        }
    });
    const onSubmit = async (data) => {
        let authToken = await AsyncStorage.getItem('auth-token');
        axios.post(config.api_url + "/events", {
            'title': data.title,
            'description': data.description,
            'subject': data.subject
        }, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + authToken,
            }
        }).then(async (response) => {
            console.log("SUCCESS...");
            console.log(response);
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

    useEffect(() => {
    }, []);

    console.log('errors', errors);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>Title</Text>
                <ErrorMessage errors={errors} name="title" message="This is required"
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
                    name="title"
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
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="description"
                    rules={{ required: true }}
                />

                <Text style={styles.label}>Subject</Text>
                <ErrorMessage errors={errors} name="subject" message="This is required"
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
                    name="subject"
                    rules={{ required: true }}
                />


                <View style={styles.button}>
                    <Button
                        style={styles.buttonInner}
                        color
                        title="Add"
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
