import { ErrorMessage } from '@hookform/error-message';
import * as React from 'react';
import { useContext, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Text, TextInput, View } from 'react-native';

import { config } from "../../../../config";
import { UserContext } from '../../../../contexts/userContext';
import Api from '../../../requests/Request';
import ImagePicker from '../ImagePicker';
import { styles } from './Styles';

export default (props) => {
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            picture: '',
            username: '',
            email: '',
            description: '',
            wallet_address: '',
        }
    });

    const onSubmit = async (data) => {
        console.log(data);
        setUser((prev) => ({
            ...prev,
            picture: data.picture,
            username: data.username,
            email: data.email,
            description: data.description,
            wallet_address: data.wallet_address,

        }));

        api.updateProfile({
            '_method': 'PATCH',
            'username': data.username,
            'email': data.email,
            'description': data.description,
            'wallet_address': data.wallet_address,
        }).then(async (response) => {
            props.navigation.goBack();
        }).catch(err => {
            console.log(err);
        });
    };

    const { user, setUser } = useContext(UserContext);
    const api = new Api();

    function handleRefresh() {
        reset({
            email: user.email,
            username: user.username,
            wallet_address: user.wallet_address,
            description: user.description == null ? '' : user.description,
            picture: user.picture,
        })

    }

    useEffect(() => {
        handleRefresh();
    }, []);

    return (
        <View style={styles.container}>
            <ImagePicker style={styles.avatar} source={`${config.img_url}/${user.picture}`} />

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
                <ErrorMessage errors={errors} name="wallet_address" message="This is required"
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
                    name="wallet_address"
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
