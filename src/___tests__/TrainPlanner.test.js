import TrainPlanner from '../TrainPlanner';
it('should return busiest station-testcase 1', () => {
  const testData = {
    "name": "RouteMap-1",
    "groupId": 1,
    "input": {
      "destination": "DhobyGhaut",
      "stations": [
        {
          "name": "Punggol",
          "passengers": 80,
          "connections": [
            {
              "station": "Sengkang",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Sengkang",
          "passengers": 40,
          "connections": [
            {
              "station": "Punggol",
              "line": "purple"
            },
            {
              "station": "Serangoon",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "Sengkang",
              "line": "purple"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            },
            {
              "station": "Bishan",
              "line": "orange"
            }
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 40,
          "connections": [
            {
              "station": "Serangoon",
              "line": "purple"
            },
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "HarbourFront",
              "line": "purple"
            },
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "MarinaBay",
              "line": "red"
            },
            {
              "station": "Esplanade",
              "line": "orange"
            }
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 90,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Somerset",
          "passengers": 0,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            },
            {
              "station": "Orchard",
              "line": "red"
            }
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connections": [
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "Novena",
              "line": "red"
            }
          ]
        },
        {
          "name": "Novena",
          "passengers": 10,
          "connections": [
            {
              "station": "Orchard",
              "line": "red"
            },
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connections": [
            {
              "station": "Novena",
              "line": "red"
            },
            {
              "station": "Woodlands",
              "line": "red"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connections": [
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            }
          ]
        },
        {
          "name": "Esplanade",
          "passengers": 0,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "orange"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            }
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 75,
          "connections": [
            {
              "station": "Esplanade",
              "line": "orange"
            },
            {
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
    "score": 25
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});

it('should return busiest station - testcase 2', () => {
  const testData = {
    "name": "RouteMap-2",
    "groupId": 2,
    "input": {
      "destination": "DhobyGhaut",
      "stations": [
        {
          "name": "Novena",
          "passengers": 10,
          "connections": [
            {
              "station": "Orchard",
              "line": "red"
            },
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "Punggol",
          "passengers": 80,
          "connections": [
            {
              "station": "Sengkang",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Sengkang",
          "passengers": 40,
          "connections": [
            {
              "station": "Punggol",
              "line": "purple"
            },
            {
              "station": "Serangoon",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "Sengkang",
              "line": "purple"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            },
            {
              "station": "Bishan",
              "line": "orange"
            }
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 40,
          "connections": [
            {
              "station": "Serangoon",
              "line": "purple"
            },
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "HarbourFront",
              "line": "purple"
            },
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "MarinaBay",
              "line": "red"
            },
            {
              "station": "Esplanade",
              "line": "orange"
            }
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 90,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Somerset",
          "passengers": 0,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            },
            {
              "station": "Orchard",
              "line": "red"
            }
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connections": [
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "Novena",
              "line": "red"
            }
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connections": [
            {
              "station": "Novena",
              "line": "red"
            },
            {
              "station": "Woodlands",
              "line": "red"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connections": [
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            }
          ]
        },
        {
          "name": "Esplanade",
          "passengers": 200,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "orange"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            }
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 75,
          "connections": [
            {
              "station": "Esplanade",
              "line": "orange"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        }
      ]
    },
    "output": {
      "line": "orange",
      "totalNumOfPassengers": 275,
      "reachingVia": "Esplanade"
    },
    "score": 25
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});

it('should return busiest station - testcase 3', () => {
  const testData = {
    "name": "RouteMap-3",
    "groupId": 3,
    "input": {
      "destination": "DhobyGhaut",
      "stations": [
        {
          "name": "Sengkang",
          "passengers": 40,
          "connections": [
            {
              "station": "Punggol",
              "line": "purple"
            },
            {
              "station": "Serangoon",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Novena",
          "passengers": 10,
          "connections": [
            {
              "station": "Orchard",
              "line": "red"
            },
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "Punggol",
          "passengers": 80,
          "connections": [
            {
              "station": "Sengkang",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "Sengkang",
              "line": "purple"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            },
            {
              "station": "Bishan",
              "line": "orange"
            }
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 40,
          "connections": [
            {
              "station": "Serangoon",
              "line": "purple"
            },
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "HarbourFront",
              "line": "purple"
            },
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "MarinaBay",
              "line": "red"
            },
            {
              "station": "Esplanade",
              "line": "orange"
            }
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 90,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Somerset",
          "passengers": 400,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            },
            {
              "station": "Orchard",
              "line": "red"
            }
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connections": [
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "Novena",
              "line": "red"
            }
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connections": [
            {
              "station": "Novena",
              "line": "red"
            },
            {
              "station": "Woodlands",
              "line": "red"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connections": [
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            }
          ]
        },
        {
          "name": "Esplanade",
          "passengers": 200,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "orange"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            }
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 75,
          "connections": [
            {
              "station": "Esplanade",
              "line": "orange"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        }
      ]
    },
    "output": {
      "line": "red",
      "totalNumOfPassengers": 440,
      "reachingVia": "Somerset"
    },
    "score": 25
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});

/*it('should return busiest station - testcase 4', () => {
  const testData = {
    "name": "RouteMap-4",
    "groupId": 4,
    "input": {
      "destination": "HarbourFront",
      "stations": [
        {
          "name": "Punggol",
          "passengers": 80,
          "connections": [
            {
              "station": "Sengkang",
              "line": "purple"
            }
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 90,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Sengkang",
          "passengers": 40,
          "connections": [
            {
              "station": "Punggol",
              "line": "purple"
            },
            {
              "station": "Serangoon",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "Sengkang",
              "line": "purple"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            },
            {
              "station": "Bishan",
              "line": "orange"
            }
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 40,
          "connections": [
            {
              "station": "Serangoon",
              "line": "purple"
            },
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "HarbourFront",
              "line": "purple"
            },
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "MarinaBay",
              "line": "red"
            },
            {
              "station": "Esplanade",
              "line": "orange"
            }
          ]
        },
        {
          "name": "Somerset",
          "passengers": 0,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            },
            {
              "station": "Orchard",
              "line": "red"
            }
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connections": [
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "Novena",
              "line": "red"
            }
          ]
        },
        {
          "name": "Novena",
          "passengers": 10,
          "connections": [
            {
              "station": "Orchard",
              "line": "red"
            },
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connections": [
            {
              "station": "Novena",
              "line": "red"
            },
            {
              "station": "Woodlands",
              "line": "red"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connections": [
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            }
          ]
        },
        {
          "name": "Esplanade",
          "passengers": 0,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "orange"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            }
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 75,
          "connections": [
            {
              "station": "Esplanade",
              "line": "orange"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        }
      ]
    },
    "output": {
      "line": "purple",
      "totalNumOfPassengers": 495,
      "reachingVia": "DhobyGhaut"
    },
    "score": 25
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});*/

it('should return busiest station - testcase 5', () => {
  const testData = {
    "name": "RouteMap-5",
    "groupId": 5,
    "input": {
      "destination": "LittleIndia",
      "stations": [
        {
          "name": "Punggol",
          "passengers": 80,
          "connections": [
            {
              "station": "Sengkang",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Sengkang",
          "passengers": 40,
          "connections": [
            {
              "station": "Punggol",
              "line": "purple"
            },
            {
              "station": "Serangoon",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "Sengkang",
              "line": "purple"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            },
            {
              "station": "Bishan",
              "line": "orange"
            }
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 40,
          "connections": [
            {
              "station": "Serangoon",
              "line": "purple"
            },
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "HarbourFront",
              "line": "purple"
            },
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "MarinaBay",
              "line": "red"
            },
            {
              "station": "Esplanade",
              "line": "orange"
            }
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 90,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Somerset",
          "passengers": 25,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            },
            {
              "station": "Orchard",
              "line": "red"
            }
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connections": [
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "Novena",
              "line": "red"
            }
          ]
        },
        {
          "name": "Novena",
          "passengers": 10,
          "connections": [
            {
              "station": "Orchard",
              "line": "red"
            },
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connections": [
            {
              "station": "Novena",
              "line": "red"
            },
            {
              "station": "Woodlands",
              "line": "red"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connections": [
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            }
          ]
        },
        {
          "name": "Esplanade",
          "passengers": 20,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "orange"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            }
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 75,
          "connections": [
            {
              "station": "Esplanade",
              "line": "orange"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        }
      ]
    },
    "output": {
      "line": "purple",
      "totalNumOfPassengers": 305,
      "reachingVia": "Serangoon"
    },
    "score": 25
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});

it('should return busiest station - testcase 6', () => {
  const testData = {
    "name": "RouteMap-6",
    "groupId": 6,
    "input": {
      "destination": "DhobyGhaut",
      "stations": [
        {
          "name": "Punggol",
          "passengers": 80,
          "connections": [
            {
              "station": "Sengkang",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Sengkang",
          "passengers": 40,
          "connections": [
            {
              "station": "Punggol",
              "line": "purple"
            },
            {
              "station": "Serangoon",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "Sengkang",
              "line": "purple"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            },
            {
              "station": "Bishan",
              "line": "orange"
            }
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 40,
          "connections": [
            {
              "station": "Serangoon",
              "line": "purple"
            },
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "HarbourFront",
              "line": "purple"
            },
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "MarinaBay",
              "line": "red"
            },
            {
              "station": "Esplanade",
              "line": "orange"
            },
            {
              "station": "Expo",
              "line": "blue"
            }
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 90,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Somerset",
          "passengers": 25,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            },
            {
              "station": "Orchard",
              "line": "red"
            }
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connections": [
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "Novena",
              "line": "red"
            }
          ]
        },
        {
          "name": "Novena",
          "passengers": 10,
          "connections": [
            {
              "station": "Orchard",
              "line": "red"
            },
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connections": [
            {
              "station": "Novena",
              "line": "red"
            },
            {
              "station": "Woodlands",
              "line": "red"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connections": [
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            }
          ]
        },
        {
          "name": "Esplanade",
          "passengers": 20,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "orange"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            }
          ]
        },
        {
          "name": "Expo",
          "passengers": 20,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "blue"
            },
            {
              "station": "Changi",
              "line": "green"
            }
          ]
        },
        {
          "name": "Changi",
          "passengers": 300,
          "connections": [
            {
              "station": "Expo",
              "line": "green"
            }
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 75,
          "connections": [
            {
              "station": "Esplanade",
              "line": "orange"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        }
      ]
    },
    "output": {
      "line": "blue",
      "totalNumOfPassengers": 320,
      "reachingVia": "Expo"
    },
    "score": 25
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});

it('should return busiest station - testcase 7', () => {
  const testData = {
    "name": "RouteMap-7",
    "groupId": 1,
    "input": {
      "destination": "Serangoon",
      "stations": [
        {
          "name": "Punggol",
          "passengers": 80,
          "connections": [
            {
              "station": "Sengkang",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Sengkang",
          "passengers": 40,
          "connections": [
            {
              "station": "Punggol",
              "line": "purple"
            },
            {
              "station": "Serangoon",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "Sengkang",
              "line": "purple"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            },
            {
              "station": "Bishan",
              "line": "orange"
            }
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 40,
          "connections": [
            {
              "station": "Serangoon",
              "line": "purple"
            },
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "HarbourFront",
              "line": "purple"
            },
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "MarinaBay",
              "line": "red"
            },
            {
              "station": "Esplanade",
              "line": "orange"
            }
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 90,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Somerset",
          "passengers": 0,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            },
            {
              "station": "Orchard",
              "line": "red"
            }
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connections": [
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "Novena",
              "line": "red"
            }
          ]
        },
        {
          "name": "Novena",
          "passengers": 10,
          "connections": [
            {
              "station": "Orchard",
              "line": "red"
            },
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connections": [
            {
              "station": "Novena",
              "line": "red"
            },
            {
              "station": "Woodlands",
              "line": "red"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connections": [
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            }
          ]
        },
        {
          "name": "Esplanade",
          "passengers": 0,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "orange"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            }
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 75,
          "connections": [
            {
              "station": "Esplanade",
              "line": "orange"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        }
      ]
    },
    "output": {
      "line": "purple",
      "totalNumOfPassengers": 250,
      "reachingVia": "LittleIndia"
    },
    "score": 25
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});

it('should return busiest station - test case 8', () => {
  const testData = {
    "name": "RouteMap-8",
    "groupId": 2,
    "input": {
      "destination": "DhobyGhaut",
      "stations": [
        {
          "name": "Punggol",
          "passengers": 80,
          "connections": [
            {
              "station": "Sengkang",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Sengkang",
          "passengers": 40,
          "connections": [
            {
              "station": "Punggol",
              "line": "purple"
            },
            {
              "station": "Serangoon",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "Sengkang",
              "line": "purple"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            },
            {
              "station": "Bishan",
              "line": "orange"
            }
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 40,
          "connections": [
            {
              "station": "Serangoon",
              "line": "purple"
            },
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "HarbourFront",
              "line": "purple"
            },
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "MarinaBay",
              "line": "red"
            },
            {
              "station": "Esplanade",
              "line": "orange"
            }
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 90,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Somerset",
          "passengers": 330,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            },
            {
              "station": "Orchard",
              "line": "red"
            }
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connections": [
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "Novena",
              "line": "red"
            }
          ]
        },
        {
          "name": "Novena",
          "passengers": 10,
          "connections": [
            {
              "station": "Orchard",
              "line": "red"
            },
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connections": [
            {
              "station": "Novena",
              "line": "red"
            },
            {
              "station": "Woodlands",
              "line": "red"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connections": [
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            }
          ]
        },
        {
          "name": "Esplanade",
          "passengers": 200,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "orange"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            }
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 75,
          "connections": [
            {
              "station": "Esplanade",
              "line": "orange"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        }
      ]
    },
    "output": {
      "line": "red",
      "totalNumOfPassengers": 370,
      "reachingVia": "Somerset"
    },
    "score": 25
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});

/*it('should return busiest station - test case 9', () => {
  const testData = {
    "name": "RouteMap-9",
    "groupId": 3,
    "input": {
      "destination": "Expo",
      "stations": [
        {
          "name": "Punggol",
          "passengers": 80,
          "connections": [
            {
              "station": "Sengkang",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Sengkang",
          "passengers": 40,
          "connections": [
            {
              "station": "Punggol",
              "line": "purple"
            },
            {
              "station": "Serangoon",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "Sengkang",
              "line": "purple"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            },
            {
              "station": "Bishan",
              "line": "orange"
            }
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 40,
          "connections": [
            {
              "station": "Serangoon",
              "line": "purple"
            },
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "HarbourFront",
              "line": "purple"
            },
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "MarinaBay",
              "line": "red"
            },
            {
              "station": "Esplanade",
              "line": "orange"
            },
            {
              "station": "Expo",
              "line": "blue"
            }
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 90,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Somerset",
          "passengers": 25,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            },
            {
              "station": "Orchard",
              "line": "red"
            }
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connections": [
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "Novena",
              "line": "red"
            }
          ]
        },
        {
          "name": "Novena",
          "passengers": 10,
          "connections": [
            {
              "station": "Orchard",
              "line": "red"
            },
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connections": [
            {
              "station": "Novena",
              "line": "red"
            },
            {
              "station": "Woodlands",
              "line": "red"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connections": [
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            }
          ]
        },
        {
          "name": "Esplanade",
          "passengers": 20,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "orange"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            }
          ]
        },
        {
          "name": "Expo",
          "passengers": 20,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "blue"
            },
            {
              "station": "Changi",
              "line": "green"
            }
          ]
        },
        {
          "name": "Changi",
          "passengers": 300,
          "connections": [
            {
              "station": "Expo",
              "line": "green"
            }
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 75,
          "connections": [
            {
              "station": "Esplanade",
              "line": "orange"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        }
      ]
    },
    "output": {
      "line": "blue",
      "totalNumOfPassengers": 630,
      "reachingVia": "DhobyGhaut"
    },
    "score": 25
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});*/

it('should return busiest station - test case 10', () => {
  const testData = {
    "name": "RouteMap-10",
    "groupId": 4,
    "input": {
      "destination": "Sengkang",
      "stations": [
        {
          "name": "Punggol",
          "passengers": 80,
          "connections": [
            {
              "station": "Sengkang",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Sengkang",
          "passengers": 40,
          "connections": [
            {
              "station": "Punggol",
              "line": "purple"
            },
            {
              "station": "Serangoon",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "Sengkang",
              "line": "purple"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            },
            {
              "station": "Bishan",
              "line": "orange"
            }
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 40,
          "connections": [
            {
              "station": "Serangoon",
              "line": "purple"
            },
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "HarbourFront",
              "line": "purple"
            },
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "MarinaBay",
              "line": "red"
            },
            {
              "station": "Esplanade",
              "line": "orange"
            },
            {
              "station": "Expo",
              "line": "blue"
            }
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 90,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Somerset",
          "passengers": 25,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            },
            {
              "station": "Orchard",
              "line": "red"
            }
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connections": [
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "Novena",
              "line": "red"
            }
          ]
        },
        {
          "name": "Novena",
          "passengers": 10,
          "connections": [
            {
              "station": "Orchard",
              "line": "red"
            },
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connections": [
            {
              "station": "Novena",
              "line": "red"
            },
            {
              "station": "Woodlands",
              "line": "red"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connections": [
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            }
          ]
        },
        {
          "name": "Esplanade",
          "passengers": 20,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "orange"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            }
          ]
        },
        {
          "name": "Expo",
          "passengers": 20,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "blue"
            },
            {
              "station": "Changi",
              "line": "green"
            }
          ]
        },
        {
          "name": "Changi",
          "passengers": 300,
          "connections": [
            {
              "station": "Expo",
              "line": "green"
            }
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 75,
          "connections": [
            {
              "station": "Esplanade",
              "line": "orange"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        }
      ]
    },
    "output": {
      "line": "purple",
      "totalNumOfPassengers": 830,
      "reachingVia": "Serangoon"
    },
    "score": 25
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});

/*it('should return busiest station - test case 11', () => {
  const testData = {
    "name": "RouteMap-11",
    "groupId": 5,
    "input": {
      "destination": "Esplanade",
      "stations": [
        {
          "name": "Punggol",
          "passengers": 80,
          "connections": [
            {
              "station": "Sengkang",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Sengkang",
          "passengers": 40,
          "connections": [
            {
              "station": "Punggol",
              "line": "purple"
            },
            {
              "station": "Serangoon",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "Sengkang",
              "line": "purple"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            },
            {
              "station": "Bishan",
              "line": "orange"
            }
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 40,
          "connections": [
            {
              "station": "Serangoon",
              "line": "purple"
            },
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "HarbourFront",
              "line": "purple"
            },
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "MarinaBay",
              "line": "red"
            },
            {
              "station": "Esplanade",
              "line": "orange"
            }
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 90,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Somerset",
          "passengers": 0,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            },
            {
              "station": "Orchard",
              "line": "red"
            }
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connections": [
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "Novena",
              "line": "red"
            }
          ]
        },
        {
          "name": "Novena",
          "passengers": 10,
          "connections": [
            {
              "station": "Orchard",
              "line": "red"
            },
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connections": [
            {
              "station": "Novena",
              "line": "red"
            },
            {
              "station": "Woodlands",
              "line": "red"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connections": [
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            }
          ]
        },
        {
          "name": "Esplanade",
          "passengers": 0,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "orange"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            }
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 75,
          "connections": [
            {
              "station": "Esplanade",
              "line": "orange"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        }
      ]
    },
    "output": {
      "line": "orange",
      "totalNumOfPassengers": 295,
      "reachingVia": "PayaLebar"
    },
    "score": 25
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});*/

it('should return busiest station - test case 12', () => {
  const testData = {
    "name": "RouteMap-12",
    "groupId": 6,
    "input": {
      "destination": "Sengkang",
      "stations": [
        {
          "name": "Punggol",
          "passengers": 500,
          "connections": [
            {
              "station": "Sengkang",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Sengkang",
          "passengers": 40,
          "connections": [
            {
              "station": "Punggol",
              "line": "purple"
            },
            {
              "station": "Serangoon",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Serangoon",
          "passengers": 40,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "Sengkang",
              "line": "purple"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            },
            {
              "station": "Bishan",
              "line": "orange"
            }
          ]
        },
        {
          "name": "LittleIndia",
          "passengers": 40,
          "connections": [
            {
              "station": "Serangoon",
              "line": "purple"
            },
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "DhobyGhaut",
          "passengers": 20,
          "connections": [
            {
              "station": "LittleIndia",
              "line": "purple"
            },
            {
              "station": "HarbourFront",
              "line": "purple"
            },
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "MarinaBay",
              "line": "red"
            },
            {
              "station": "Esplanade",
              "line": "orange"
            }
          ]
        },
        {
          "name": "HarbourFront",
          "passengers": 90,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "purple"
            }
          ]
        },
        {
          "name": "Somerset",
          "passengers": 0,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            },
            {
              "station": "Orchard",
              "line": "red"
            }
          ]
        },
        {
          "name": "Orchard",
          "passengers": 30,
          "connections": [
            {
              "station": "Somerset",
              "line": "red"
            },
            {
              "station": "Novena",
              "line": "red"
            }
          ]
        },
        {
          "name": "Novena",
          "passengers": 10,
          "connections": [
            {
              "station": "Orchard",
              "line": "red"
            },
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "Bishan",
          "passengers": 20,
          "connections": [
            {
              "station": "Novena",
              "line": "red"
            },
            {
              "station": "Woodlands",
              "line": "red"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        },
        {
          "name": "Woodlands",
          "passengers": 40,
          "connections": [
            {
              "station": "Bishan",
              "line": "red"
            }
          ]
        },
        {
          "name": "MarinaBay",
          "passengers": 100,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "red"
            }
          ]
        },
        {
          "name": "Esplanade",
          "passengers": 0,
          "connections": [
            {
              "station": "DhobyGhaut",
              "line": "orange"
            },
            {
              "station": "PayaLebar",
              "line": "orange"
            }
          ]
        },
        {
          "name": "PayaLebar",
          "passengers": 75,
          "connections": [
            {
              "station": "Esplanade",
              "line": "orange"
            },
            {
              "station": "Serangoon",
              "line": "orange"
            }
          ]
        }
      ]
    },
    "output": {
      "line": "purple",
      "totalNumOfPassengers": 500,
      "reachingVia": "Punggol"
    },
    "score": 25
  };
  const trainPlanner = new TrainPlanner(testData.input);
  const output = trainPlanner.getBusiestRoute(testData.input.destination);
  console.log(output);
  expect(output).toEqual(testData.output);
});



