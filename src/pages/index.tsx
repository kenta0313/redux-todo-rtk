import type { NextPage } from 'next'
import React from 'react';
import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { todoSelector } from '../modules/selector';
import { todoSlice } from '../modules/slice/todos';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [newTitleName, setTitleName] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(todoSelector);
  const { addTodo } = todoSlice.actions;
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleName(event.target.value);
  }, []);
  const clickButton = () => {
    dispatch(addTodo(newTitleName))
  };
  console.log(todos);

  return (
    <div className={styles.container}>
      <input type="text" value={newTitleName} onChange={handleChange} />
      <button type="button" onClick={clickButton}>送信</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default Home
