import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {flex: 1}]}>Step One</Text>
      <Text style={[styles.title, {flex: 1}]}>Step Two</Text>
      <Text style={[styles.title, {flex: 1}]}>Step Three</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    backgroundColor: 'orange',
    //alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 22,
    backgroundColor: 'gray',
    color: 'blue',
    margin: 15,
  }
});
