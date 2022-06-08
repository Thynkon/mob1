import Details from '../../../components/events/Details';

export default ({ navigation }) => {
    let event = {'title': 'Event title', 'description': 'Event description', 'subject': 'Event subject'};

    return (
        <Details event={event}></Details>
    );
}