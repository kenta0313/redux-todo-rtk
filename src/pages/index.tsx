import type { NextPage } from 'next';
import React from 'react';
import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoSelector } from '../modules/selector';
import { Todo, todoSlice } from '../modules/slice/todos';

const Home: NextPage = () => {
  const [newTitleName, setTitleName] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(todoSelector);
  const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleName(event.target.value);
  }, []);
  const clickButton = () => {
    dispatch(addTodo({title: newTitleName}));
    setTitleName("");
  };

  const deleteButton = (id: Todo['id']) => {
    dispatch(deleteTodo({ id: id }));
  };

  const completeButton = (id: Todo['id']) => {
    dispatch(completeTodo({ id: id }));
  };

  return (
    <div>
      <div>Hello Nextjs</div>
      <input type="text" value={newTitleName} onChange={handleChange} />
      <button type="button" onClick={clickButton}>送信</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.check ?
            <h3>{todo.title}</h3>
          :
            <>完了です</>
          }
          <button onClick={() => completeButton(todo.id)}>完了</button>
          <button onClick={() => deleteButton(todo.id)}>☓</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
