import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { tarea } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle de la tarea</Text>
      <Text style={styles.text}>{tarea.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 20 },
  text: { fontSize: 18, color: '#333' },
});
