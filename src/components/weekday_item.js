import React from 'react';
import '../styles/weekday_item.css';
import cn from 'classnames';

const WeekdayItem = (props) => {
  return (
    <div className="weekday_item">
      <div>{props.day}</div>
      <div className={cn('dot', {'dot--weekend': props.is_weekend })}></div>
    </div>
  )
}

export default WeekdayItem;