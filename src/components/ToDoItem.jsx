function TodoItem({ todo }) {
    return (
      <div>
        <h3>{todo.title}</h3>
        <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      </div>
    );
  }
  
  export default TodoItem;
  