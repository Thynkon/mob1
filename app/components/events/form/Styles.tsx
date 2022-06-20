import { Image, Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { DIMENSIONS } from '../../../styles/dimensions';

export const styles = StyleSheet.create({
    label: {
        marginTop: 20,
        marginLeft: 5,
    },
    avatarContainer: {
        flex: 1,
        textAlign: 'center',

    },
    avatar: {
        width: DIMENSIONS.avatarSize,
        height: DIMENSIONS.avatarSize,
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
        borderRadius: DIMENSIONS.inputBorderRadius,
        marginLeft: 5,
        marginRight: 5,
    },
    container: {
        flex: 1,
        padding: 8,
    },
    input: {
        padding: 5,
        borderRadius: DIMENSIONS.inputBorderRadius,
        height: DIMENSIONS.height,
        marginTop: 5,
        marginRight: 5,
        marginLeft: 5,
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
        borderRadius: DIMENSIONS.inputBorderRadius,
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
