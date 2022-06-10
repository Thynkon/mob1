import { DIMENSIONS } from '../../app/styles/dimensions';

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default (props) => {
    const styles = StyleSheet.create({
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

    return (
        <View style={styles.container}>
            <Text style={[styles.label, styles.title]}>{props.event.title}</Text>
            <Text style={[styles.label, styles.input]}>{props.event.subject}</Text>
            <Text style={[styles.label, styles.input]}>{props.event.description}</Text>
        </View>
    );
}