import React, { Component } from 'react';
import TodoItems from '../ToDoItems';
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  addItem = e => {
    if (this._inputElement.value !== '') {
      const newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem),
        };
      });

      this._inputElement.value = '';
    }

    e.preventDefault();
  }

  deleteItem = key => {
    const { items } = this.state;
    const filteredItems = items.filter(function (item) {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems,
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="enter task"
            />
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
