import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTask: (state, { payload }) => {
      for (let todo of state) {
        if (todo.title === payload) {
          return state;
        }
      }
      const todo = {
        title: payload,
        isCompleted: false,
      };
      state.push(todo);
    },
    toggleTask: (state, { payload }) => {
      console.log(state, payload)
      // console.log(state);
      // console.log(action);
      // Object.assign(payload.todo, {
      //   ...payload.todo, isCompleted: !payload.todo.isCompleted
      // });

      // state.map((todo) => {
      //   if (todo.title === action.value) {
      //     return { ...todo, isCompleted: !todo.isCompleted };
      //   }
      //   return todo;
      // });
    },
    deleteTask: (state, action) => {
      // state.filter((todo) => {
      //   return todo.title !== action.value;
      // });
    },
    editTask: (state, { payload }) => {
    }
  }
});

export const { addTask, toggleTask, deleteTask, editTask } = todoSlice.actions;

export default todoSlice.reducer;
