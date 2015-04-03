import React from 'react';
import Tasks from './tasks';

var App = React.createClass({
  render: function () {
    return (
      <div className="inner cover">
        <h1 className="cover-heading">Cover your page.</h1>
        <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p className="lead">
          <a href="#" className="btn btn-lg btn-default">Learn more</a>
        </p>
        <Tasks state={this.props.state}></Tasks>
      </div>
    );
  }
});

export default App;