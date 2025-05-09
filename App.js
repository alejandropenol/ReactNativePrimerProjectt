import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './assets/seguridad/LoginScreen';
import HomeScreen from './tareas/HomeScreen';  
import TaskDetailScreen from './tareas/TaskDetailScreen';  

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Iniciar sesión' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Mis Tareas' }} />
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen} options={{ title: 'Detalle de Tarea' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
