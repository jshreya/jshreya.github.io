'use strict';

// set up for adding new items
class NewToDo extends React.Component {
  render() {
    const addToDo = (
      <div>
        <input type="text" id="newToDoItem" ref="newToDoItem"/>
        <input type="button" id="addToDoItem" onClick={this.addNewToDoItem.bind(this)}/>
      </div>
    );
    return addToDo;
  }
  addNewToDoItem() {
    alert("Add " + this.refs.newToDoItem.value);
    this.props.addToDo(this.refs.newToDoItem.value);
  }
}
module.exports = NewToDo;
