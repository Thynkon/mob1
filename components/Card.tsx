import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert, StyleSheet, View } from 'react-native';
import { createTheme, ThemeProvider } from '@mui/material';
import Ionicons from 'react-native-vector-icons/Ionicons';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard(props) {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 8,
        },
        cardActions: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
        },
        card: {
            marginTop: 5,
            marginBottom: 5,
        },
        icon: {
            width: 30,
            height: 30,
            marginRight: '5%',
        },
        delete: {
            color: '#b22923',
        }
    });

    function suppress() {
        console.log("HOHO");
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{props.news.title}</Typography>
                <Typography variant="body2">{props.news.description}</Typography>
            </CardContent>
            <CardActions>
                <View style={styles.cardActions}>
                    <Button size="small" onClick={() => { props.navigation.navigate('DetailsNews') }}>Learn More</Button>
                    <Button size="small" onClick={() => { suppress() }}>
                        <Ionicons style={[styles.icon, styles.delete]} name="trash" size={30} />
                    </Button>
                </View>
            </CardActions>
        </Card>
    );
}
