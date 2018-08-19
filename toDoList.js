'use strict';

import NewToDo from 'addToDo.js';

// set to do list heading
const today = new Date();
const heading = <h1> To Do list for {today.getMonth() + 1}/{today.getDate()}/{today.getFullYear()} : </h1>;
ReactDOM.render(heading, document.getElementById('todoHeading'));

// set to do list
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        todoItems: ["Grocery shopping", "Clean room"],
        completedItems: []
    };
  }
  render() {
    //const list = this.getToDoItems();
    const list = this.state.todoItems.map((element, index) =>
      <li key={index}>
        {element}
        <input type="button" onClick={this.itemCompleted.bind(this, index)} value="Done!"/>
        <input type="button" onClick={this.deleteItem.bind(this, index)} value="Delete"/>
      </li>
    );
    return (
        <div>
        <ul>
          {list}
        </ul>
        <NewToDo addToDo={this.addItem.bind(this)}/>
        </div>
    );
  }

  itemCompleted(key) {
      alert("completed " + this.state.todoItems[key]);
      this.setState((prevState, props) => {
        const updatedList = prevState.todoItems.filter((element, index) => index !== key);
        return {todoItems: updatedList};
      });
  }
  deleteItem(key) {
    alert("delete " + this.state.todoItems[key]);
    this.setState((prevState, props) => {
      const updatedList = prevState.todoItems.filter((element, index) => index !== key);
      return {todoItems: updatedList};
    });
  }
  addItem(item) {
    alert("Adding " + item);
    this.setState((prevState, props) => {
      prevState.todoItems.push(item);
      return {todoItems: prevState.todoItems};
    });
  }
}
ReactDOM.render(<ToDoList/>, document.getElementById('todoList'));
