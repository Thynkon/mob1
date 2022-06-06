import { StyleSheet, View } from "react-native";
import BasicCard from "../../components/Card";

export default ({ navigation }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 8,
        },
        card: {
            marginTop: 5,
            marginBottom: 5,
        }
    });

    let news = { title: "news title", description: "news description" };
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <BasicCard news={news} navigation={navigation}></BasicCard>
            </View>
            <View style={styles.card}>
                <BasicCard news={news} navigation={navigation}></BasicCard>
            </View>
        </View>
    );
}