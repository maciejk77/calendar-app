import React, { Component } from 'react';
import '../styles/calendar_item.css';
import cn from 'classnames';

class CalendarItem extends Component {

  render_status() {
    //debugger;
    return this.props.people.map( (item, index) =>
      <div key={index}>

        { item.continues &&
          <div style={{color: item.colour }} className="bottom-box__not-finished">
            {item.label ? item.name : ''} {/* show or not to show initials eg. 'BG' */}
           
              <svg height="15" width="100">
                {item.label ? item.name : ''}
                <line x1="0" y1="10" x2="100" y2="10" 
                      style={{stroke: item.colour, strokeWidth: 5}} />
              </svg>
    
          </div>
        }

        { item.continues === false && // explicitly false as it can also be undefined
          <div style={{color: item.colour }} className="bottom-box__not-finished">
            {item.label ? item.name : ''} {/* show or not to show initials eg. 'BG' */}
            
            <svg height="15" width="50">
                {item.label ? item.name : ''}
                <line x1="0" y1="10" x2="50" y2="10" 
                style={{stroke: item.colour, strokeWidth: 5}} />
            </svg>

          </div>
        }
        
      </div>
    )
  }

  render() {
    //debugger;
    return (   
      <div className={ cn('calendar_item', {'calendar_item--highlighted': this.props.event === 'TODAY'} )}>

        <div className="top-bar">
          <div className="top-bar__day">{this.props.day}</div>
          <div className="top-bar__event">{this.props.event}</div>
        </div>

        <div className="bottom-box">
          <div>{this.render_status(this.props.people)}</div>
          {/* <div className="bottom-box__not-finished">-----------|</div>
          <div className="bottom-box__finished">----------------------</div> */}
        </div>
      </div>
    )
  }
}

export default CalendarItem;