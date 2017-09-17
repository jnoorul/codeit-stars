import RouteMap from '../domain/RouteMap';

let input;
let routeMap;
beforeEach(() => {
  input = {
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
  };
  routeMap = new RouteMap(input);
});

it('should get list of stations', () => {
  const stations = routeMap.findStationByName('Sengkang');
  expect(stations.connections.length).toBe(2);
});

it('findStation', () => {
  expect(routeMap.findStationByName('Serangoon').getName()).toBe('Serangoon');
});

it('should return total number of stations', () => {
  expect(routeMap.stations.length).toBe(14);
});

it('total passengers for a terminal station', () => {
  const punggol = routeMap.findStationByName('Punggol');
  const sengkang = routeMap.findStationByName('Sengkang');
  const dhobyGhaut = routeMap.findStationByName('DhobyGhaut');
  expect(routeMap.getTotalPassengers(punggol,sengkang,sengkang)).toBe(80);
});

it('total passengers for a station which does not have multiple routes', () => {
  const serangoon = routeMap.findStationByName('Serangoon');
  const littleIndia = routeMap.findStationByName('LittleIndia');
  const dhobyGhaut = routeMap.findStationByName('DhobyGhaut');
  expect(routeMap.getTotalPassengers(serangoon,littleIndia,dhobyGhaut)).toBe(220);
});

it('total passengers for a station which does not have multiple routes', () => {
  const orchard = routeMap.findStationByName('Orchard');
  const dhobyGhaut = routeMap.findStationByName('DhobyGhaut');
  expect(routeMap.getTotalPassengers(orchard,dhobyGhaut,dhobyGhaut)).toBe(40);
});

it('total passengers for a station which does not have multiple routes', () => {
  const payaLebar = routeMap.findStationByName('PayaLebar');
  const dhobyGhaut = routeMap.findStationByName('DhobyGhaut');
  expect(routeMap.getTotalPassengers(payaLebar,dhobyGhaut,dhobyGhaut)).toBe(75);
});


it('total passengers for a station which does not have multiple routes', () => {
  const harbourFront = routeMap.findStationByName('HarbourFront');
  const dhobyGhaut = routeMap.findStationByName('DhobyGhaut');
  expect(routeMap.getTotalPassengers(harbourFront,dhobyGhaut,dhobyGhaut)).toBe(90);
});

