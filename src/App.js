import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import './components/TodoComponents/Todo.css';

const TODOList = [
  {
    name: 'TEST',
    id: 123,
    completed: false
  },
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: TODOList 
    };

  }

  toggleItem = id => {
    console.log(id);
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      items: [...this.state.items, newItem]
    });
  };
  
      // items: ItemData 
  // console.log(ItemData)
  clearCompleted = () => {
    this.setState({
      items: this.state.items.filter(item => !item.completed)
    });
  };


  render() {
    return (
     <>
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        {/* </div>
      <div> */}
        <TodoList
          items={this.state.items}
          toggleItem={this.toggleItem} />
       </div>
     
      </>
    );
  }
}

export default App;