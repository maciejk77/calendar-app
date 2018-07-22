import React from 'react';
import '../styles/calendar_item.css';

const CalendarItem = (props) => {
  return (
    <div className="calendar_item">

      <div className="top-bar">
        <div className="top-bar__day">DAY: {props.day}</div>
        <div className="top-bar__event">EVENT: </div>
      </div>

      <div className="bottom-box">
        <div className="bottom-box__finished">LINE THROUGH</div>
        <div className="bottom-box__not-finished">LINE MID</div>
      </div>

    </div>
  )
}

export default CalendarItem;