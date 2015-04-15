import _ from 'lodash';
import React from 'react';
import Task from './task';

var Tasks = React.createClass({
  handleAdd: function() {
    var newTask = this.refs.newTask.getDOMNode().value;
    this.state.tasks.push({description: newTask});
    this.setState({
      tasks: this.state.tasks
    });
  },

  handleDelete: function(task) {
    var newTasks = _.without(this.state.tasks, task);

    this.setState({
      tasks: newTasks
    });
  },

  getInitialState: function() {
    return {tasks: this.props.state};
  },

  render: function () {

    var tasks = this.state.tasks.map(function(task) {
      return <Task key={task.id} task={task.description} onDelete={this.handleDelete}/>;
    }.bind(this));

    return (
      <div className="container jumbtron">
        <h2> TODO: </h2>
        <input ref="newTask" type="text" />
        <button className="btn btn-primary" onClick={this.handleAdd}>+</button>
        { tasks }
      </div>
    );
  }
});

export default Tasks;