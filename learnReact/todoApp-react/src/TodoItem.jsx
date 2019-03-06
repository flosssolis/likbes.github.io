/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { hot } from 'react-hot-loader';

import styles from './app.scss';

const TodoItem = props => {
  const completedStyles = {
    fontStyle: 'italic',
    color: '#cdcdcd',
    textDecoration: 'line-through',
  };

  return (
    <div className={styles.todoItem}>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.changeEvent(props.key)}
      />
      <p style={props.completed ? completedStyles : null}>{props.todo}</p>
    </div>
  );
};

export default hot(module)(TodoItem);
