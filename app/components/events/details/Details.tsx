import * as React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Styles';

export default (props) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.label, styles.title]}>{props.event.title}</Text>
            <Text style={[styles.label, styles.input]}>{props.event.subject}</Text>
            <Text style={[styles.label, styles.input]}>{props.event.description}</Text>
        </View>
    );
}