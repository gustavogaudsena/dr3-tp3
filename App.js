import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TP3 from './screens/TP3';
import TP3_01 from './screens/TP3/01';
import TP3_02 from './screens/TP3/02';
import TP3_03 from './screens/TP3/03';
import TP3_06 from './screens/TP3/06';
import TP3_04 from './screens/TP3/04';
import TP3_05 from './screens/TP3/05';
import TP3_07 from './screens/TP3/07';
import TP3_08 from './screens/TP3/08';
import TP3_09 from './screens/TP3/09';
import TP3_10 from './screens/TP3/10';
import Toast from 'react-native-toast-message';
import TP3_11 from './screens/TP3/11';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TP3'>
        <Stack.Screen name="TP3" component={TP3} />
        <Stack.Screen name="TP3 - 1" component={TP3_01} />
        <Stack.Screen name="TP3 - 2" component={TP3_02} />
        <Stack.Screen name="TP3 - 3" component={TP3_03} />
        <Stack.Screen name="TP3 - 4" component={TP3_04} />
        <Stack.Screen name="TP3 - 5" component={TP3_05} />
        <Stack.Screen name="TP3 - 6" component={TP3_06} />
        <Stack.Screen name="TP3 - 7" component={TP3_07} />
        <Stack.Screen name="TP3 - 8" component={TP3_08} />
        <Stack.Screen name="TP3 - 9" component={TP3_09} />
        <Stack.Screen name="TP3 - 10" component={TP3_10} />
        <Stack.Screen name="TP3 - 11" component={TP3_11} />
      </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
