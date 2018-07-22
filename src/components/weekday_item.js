import React from 'react';
import '../styles/weekday_item.css';

const WeekdayItem = (props) => {
  return (
    <div className="weekday_item">
      <div>{props.day}</div>
      <div>x</div>
    </div>
  )
}

export default WeekdayItem;