import { StyleSheet } from 'react-native';
import { DIMENSIONS } from '../../../styles/dimensions';

export const styles = StyleSheet.create({
    label: {
        marginTop: 20,
        marginLeft: 5,
    },
    container: {
        flex: 1,
        padding: 8,
    },
    title: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 25,
    },
    input: {
        padding: 5,
        borderRadius: DIMENSIONS.inputBorderRadius,
        height: DIMENSIONS.height,
        marginTop: 10,
        marginRight: 5,
        marginLeft: 5,
        // margin: DIMENSIONS.margin,
        backgroundColor: '#fff',
    },
});