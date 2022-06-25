import _ from 'lodash';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { EventsContext } from '../../contexts/eventsContext';
import Api from '../requests/Request';

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

    let { events, setEvents } = useContext(EventsContext);
    const api = new Api();

    async function suppress() {
        api.deleteEvent(props.event.id).then(async (response) => {
            let newList = _.filter(events, event => { return event.id !== props.event.id; })
            setEvents(newList);
        });
    }

    return (
        <Card>
            <Card.Title title={props.event.title} style={styles.title} />
            <Card.Content>
                <Paragraph>{props.event.description}</Paragraph>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
                <Button size="small" onPress={() => { props.navigation.navigate('DetailsEvents', { event: props.event }) }}>Learn More</Button>
                <Button size="small" onPress={async () => suppress()}>
                    <Ionicons style={[styles.icon, styles.delete]} name="trash" size={30} />
                </Button>
            </Card.Actions>
        </Card>
    );
}