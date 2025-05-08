import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetailScreen({ route }) {
  const [nombreGuardado, setNombreGuardado] = useState('');
  const nombreParam = route.params?.nombre;

  useEffect(() => {
    const cargarNombre = async () => {
      const nombre = await AsyncStorage.getItem('nombreGuardado');
      setNombreGuardado(nombre || 'Desconocido');
    };
    cargarNombre();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalle</Text>
      <Text>Nombre recibido por navegación: {nombreParam}</Text>
      <Text>Nombre recuperado desde AsyncStorage: {nombreGuardado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
