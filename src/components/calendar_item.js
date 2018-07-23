import React, { Component } from 'react';
import '../styles/calendar_item.css';
import cn from 'classnames';

class CalendarItem extends Component {

  render() {
    //debugger;
    return (   
      <div className={ cn('calendar_item', {'calendar_item--highlighted': this.props.event === 'TODAY'} )}>

        <div className="top-bar">
          <div className="top-bar__day">{this.props.day}</div>
          <div className="top-bar__event">{this.props.event}</div>
        </div>

        <div className="bottom-box">
          <div className="bottom-box__not-finished">-----------|</div>
          <div className="bottom-box__finished">----------------------</div>
        </div>
      </div>
    )
  }
}

export default CalendarItem;