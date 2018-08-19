'use strict';

// set to do list heading
const today = new Date();
const heading = <h1> To Do list for {today.getMonth() + 1}/{today.getDate()}/{today.getFullYear()} : </h1>;
ReactDOM.render(heading, document.getElementById('todoHeading'));

// set to do list
class ToDoList extends React.Component {
  constructor(props) {
    this.state.todoItems = ["Grocery shopping", "Clean room"];
    this.state.completedItems = [];
  }
  render() {
    const list = getToDoItems();
    return <ul> {list} </ul>;
  }
  getToDoItems() {
    const todoItems = [];
    this.state.todoItems.forEach(function(element) {
      todoItems.push(<li>{element}</li>);
    });
    return todoItems;
  }
}
ReactDOM.render(<ToDoList/>, document.getElementById('todoList'));

// set up for adding new items
