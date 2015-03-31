import React from 'react';
import Item from './item';

var Items = React.createClass({
  render: function () {
    return (
      <Item state={state}></Item>
    );
  }
});

export default Items;