import React, { Component } from 'react';
import Calendar from './components/calendar.js';
//import fixed_data from './data/fixed_data.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      // calendar: fixed_data.data.calendar,
      // weekdays: fixed_data.data.weekdays,
      // people: fixed_data.data.people
      calendar: [ 
        {'day':28, 'event': 'PUBLIC', 
          people: [
            {'name': 'BG', colour: 'green', label: false, status: 'finish'}, 
            {'name': 'DB', colour: 'blue', label: false, status: 'continues'} 
          ]
        },       
        {'day':29, 
          people: [
            {name: 'DB', colour: 'blue', label: false, continues: false}, 
          ]
        }, 
        {day: 30}, {day: 31}, {day: 1}, {day: 2}, {day :3},         
        {day: 4, event: 'TODAY', 
          people: [
            {name: 'SK', colour: 'red', label: true, continues: false }, 
            {name: 'MW', colour: 'cyan', label: true, continues: false} 
          ]
        },
        {day: 5}, {day: 6}, {day: 7, event: 'C.HOLIDAY'}, {day: 8, event: 'C.HOLIDAY'}, 
        {day: 9, event: 'C.HOLIDAY'}, {day: 10}, {day: 11}, {day: 12}, {day: 13}, {day: 14}, 
        {day: 15}, {day: 16}, {day: 17}, 
        {day: 18,
          people: [
            {name: 'DB', colour: 'blue', label: true, continues: true}, 
          ]
        }, 
        {'day':19,
          people: [
            {name: 'DB', colour: 'blue', label: false, continues: true}, 
          ]
        }, 
        {'day':20,
          people: [
            {name: 'DB', colour: 'blue', label: false, continues: true}, 
          ]
        }, 
        {'day':21,
          people: [
            {name: 'DB', colour: 'blue', label: false, continues: true}, 
          ]
        }, 
        {'day':22,
          people: [
            {name: 'DB', colour: 'blue', label: false, continues: true}, 
          ]
        }, 
        {'day':23}, 
        {'day':24}, 
        
        {'day':25,
          people: [
            {name: 'BG', colour: 'green', label: false, continues: true},
            {name: 'DB', colour: 'blue', label: false, continues: true}
          ]
        }, 
        {'day':26,
          people: [
            {name: 'BG', colour: 'green', label: false, continues: true},
            {name: 'DB', colour: 'blue', label: false, continues: true}
          ]
        }, 
        {'day':27,
          people: [
            {name: 'BG', colour: 'green', label: false, continues: true},
            {name: 'DB', colour: 'blue', label: false, continues: true}
          ]
        }, 
        {'day':28,
          people: [
            {name: 'BG', colour: 'green', label: false, continues: true},
            {name: 'DB', colour: 'blue', label: false, continues: false}
          ]
        }, 
        {'day':29, 
          people: [
            {name: 'BG', colour: 'green', label: false, continues: true},
            {name: 'DB', colour: 'blue', label: false, continues: true}
          ]
        }, 
        {'day':30,
          people: [
            {name: 'BG', colour: 'green', label: false, continues: true}
          ]
        }, 
        {'day': 1,
          people: [
            {name: 'BG', colour: 'green', label: false, continues: false}
          ]
        }
      ],
      weekdays: [
        {'day': 'MON', 'is_weekend': false}, {'day': 'TUE', 'is_weekend': false}, 
        {'day': 'WED', 'is_weekend': false}, {'day': 'THU', 'is_weekend': false}, 
        {'day': 'FRI', 'is_weekend': false}, 
        {'day': 'SAT', 'is_weekend': true}, {'day': 'SUN', 'is_weekend': true}
      ]
    }
  }

  render() {
    return (
      <div style={{border: "2px dotted gray", padding: "2px", margin: "10px 0"}}>
        <Calendar 
          calendar={this.state.calendar}  
          weekdays={this.state.weekdays}
          people={this.state.people}
        />
      </div>
    );
  }
}

export default App;



