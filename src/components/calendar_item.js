import React from 'react';
import '../styles/calendar_item.css';

const CalendarItem = (props) => {
  return (
    <div className="calendar_item">
      CALENDAR ITEM {props.day}
    </div>
  )
}

export default CalendarItem;