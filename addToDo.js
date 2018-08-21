'use strict';

// set up for adding new items
var NewToDo = React.createClass({
  render: function() {
    const addToDo = (
      <div id="newToDo">
        <input type="text" id="newToDoItem" ref="newToDoItem" required/>
        <span className="button" id="add" onClick={this.addNewToDoItem.bind(this)}> <span className="glyphicon glyphicon-plus"></span> </span>
      </div>
    );
    return addToDo;
  }
  addNewToDoItem: function(e) {
    e.preventDefault();
    e.stopPropagation();
    //alert("Add " + this.refs.newToDoItem.value);
    this.props.addToDo(this.refs.newToDoItem.value);
    this.refs.newToDoItem.value="";
  }
});
//export NewToDo;
