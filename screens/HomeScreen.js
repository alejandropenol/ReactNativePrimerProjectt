import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
export default function HomeScreen({ navigation }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: Date.now().toString(), text: task }]);
      setTask("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis tareas</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe una tarea"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Agregar" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Detalle", { tarea: item })}
          >
            <Text style={styles.task}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderColor: "#ccc", borderWidth: 1, padding: 10, marginBottom: 10 },
  task: {
    padding: 10,
    backgroundColor: "#add8e6",
    marginBottom: 5,
    borderRadius: 5,
  },
});
