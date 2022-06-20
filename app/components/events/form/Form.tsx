import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useEffect } from 'react';
import { config } from "../../../../config";

import { ErrorMessage } from '@hookform/error-message';
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Text, TextInput, View } from 'react-native';
import { EventsContext } from '../../../../contexts/eventsContext';

import { styles } from './Styles';

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
            setEvents(events => [...events, response.data],)
            props.navigation.goBack();
        }).catch(err => {
            console.log(err);
        });
    };

    let { events, setEvents } = useContext(EventsContext);

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
