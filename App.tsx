import { StyleSheet, Text, View } from 'react-native';
import { AuthenticationForm } from './components/AuthenticationForm';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <AuthenticationForm></AuthenticationForm>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
