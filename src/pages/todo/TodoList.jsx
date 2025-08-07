// import { useContext } from "react"
// import { todoContext } from "../context/todo/todoContext";
import { addTask, toggleTask, deleteTask } from "../../redux/slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { SquarePen } from 'lucide-react';

function TodoApp() {
  return (
    <main
      className="border flex flex-col"
    >
      <TodoList />
      <TodoForm />
    </main>
  )
}

function TodoList() {
  // const { state, dispatch } = useContext(todoContext);
  // const removeTodo = (todoTitle) => {
  //   dispatch({ type: "DELETE_TODO", value: todoTitle });
  // };
  // const toggleTodo = (todoTitle) => {
  //   dispatch({ type: "TOGGLE_TODO", value: todoTitle });
  // };
  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <>
      {state.length === 0 && (
        <p>belum ada list terkini</p>
      )}
      {state.length > 0 && (
        state.map((todo, i) => {
          return (
            <div key={i}
              className="flex justify-between border items-center"
            >
              <div className="flex gap-2 items-center">
                <h2>{todo.title}</h2>
                <SquarePen
                  size={20}
                  className="hover:cursor-pointer hover:opacity-[.6]"
                  onClick={() => <Input />}
                />
              </div>
              <div
                onClick={() => dispatch(toggleTask(todo))}
              // onClick={() => toggleTodo(todo.title)}
              >
                <p>{todo.isCompleted ? "Selesai" : "Belum"}</p>
              </div>
              <div
                className="hover:opacity-[.6] hover:cursor-pointer bg-red-600
                rounded-full size-8 flex font-semibold items-center justify-center"
                onClick={() => dispatch(deleteTask(todo.title))}
              // onClick={() => {
              //   removeTodo(todo.title);
              // }}
              >
                x
              </div>
            </div>
          );
        })
      )}
    </>
  )
}

function Input() {
  return <input type="text" />;
}

function TodoForm() {
  // const { dispatch } = useContext(todoContext);
  // const addTodo = (todo) => {
  //   dispatch({ type: "ADD_TODO", value: todo });
  // };
  // const todo = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();

  return (
    <form action=""
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTask(e.target.todo.value));
      }}
    // onSubmit={(e) => {
    //   e.preventDefault();
    //   addTodo({ title: e.target.todo.value, isCompleted: false });
    // }}
    >
      <input type="text" name="todo" placeholder="judul todo-nya"
        className="border p-1"
      />
      <button
        className="border px-2 p-1 hover:cursor-pointer hover:opacity-[.6]"
      >add todo+</button>
    </form>
  );
}

export default TodoApp;
