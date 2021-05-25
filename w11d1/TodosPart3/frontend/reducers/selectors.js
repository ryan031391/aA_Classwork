export const selectTodos = (state) => {
  const todosArray = Object.values(state.todos);
  return todosArray;
};