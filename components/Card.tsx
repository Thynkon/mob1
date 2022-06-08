import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BasicCard(props) {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 8,
        },
        title: {
            fontWeight: 'bold',
        },
        cardActions: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
        },
        delete: {
            color: '#ec5990',
        }
    });

    function suppress() {
        console.log("HOHO");
    }
    return (
        <Card>
            <Card.Title title={props.event.title} style={styles.title} />
            <Card.Content>
                <Paragraph>{props.event.description}</Paragraph>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
                <Button size="small" onPress={() => { props.navigation.navigate('DetailsEvents') }}>Learn More</Button>
                <Button size="small" onPress={() => { suppress() }}>
                    <Ionicons style={[styles.icon, styles.delete]} name="trash" size={30} />
                </Button>
            </Card.Actions>
        </Card>
    );
}