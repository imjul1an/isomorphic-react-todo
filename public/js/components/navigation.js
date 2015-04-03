import React from 'react';

let Navigation = React.createClass({
  render: function() {
    return (
      <div className="masthead clearfix">
        <div className="inner">
          <h3 className="masthead-brand">Cover</h3>
          <nav>
            <ul className="nav masthead-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
});

export default Navigation;