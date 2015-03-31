import React from 'react';

let Modules = React.createClass({

  render: function() {
    var language = this.props.metadata.language;

    var layouts = {
    };

    function getModule(item){
      return layouts[item.layout];
    }

    function createModule(item) {
      var Component = getModule(item);
      if(Component !== undefined){
        return (
          <Component
            key={item.id}
            itemId={item.id}
            item={item}
            language={language}>
          </Component>
        );
      }
    }

    return (
      <div className="article-page">
        { this.props.state.map(createModule) }
      </div>
    );
  }
});

export default Modules;