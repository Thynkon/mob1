import Details from '../../../components/news/Details';

export default ({ navigation }) => {
    let news = {'title': 'News title', 'description': 'News description', 'subject': 'News subject'};

    return (
        <Details news={news}></Details>
    );
}