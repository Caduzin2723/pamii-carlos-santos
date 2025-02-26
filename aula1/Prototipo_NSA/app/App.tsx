//Por Carlos Santos e Kauã Gomes
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./index"; // Arquivo de login
import HomeScreen from "./home"; // Arquivo "home.tsx"
import AulasScreen from "./aulas"; // Arquivo "aulas.tsx"
import DeclaracoesScreen from "./declaracao"; // Arquivo "declaracao.tsx"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Aulas" component={{ AulasScreen }} />
        <Stack.Screen name="Declaraoes" component={{ DeclaracoesScreen }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
