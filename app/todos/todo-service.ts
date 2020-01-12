import { api } from './../api-config';
import { ITodoModel } from './todo-module';

export async function getTodos() {
  return await api.get('todo');
}

export async function deleteTodo(id: string) {
  return await api.delete('todos/' + id);
}
