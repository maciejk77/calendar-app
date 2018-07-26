import React, { Component } from 'react';
import '../styles/calendar_item.css';
import cn from 'classnames';

class CalendarItem extends Component {

  render_status() {
    return this.props.people.map( (item, index) =>
      <div key={index}>

        { item.continues &&
          <div style={{color: item.colour }} className="bottom-box__item">

            { item.label &&
              <div style={{backgroundColor: item.colour, color: "#fff"}} 
                className="bottom-box__label">
                {item.label ? item.name : ''}
              </div>
            }

            <svg height="15" width="100%">
              {item.label ? item.name : ''}
              <line x1="0" y1="10" x2="135" y2="10" 
                style={{stroke: item.colour, strokeWidth: 5}} />
            </svg>
 
          </div>
        }

        { item.continues === false && // explicitly false as it can also be undefined
          <div style={{color: item.colour }} className="bottom-box__item">        
            
            { item.label &&
              <div style={{backgroundColor: item.colour, color: "#fff"}} 
                className="bottom-box__label">
                {item.label ? item.name : ''}
              </div>
            }

            <svg height="15" width="100%">
              {item.label ? item.name : ''}
              <line x1="0" y1="10" x2="60" y2="10" 
                style={{stroke: item.colour, strokeWidth: 5}} />
                ----------- // default when SVGs are not avaiable for browser
              <svg height="15" width="60">
                <line x1="60" y1="5" x2="60" y2="15" 
                style={{stroke: item.colour, strokeWidth: 5}} />
                ----| // default when SVGs are not avaiable for browser
              </svg>
            </svg>
          
          </div>
        }
        
      </div>
    )
  }

  render() {
    return (   
      <div className={ cn('calendar_item', {'calendar_item--highlighted': this.props.event === 'TODAY'} )}>

        <div className="top-bar">
          <div>{this.props.day}</div>
          <div>{this.props.event}</div>
        </div>

        <div className="bottom-box">
          <div>{this.render_status(this.props.people)}</div>
        </div>
      </div>
    )
  }
}

export default CalendarItem;