import TrainPlanner from '../TrainPlanner';
it('should return busiest station-testcase 1', () => {
  const testData = {
    "name": "SimpleRouteMap",
    "groupId": 1,
    "input": {
      "destination": "DhobyGhaut",
      "stations": [{
        "name": "Punggol",
        "passengers": 80,
        "connections": [{
          "station": "Sengkang",
          "line": "purple"
        }
        ]

      }, {

        "name": "Sengkang",
        "passengers": 40,
        "connections": [{
          "station": "Punggol",
          "line": "purple"
        }, {
          "station": "Serangoon",
          "line": "purple"
        }
        ]

      }, {

        "name": "Serangoon",
        "passengers": 40,
        "connections": [{
          "station": "LittleIndia",
          "line": "purple"
        }, {
          "station": "Sengkang",
          "line": "purple"
        }, {
          "station": "PayaLebar",
          "line": "orange"
        },{
          "station": "Bishan",
          "line": "orange"
        }
        ]
      }, {

        "name": "LittleIndia",
        "passengers": 40,
        "connections": [{
          "station": "Serangoon",
          "line": "purple"
        }, {
          "station": "DhobyGhaut",
          "line": "purple"
        },
        ]
      }, {

        "name": "DhobyGhaut",
        "passengers": 20,
        "connections": [{
          "station": "LittleIndia",
          "line": "purple"
        }, {
          "station": "HarbourFront",
          "line": "purple"
        }, {
          "station": "Somerset",
          "line": "red"
        }, {
          "station": "MarinaBay",
          "line": "red"
        }, {
          "station": "Esplanade",
          "line": "orange"
        }
        ]

      }, {

        "name": "HarbourFront",
        "passengers": 90,
        "connections": [{
          "station": "DhobyGhaut",
          "line": "purple"
        }
        ]

      }, {
        "name": "Somerset",
        "passengers": 0,
        "connections": [{
          "station": "DhobyGhaut",
          "line": "red"
        }, {
          "station": "Orchard",
          "line": "red"
        }
        ]

      }, {
        "name": "Orchard",
        "passengers": 30,
        "connections": [{
          "station": "Somerset",
          "line": "red"
        }, {
          "station": "Novena",
          "line": "red"
        }
        ]

      }, {
        "name": "Novena",
        "passengers": 10,
        "connections": [{
          "station": "Orchard",
          "line": "red"
        }, {
          "station": "Bishan",
          "line": "red"
        }
        ]

      }, {
        "name": "Bishan",
        "passengers": 20,
        "connections": [{
          "station": "Novena",
          "line": "red"
        }, {
          "station": "Woodlands",
          "line": "red"
        }, {
          "station": "Serangoon",
          "line": "orange"
        }
        ]

      }, {
        "name": "Woodlands",
        "passengers": 40,
        "connections": [{
          "station": "Bishan",
          "line": "red"
        }
        ]

      }, {
        "name": "MarinaBay",
        "passengers": 100,
        "connections": [{
          "station": "DhobyGhaut",
          "line": "red"
        }
        ]
      }, {
        "name": "Esplanade",
        "passengers": 0,
        "connections": [{
          "station": "DhobyGhaut",
          "line": "orange"
        }, {
          "station": "PayaLebar",
          "line": "orange"
        }
        ]
      }, {
        "name": "PayaLebar",
        "passengers": 75,
        "connections": [{
          "station": "Esplanade",
          "line": "orange"
        }, {
          "station": "Serangoon",
          "line": "orange"
        }
        ]
      }
      ]
    },
    "output": {
      "line": "purple",
      "totalNumOfPassengers": 260,
      "reachingVia": "LittleIndia"
    },
    "score": 20
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});

/*it('should return busiest station - testcase 2', () => {
  const testData = {
    "name": "SimpleRouteMap",
    "groupId": 3,
    "input": {
      "destination": "DhobyGhaut",
      "stations": [
        {
          "name": "Punggol",
          "passengers": 40,
          "connectedStations": [
            "Sengkang"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Sengkang",
          "passengers": 40,
          "connectedStations": [
            "Punggol",
            "Serangoon"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connectedStations": [
            "Sengkang",
            "LittleIndia",
            "PayaLebar",
            "Bishan"
          ],
          "lines": [
            "purple",
            "circle"
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 40,
          "connectedStations": [
            "Serangoon",
            "DhobyGhaut"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connectedStations": [
            "LittleIndia",
            "HarbourFront",
            "MarinaBay",
            "Orchard",
            "PayaLebar"
          ],
          "lines": [
            "purple",
            "red",
            "circle"
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 90,
          "connectedStations": [
            "DhobyGhaut"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connectedStations": [
            "DhobyGhaut",
            "Novena"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "Novena",
          "passengers": 10,
          "connectedStations": [
            "Orchard",
            "Bishan"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connectedStations": [
            "Woodlands",
            "Novena",
            "Serangoon"
          ],
          "lines": [
            "red",
            "circle"
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connectedStations": [
            "Bishan"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connectedStations": [
            "DhobyGhaut"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 75,
          "connectedStations": [
            "DhobyGhaut",
            "Serangoon"
          ],
          "lines": [
            "circle"
          ]
        }
      ]
    },
    "output": {
      "line": "purple",
      "totalNumOfPassengers": 220,
      "reachingVia": "LittleIndia"
    },
    "score": 20
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});

it('should return busiest station - testcase 3', () => {
  const testData = {
    "name": "SimpleRouteMap",
    "groupId": 3,
    "input": {
      "destination": "DhobyGhaut",
      "stations": [
        {
          "name": "Punggol",
          "passengers": 40,
          "connectedStations": [
            "Sengkang"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Sengkang",
          "passengers": 40,
          "connectedStations": [
            "Punggol",
            "Serangoon"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connectedStations": [
            "Sengkang",
            "LittleIndia",
            "PayaLebar",
            "Bishan"
          ],
          "lines": [
            "purple",
            "circle"
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 40,
          "connectedStations": [
            "Serangoon",
            "DhobyGhaut"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connectedStations": [
            "LittleIndia",
            "HarbourFront",
            "MarinaBay",
            "Orchard",
            "PayaLebar"
          ],
          "lines": [
            "purple",
            "red",
            "circle"
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 90,
          "connectedStations": [
            "DhobyGhaut"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connectedStations": [
            "DhobyGhaut",
            "Novena"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "Novena",
          "passengers": 10,
          "connectedStations": [
            "Orchard",
            "Bishan"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connectedStations": [
            "Woodlands",
            "Novena",
            "Serangoon"
          ],
          "lines": [
            "red",
            "circle"
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connectedStations": [
            "Bishan"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connectedStations": [
            "DhobyGhaut"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 75,
          "connectedStations": [
            "DhobyGhaut",
            "Serangoon"
          ],
          "lines": [
            "circle"
          ]
        }
      ]
    },
    "output": {
      "line": "purple",
      "totalNumOfPassengers": 220,
      "reachingVia": "LittleIndia"
    },
    "score": 20
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});

it('should return busiest station - testcase 4', () => {
  const testData = {
    "name": "SimpleRouteMap",
    "groupId": 4,
    "input": {
      "destination": "DhobyGhaut",
      "stations": [
        {
          "name": "Punggol",
          "passengers": 80,
          "connectedStations": [
            "Sengkang"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Sengkang",
          "passengers": 40,
          "connectedStations": [
            "Punggol",
            "Serangoon"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connectedStations": [
            "Sengkang",
            "LittleIndia",
            "PayaLebar",
            "Bishan"
          ],
          "lines": [
            "purple",
            "circle"
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 10,
          "connectedStations": [
            "Serangoon",
            "DhobyGhaut"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connectedStations": [
            "LittleIndia",
            "HarbourFront",
            "MarinaBay",
            "Orchard",
            "PayaLebar"
          ],
          "lines": [
            "purple",
            "red",
            "circle"
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 90,
          "connectedStations": [
            "DhobyGhaut"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connectedStations": [
            "DhobyGhaut",
            "Novena"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "Novena",
          "passengers": 10,
          "connectedStations": [
            "Orchard",
            "Bishan"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connectedStations": [
            "Woodlands",
            "Novena",
            "Serangoon"
          ],
          "lines": [
            "red",
            "circle"
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connectedStations": [
            "Bishan"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connectedStations": [
            "DhobyGhaut"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 75,
          "connectedStations": [
            "DhobyGhaut",
            "Serangoon"
          ],
          "lines": [
            "circle"
          ]
        }
      ]
    },
    "output": {
      "line": "purple",
      "totalNumOfPassengers": 230,
      "reachingVia": "LittleIndia"
    },
    "score": 20
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});

it('should return busiest station - testcase 5', () => {
  const testData = {
    "name": "SimpleRouteMap",
    "groupId": 5,
    "input": {
      "destination": "DhobyGhaut",
      "stations": [
        {
          "name": "Punggol",
          "passengers": 80,
          "connectedStations": [
            "Sengkang"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Sengkang",
          "passengers": 40,
          "connectedStations": [
            "Punggol",
            "Serangoon"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connectedStations": [
            "Sengkang",
            "LittleIndia",
            "PayaLebar",
            "Bishan"
          ],
          "lines": [
            "purple",
            "circle"
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 40,
          "connectedStations": [
            "Serangoon",
            "DhobyGhaut"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connectedStations": [
            "LittleIndia",
            "HarbourFront",
            "MarinaBay",
            "Orchard",
            "PayaLebar"
          ],
          "lines": [
            "purple",
            "red",
            "circle"
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 90,
          "connectedStations": [
            "DhobyGhaut"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connectedStations": [
            "DhobyGhaut",
            "Novena"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "Novena",
          "passengers": 10,
          "connectedStations": [
            "Orchard",
            "Bishan"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connectedStations": [
            "Woodlands",
            "Novena",
            "Serangoon"
          ],
          "lines": [
            "red",
            "circle"
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connectedStations": [
            "Bishan"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connectedStations": [
            "DhobyGhaut"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 275,
          "connectedStations": [
            "DhobyGhaut",
            "Serangoon"
          ],
          "lines": [
            "circle"
          ]
        }
      ]
    },
    "output": {
      "line": "circle",
      "totalNumOfPassengers": 275,
      "reachingVia": "PayaLebar"
    },
    "score": 20
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});

it('should return busiest station - testcase 6', () => {
  const testData = {
    "name": "SimpleRouteMap",
    "groupId": 6,
    "input": {
      "destination": "DhobyGhaut",
      "stations": [
        {
          "name": "Punggol",
          "passengers": 80,
          "connectedStations": [
            "Sengkang"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Sengkang",
          "passengers": 40,
          "connectedStations": [
            "Punggol",
            "Serangoon"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connectedStations": [
            "Sengkang",
            "LittleIndia",
            "PayaLebar",
            "Bishan"
          ],
          "lines": [
            "purple",
            "circle"
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 40,
          "connectedStations": [
            "Serangoon",
            "DhobyGhaut"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connectedStations": [
            "LittleIndia",
            "HarbourFront",
            "MarinaBay",
            "Orchard",
            "PayaLebar"
          ],
          "lines": [
            "purple",
            "red",
            "circle"
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 290,
          "connectedStations": [
            "DhobyGhaut"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connectedStations": [
            "DhobyGhaut",
            "Novena"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "Novena",
          "passengers": 10,
          "connectedStations": [
            "Orchard",
            "Bishan"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connectedStations": [
            "Woodlands",
            "Novena",
            "Serangoon"
          ],
          "lines": [
            "red",
            "circle"
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connectedStations": [
            "Bishan"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connectedStations": [
            "DhobyGhaut"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 75,
          "connectedStations": [
            "DhobyGhaut",
            "Serangoon"
          ],
          "lines": [
            "circle"
          ]
        }
      ]
    },
    "output": {
      "line": "purple",
      "totalNumOfPassengers": 290,
      "reachingVia": "HarbourFront"
    },
    "score": 20
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});

it('should return busiest station - testcase 7', () => {
  const testData = {
    "name": "SimpleRouteMap",
    "groupId": 7,
    "input": {
      "destination": "DhobyGhaut",
      "stations": [
        {
          "name": "Punggol",
          "passengers": 80,
          "connectedStations": [
            "Sengkang"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Sengkang",
          "passengers": 0,
          "connectedStations": [
            "Punggol",
            "Serangoon"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connectedStations": [
            "Sengkang",
            "LittleIndia",
            "PayaLebar",
            "Bishan"
          ],
          "lines": [
            "purple",
            "circle"
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 40,
          "connectedStations": [
            "Serangoon",
            "DhobyGhaut"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connectedStations": [
            "LittleIndia",
            "HarbourFront",
            "MarinaBay",
            "Orchard",
            "PayaLebar"
          ],
          "lines": [
            "purple",
            "red",
            "circle"
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 90,
          "connectedStations": [
            "DhobyGhaut"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connectedStations": [
            "DhobyGhaut",
            "Novena"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "Novena",
          "passengers": 10,
          "connectedStations": [
            "Orchard",
            "Bishan"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connectedStations": [
            "Woodlands",
            "Novena",
            "Serangoon"
          ],
          "lines": [
            "red",
            "circle"
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connectedStations": [
            "Bishan"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connectedStations": [
            "DhobyGhaut"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 75,
          "connectedStations": [
            "DhobyGhaut",
            "Serangoon"
          ],
          "lines": [
            "circle"
          ]
        }
      ]
    },
    "output": {
      "line": "purple",
      "totalNumOfPassengers": 220,
      "reachingVia": "LittleIndia"
    },
    "score": 20
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});

it('should return busiest station - test case 8', () => {
  const testData = {
    "name": "SimpleRouteMap",
    "groupId": 8,
    "input": {
      "destination": "DhobyGhaut",
      "stations": [
        {
          "name": "Punggol",
          "passengers": 10,
          "connectedStations": [
            "Sengkang"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Sengkang",
          "passengers": 40,
          "connectedStations": [
            "Punggol",
            "Serangoon"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connectedStations": [
            "Sengkang",
            "LittleIndia",
            "PayaLebar",
            "Bishan"
          ],
          "lines": [
            "purple",
            "circle"
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 40,
          "connectedStations": [
            "Serangoon",
            "DhobyGhaut"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connectedStations": [
            "LittleIndia",
            "HarbourFront",
            "MarinaBay",
            "Orchard",
            "PayaLebar"
          ],
          "lines": [
            "purple",
            "red",
            "circle"
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 90,
          "connectedStations": [
            "DhobyGhaut"
          ],
          "lines": [
            "purple"
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connectedStations": [
            "DhobyGhaut",
            "Novena"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "Novena",
          "passengers": 10,
          "connectedStations": [
            "Orchard",
            "Bishan"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connectedStations": [
            "Woodlands",
            "Novena",
            "Serangoon"
          ],
          "lines": [
            "red",
            "circle"
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connectedStations": [
            "Bishan"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connectedStations": [
            "DhobyGhaut"
          ],
          "lines": [
            "red"
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 75,
          "connectedStations": [
            "DhobyGhaut",
            "Serangoon"
          ],
          "lines": [
            "circle"
          ]
        }
      ]
    },
    "output": {
      "line": "purple",
      "totalNumOfPassengers": 190,
      "reachingVia": "LittleIndia"
    },
    "score": 20
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});*/



