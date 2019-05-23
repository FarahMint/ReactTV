import React, { Component } from 'react';
 

/**
 * -component displays the name of the tab 
 * -and adds an additional class if the tab is active.
 * -When clicked, the compo fire an handler 
 * -then Tabs compo knows which tab should be active.
 */


class Tab extends Component {
 
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'tab-item';

    if (activeTab === label) {
      className = `${className}-active`
    }

    return (
      <div
        className={className}
        onClick={onClick}
      >
        {label}
      </div>
    );
  }
}

export default Tab;