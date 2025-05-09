import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export default function HomeScreen({ navigation }) {
  const tasks = [
    { id: '1', title: 'trabajar' },
    { id: '2', title: 'Ver tutoriales' },
    { id: '3', title: 'Estudiar React Native' },
    { id: '4', title: 'ver series'},
    
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TaskDetail', { title: item.title })}>
            <Text style={styles.task}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, paddingHorizontal: 20 },
  task: { padding: 20, fontSize: 18, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});
