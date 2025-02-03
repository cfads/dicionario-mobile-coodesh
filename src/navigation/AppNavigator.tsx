import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, WordScreen } from '../screens';
import { Word } from '../types/types';
import { NavigationContainer } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Word: Word;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Word" component={WordScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
