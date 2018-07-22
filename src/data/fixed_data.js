// more structured data, to be used on next iteration of the app

const data = {
    calendar: [ 
      {'day':28, 'event': 'PUBLIC'}, {'day':29}, {'day':30}, {'day': 31}, {'day':1}, {'day':2}, {'day':3}, 
      {'day':4, 'event': 'TODAY'}, {'day':5}, {'day':6}, {'day':7, 'event': 'C.HOLIDAY'}, {'day':8, 'event': 'C.HOLIDAY'}, 
      {'day':9, 'event': 'C.HOLIDAY'}, {'day':10}, 
      {'day':11}, {'day':12}, {'day':13}, {'day':14}, {'day':15}, {'day':16}, {'day':17}, 
      {'day':18}, {'day':19}, {'day':20}, {'day':21}, {'day':22}, {'day':23}, {'day':24}, 
      {'day':25}, {'day':26}, {'day':27}, {'day':28}, {'day':29}, {'day':30}, {'day': 1}
    ],
    weekdays: [
      {'day': 'Monday', 'is_weekend': false}, {'day': 'Tuesday', 'is_weekend': false}, 
      {'day': 'Wednesday', 'is_weekend': false}, {'day': 'Thursday', 'is_weekend': false}, 
      {'day': 'Friday', 'is_weekend': false}, 
      {'day': 'Saturday', 'is_weekend': true}, {'day': 'Sunday', 'is_weekend': true}
    ],
    people: [
      { 'name': 'SK', 'colour': 'orange', days: [{'day': 1, 'finish': true, 'label': 'SK' }] },
      { 'name': 'MW', 'colour': 'red', days: [{'day': 1, 'finish': true, 'label': 'MW' }] },
      { 'name': 'BG', 'colour': 'green', 
        days: [
          {'day': 28, 'finish': true}, {'day': 26, 'label': 'BG'}, {'day': 27}, 
          {'day': 28}, {'day': 29}, {'day': 30}, {'day': 1, 'finish': true},
        ]   
      },
      { 'name': 'DB', 'colour': 'blue', 
        days: [
          {'day': 28, 'finish': true}, {'day': 26, 'label': 'BG'}, {'day': 27}, 
          {'day': 28}, {'day': 29}, {'day': 30}, {'day': 1, 'finish': true},
        ]   
      }
    ]
  }
