import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation, setTheme }) {
  const [nombre, setNombre] = useState('');
  const [hora, setHora] = useState('');
  const [modoOscuro, setModoOscuro] = useState(false);

  // Actualizar la hora cada segundo
  useEffect(() => {
    const intervalo = setInterval(() => {
      const now = new Date();
      setHora(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const guardarNombre = async () => {
    if (nombre.trim() === '') {
      Alert.alert('Error', 'Por favor escribe tu nombre.');
      return;
    }
    await AsyncStorage.setItem('nombreGuardado', nombre);
    navigation.navigate('Detalle', { nombre });
  };

  const toggleTema = () => {
    const nuevoTema = !modoOscuro;
    setModoOscuro(nuevoTema);
    setTheme(nuevoTema ? 'dark' : 'light');
  };

  return (
    <View style={[styles.container, { backgroundColor: modoOscuro ? '#222' : '#fff' }]}>
      <Text style={[styles.titulo, { color: modoOscuro ? '#fff' : '#000' }]}>Bienvenido</Text>
      <TextInput
        placeholder="Ingresa tu nombre"
        style={[styles.input, { color: modoOscuro ? '#fff' : '#000', borderColor: modoOscuro ? '#fff' : '#000' }]}
        placeholderTextColor={modoOscuro ? '#ccc' : '#888'}
        value={nombre}
        onChangeText={setNombre}
      />
      <Button title="Ir a Detalle" onPress={guardarNombre} />
      <Text style={{ marginTop: 20, color: modoOscuro ? '#fff' : '#000' }}>Hora actual: {hora}</Text>

      <View style={styles.switchRow}>
        <Text style={{ color: modoOscuro ? '#fff' : '#000' }}>Modo oscuro</Text>
        <Switch value={modoOscuro} onValueChange={toggleTema} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
  switchRow: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    gap: 10,
  },
});
