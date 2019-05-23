import React, { Component } from 'react';

/*
- component keeps track of which tab is active
- displays a list of tabs 
-the content for the active tab
*/

 
import Tab from './Tab';

import "./tabs.css";
class Tabs extends Component {
 
     state = {
      activeTab: this.props.children[0].props.label,
    };
  

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
        <React.Fragment>
<section className="tabs">
<div className="container">
        
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
      
        </div>
        </section>
        <div className="container">
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return null;
            return child.props.children;
          })}
        </div>
        </div>
      
      </React.Fragment>
    );
  }
}

export default Tabs;