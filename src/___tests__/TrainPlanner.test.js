import TrainPlanner from '../TrainPlanner';
it('should return busiest station-testcase 1', () => {
  const testData = {
    "name": "SimpleRouteMap",
    "groupId": 1,
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

it('should return busiest station - testcase 2', () => {
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
});



