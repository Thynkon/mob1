import Details from '../../../components/events/Details';

export default ({ route, navigation }) => {
    let { event } = route.params

    return (
        <Details event={event}></Details>
    );
}