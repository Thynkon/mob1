import Details from '../../../app/components/events/details/Details';

export default ({ route, navigation }) => {
    let { event } = route.params

    return (
        <Details event={event}></Details>
    );
}