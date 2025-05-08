import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import { Appearance } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(colorScheme);

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });
    return () => listener.remove();
  }, []);

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" options={{ title: 'Bienvenido' }}>
          {(props) => <HomeScreen {...props} setTheme={setTheme} />}
        </Stack.Screen>
        <Stack.Screen name="Detalle" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
