import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import {
  ActivityIndicator,
  Divider,
  HelperText,
  Portal,
  Snackbar,
  Text,
} from 'react-native-paper';
import { ITodoModel } from '../todo-model';
import { getTodos } from '../todo-service';

const TodoListScreen: React.FC<void> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [todos, setTodos] = useState<ITodoModel[]>([]);

  const fetch = async () => {
    const { data } = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      {loading ? (
        <View style={styles.loaderBase}>
          <ActivityIndicator animating size="large" />
        </View>
      ) : (
        <View style={styles.base}>
          {todos.map(t => (
            <View key={t.id}>
              <Text>{t.title}</Text>
            </View>
          ))}
        </View>
      )}
    </>
  );
};

export default TodoListScreen;

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loaderBase: {
    padding: 16,
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
