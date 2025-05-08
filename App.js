import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks();
  }, [tasks]);

  const loadTasks = async () => {
    try {
      const saved = await AsyncStorage.getItem('tasks');
      if (saved) setTasks(JSON.parse(saved));
    } catch (e) {
      console.error('Error al cargar tareas:', e);
    }
  };

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (e) {
      console.error('Error al guardar tareas:', e);
    }
  };

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, { id: Date.now().toString(), title: task }]);
    setTask('');
  };

  const deleteTask = (id) => {
    Alert.alert('Eliminar', '¿Deseas eliminar esta tarea?', [
      { text: 'Cancelar' },
      { text: 'Eliminar', onPress: () => setTasks(tasks.filter((t) => t.id !== id)) }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Tareas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nueva tarea"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Agregar" onPress={addTask} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => deleteTask(item.id)}>
            <Text style={styles.task}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    marginRight: 10,
    paddingVertical: 5,
  },
  task: {
    padding: 10,
    fontSize: 18,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
  },
});
  