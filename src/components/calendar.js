import React, { Component } from 'react';
import CalendarItem from './calendar_item.js';
import WeekdayItem from './weekday_item.js';
import '../styles/calendar.css';
import '../styles/weekdays.css';

class Calendar extends Component {

  render_calendar() {
    if(!this.props) { return null };
    return this.props.calendar.map( item =>
      <div>
        <CalendarItem
        day={item.day} 
        />
      </div>
    )
  }

  render_weekdays() {
    if(!this.props) { return null };
    return this.props.weekdays.map( item =>
      <div>
        <WeekdayItem
        day={item.day} 
        />
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="weekdays">
        {this.render_weekdays()}
        </div>
        <div className="calendar">
          {this.render_calendar()}
        </div>
      </div>
    )
  }

}

export default Calendar;