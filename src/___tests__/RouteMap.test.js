import RouteMap from '../domain/RouteMap';

let input;
let routeMap;
beforeEach(() => {
  input = {
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
          "DhobyGhaut",
          "PayaLebar",
          "Bishan"
        ],
        "lines": [
          "purple",
          "circle"
        ]
      },
      {
        "name": "DhobyGhaut",
        "passengers": 20,
        "connectedStations": [
          "Serangoon",
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
  };
  routeMap = new RouteMap(input);
});

it('should get list of stations', () => {
  const stations = routeMap.findListOfStations(['Serangoon','Sengkang']);
  expect(stations.length).toBe(2);
});

it('findStation', () => {
  expect(routeMap.findStationByName('Serangoon').getName()).toBe('Serangoon');
});

it('should return total number of stations', () => {
  expect(routeMap.stations.length).toBe(11);
});

it('total passengers for a terminal station', () => {
  const punggol = routeMap.findStationByName('Punggol');
  const sengkang = routeMap.findStationByName('Sengkang');
  const dhobyGhaut = routeMap.findStationByName('DhobyGhaut');
  expect(routeMap.getTotalPassengers(punggol,sengkang,sengkang)).toBe(80);
});

it('total passengers for a station which does not have multiple routes', () => {
  const serangoon = routeMap.findStationByName('Serangoon');
  const dhobyGhaut = routeMap.findStationByName('DhobyGhaut');
  expect(routeMap.getTotalPassengers(serangoon,dhobyGhaut,dhobyGhaut)).toBe(220);
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


