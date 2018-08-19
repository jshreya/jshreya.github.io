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
        <input type="button" value="Done!"/>
        <input type="button" value="Delete"/>
      </li>
    );
    return <ul> {list} </ul>;
  }
}
ReactDOM.render(<ToDoList/>, document.getElementById('todoList'));

// set up for adding new items
