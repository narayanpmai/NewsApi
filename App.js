import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './App/NewsScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './App/Navigation/HomeNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer >
        <HomeNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',

  },
});
