'use strict';

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
    return <ul> {list} </ul>;
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

  }
}
ReactDOM.render(<ToDoList/>, document.getElementById('todoList'));

// set up for adding new items
