import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './src/screens/home';
import Cadastro from './src/screens/cadastro';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>

          <Stack.Screen 
            name="home" 
            component={Home} 
            options={{ headerShown: false }} 
          />

          <Stack.Screen 
            name="despesa" 
            component={Cadastro} 
            options={{ 
              title: "Nova Despesa",
              headerTitleAlign: "center",
              headerShadowVisible: false
            }}  
          />

        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="light" translucent={false} />
    </>
  );
}
