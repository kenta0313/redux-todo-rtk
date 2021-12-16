import type { NextPage } from 'next';
import React from 'react';
import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoSelector } from '../modules/selector';
import { Todo, todoSlice } from '../modules/slice/todos';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [newTitleName, setTitleName] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(todoSelector);
  const { addTodo, deleteTodo } = todoSlice.actions;
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleName(event.target.value);
  }, []);
  const clickButton = () => {
    dispatch(addTodo({title: newTitleName}));
  };
  console.log(todos);

  const deleteButton = (id: Todo['id']) => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <div className={styles.container}>
      <input type="text" value={newTitleName} onChange={handleChange} />
      <button type="button" onClick={clickButton}>送信</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <button onClick={() => deleteButton(todo.id)}>☓</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
