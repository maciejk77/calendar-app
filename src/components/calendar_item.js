import React from 'react';
import '../styles/calendar_item.css';

const CalendarItem = (props) => {
  return (
    <div className="calendar_item">

      <div className="top-bar">
        <div className="top-bar__day">{props.day}</div>
        <div className="top-bar__event">{props.event}</div>
      </div>

      <div className="bottom-box">
        <div className="bottom-box__finished">----------------------</div>
        <div className="bottom-box__not-finished">-----------|</div>
      </div>

    </div>
  )
}

export default CalendarItem;