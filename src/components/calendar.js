import React, { Component } from 'react';
import CalendarItem from './calendar_item.js';
import '../styles/calendar.css';

class Calendar extends Component {

  render_items() {
    if(!this.props) { return null };
    return this.props.data.map( item =>
      <div>
        <CalendarItem
        day={item.day} 
        />
      </div>
    )
  }

  render() {
    return (
      <div className="calendar">
        {this.render_items()}
      </div>
    )
  }

}

export default Calendar;