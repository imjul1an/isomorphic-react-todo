import React from 'react';

var Task = React.createClass({
  handleDelete: function(e) {
    this.props.onDelete(this.props.task);
  },

  render: function () {
    return (
      <div>
        {this.props.task.description}
        <button onClick={this.handleDelete} className="btn btn-danger">x</button>
      </div>
    );
  }
});

export default Task;