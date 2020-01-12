import React from 'react';
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
import TodoView from '../components/TodoView';

const TodoListScreen: React.FC<void> = () => {
  const [todos, setTodos] = React.useState<ITodoModel[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const fetch = async () => {
    setLoading(true);
    try {
      const { data } = await getTodos(); // response.data
      setTodos(data);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };

  React.useEffect(() => {
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
          {todos.map(todo => (
            <View key={todo.id}>
              <TodoView item={todo} />
            </View>
          ))}
        </View>
      )}
      <>
        <Portal>
          <Snackbar
            visible={error.length > 0}
            duration={5000}
            action={{
              label: 'close [x]',
              onPress: () => {
                setError('');
              },
            }}
            onDismiss={async () => {
              setError('');
              await fetch();
            }}>
            {error}
          </Snackbar>
        </Portal>
      </>
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
