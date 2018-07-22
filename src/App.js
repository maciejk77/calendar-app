import React, { Component } from 'react';
import Calendar from './components/calendar.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calendar: [ 
        {'day':1}, {'day':2}, {'day':3}, {'day':4}, {'day':5}, 
        {'day':6}, {'day':7}, {'day':8}, {'day':9}, {'day':10}, 
        {'day':11}, {'day':12}, {'day':13}, {'day':14}, {'day':15}, 
        {'day':16}, {'day':17}, {'day':18}, {'day':19}, {'day':20}, 
        {'day':21}, {'day':22}, {'day':23}, {'day':24}, {'day':25}, 
        {'day':26}, {'day':27}, {'day':28}, {'day':29}, {'day':30}, 
        {'day': 31}
      ],
      weekdays: [
        {'day': 'Monday'}, {'day': 'Tuesday'}, {'day': 'Wednesday'}, {'day': 'Thursday'}, {'day': 'Friday'}, {'day': 'Saturday'},{'day': 'Sunday'}
      ]
    }
  }

  render() {
    return (
      <div style={{border: "2px solid red", padding: "2px", margin: "10px 0"}}>
        <Calendar 
          calendar={this.state.calendar}  
          weekdays={this.state.weekdays}
        />
      </div>
    );
  }
}

export default App;



