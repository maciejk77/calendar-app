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
        {day: 28, event: 'PUBLIC', 
          people: [
            {name: 'BG', colour: 'green', label: '', continues: false}, 
            {name: 'DB', colour: 'blue', label: '', continues: true} 
          ]
        },       
        {day: 29, 
          people: [
            {colour: 'white', continues: false}, // quick data fix
            {name: 'DB', colour: 'blue', label: '', continues: false}
          ]
        }, 
        {day: 30, people: [{label: ''}]}, {day: 31, people: [{label: ''}]}, 
        {day: 1,
          people: [
            {name: 'SK', colour: 'red', label: true, continues: false }, 
            {name: 'MW', colour: 'cyan', label: true, continues: false} 
          ]
        }, 
        {day: 2, people: [{label: ''}]}, {day :3, people: [{label: ''}]},         
        {day: 4, people: [{label: ''}], event: 'TODAY'},
        {day: 5, people: [{label: ''}]}, {day: 6, people: [{label: ''}]}, 
        {day: 7, event: 'C.HOLIDAY', people: [{label: ''}]}, 
        {day: 8, event: 'C.HOLIDAY', people: [{label: ''}]}, 
        {day: 9, event: 'C.HOLIDAY', people: [{label: ''}]}, {day: 10, people: [{label: ''}]}, 
        {day: 11, people: [{label: ''}]}, {day: 12, people: [{label: ''}]}, {day: 13, people: [{label: ''}]}, 
        {day: 14, people: [{label: ''}]}, {day: 15, people: [{label: ''}]}, {day: 16, people: [{label: ''}]}, 
        {day: 17, people: [{label: ''}]}, 
        {day: 18,
          people: [
            {name: 'DB', colour: 'blue', label: true, continues: true}, 
          ]
        }, 
        {day: 19,
          people: [
            {name: 'DB', colour: 'blue', label: '', continues: true}, 
          ]
        }, 
        {day: 20,
          people: [
            {name: 'DB', colour: 'blue', label: '', continues: true}, 
          ]
        }, 
        {day: 21,
          people: [
            {name: 'DB', colour: 'blue', label: '', continues: true}, 
          ]
        }, 
        {day: 22,
          people: [
            {name: 'DB', colour: 'blue', label: '', continues: true}, 
          ]
        }, 
        {day: 23,
          people: [
            {name: 'DB', colour: 'blue', label: '', continues: true},
            {name: 'BG', colour: 'green', label: true, continues: true}
          ]
        }, 
        {day: 24,
          people: [
            {name: 'DB', colour: 'blue', label: '', continues: true},
            {name: 'BG', colour: 'green', label: '', continues: true}
          ]
        }, 
        {day: 25,
          people: [
            {name: 'DB', colour: 'blue', label: '', continues: true},
            {name: 'BG', colour: 'green', label: '', continues: true}
          ]
        }, 
        {day: 26,
          people: [
            {name: 'DB', colour: 'blue', label: '', continues: true},
            {name: 'BG', colour: 'green', label: '', continues: true}
          ]
        }, 
        {day: 27,
          people: [
            {name: 'DB', colour: 'blue', label: '', continues: true},
            {name: 'BG', colour: 'green', label: '', continues: true}
          ]
        }, 
        {day: 28,
          people: [
            {name: 'DB', colour: 'blue', label: '', continues: true},
            {name: 'BG', colour: 'green', label: '', continues: true}
          ]
        }, 
        {day: 29, 
          people: [
            {name: 'DB', colour: 'blue', label: '', continues: false},
            {name: 'BG', colour: 'green', label: '', continues: true}
          ]
        }, 
        {day: 30,
          people: [
            {colour: 'white', continues: false}, // quick data fix
            {name: 'BG', colour: 'green', label: '', continues: true}
          ]
        }, 
        {day: 1,
          people: [
            {colour: 'white', continues: false}, // quick data fix
            {name: 'BG', colour: 'green', label: '', continues: true}
          ]
        }
      ],
      weekdays: [
        {day: 'MON', is_weekend: false}, {day: 'TUE', is_weekend: false}, 
        {day: 'WED', is_weekend: false}, {day: 'THU', is_weekend: false}, 
        {day: 'FRI', is_weekend: false}, 
        {day: 'SAT', is_weekend: true}, {day: 'SUN', is_weekend: true}
      ]
    }
  }

  render() {
    return (
      <div style={{border: "2px dotted gray", padding: "2px", margin: "10px 0"}}>
        <Calendar 
          calendar={this.state.calendar}  
          weekdays={this.state.weekdays}
        />
      </div>
    );
  }
}

export default App;



