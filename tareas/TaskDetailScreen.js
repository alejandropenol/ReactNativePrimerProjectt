import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskDetailScreen({ route }) {
  const { title } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle de la tarea</Text>
      <Text style={styles.task}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  task: { fontSize: 18, backgroundColor: '#eee', padding: 20, borderRadius: 5 },
});
