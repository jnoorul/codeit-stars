import Station from './Station';

export default class RouteMap {
  constructor(input) {
    this.stations = [];
    input.stations.forEach((stn) => {
      this.stations.push(new Station(stn.name, stn.passengers));
    });

    input.stations.forEach((inputStn) => {
      const station = this.findStationByName(inputStn.name);
      inputStn.connections.forEach((inputConnection) => {
        const connStn = this.findStationByName(inputConnection.station);
        const conn = {station: connStn, line: inputConnection.line};
        station.connections.push(conn);
      });
    });
  };

  getTotalPassengers(station, lastVisitedStn, destination) {
    let totalPassenger = 0;
    station.connections.forEach((conn) => {
      if (!conn.station.equals(lastVisitedStn) && !conn.station.equals(destination)) {
        const nextStnInShortestRoute = this.getNextStationOfShortestRoute(conn.station, destination);
        if(nextStnInShortestRoute.equals(station)) {
          totalPassenger += this.getTotalPassengers(conn.station, station, destination);
        }
      }
    });

    totalPassenger += station.getNumOfPassengers();
    return totalPassenger;
  }

  findListOfRoutes(src, dest, route, listOfRoutes) {
    src.connections.forEach((conn) => {
      const newRoute = route.slice();
      if (route.length > 0 && conn.station.equals(newRoute[newRoute.length - 1])) {
        return;
      }
      newRoute.push(src);
      if (conn.station.equals(dest)) {
        newRoute.push(dest);
        listOfRoutes.push(newRoute);
      } else {
        this.findListOfRoutes(conn.station, dest, newRoute, listOfRoutes);
      }
    });
    return listOfRoutes;
  }

  getNextStationOfShortestRoute(src, dest) {
    if (src.connections.length === 1) {
      return src.connections[0].station;
    }
    const listOfRoutes = this.findListOfRoutes(src, dest, [], []);
    let minSize = listOfRoutes[0].length;
    let minRoute = listOfRoutes[0];
    listOfRoutes.forEach((route) => {
      if (route.length < minSize) {
        minSize = route.length;
        minRoute = route;
      }
    });
    return minRoute[1];
  }

  findStationByName(stnName) {
    return this.stations.find((stn) => {
      return (stn.getName() === stnName);
    });
  }

  findListOfStations(stnList) {
    const listOfStn = [];
    this.stations.forEach((stn) => {
      if (stnList.indexOf(stn.getName()) > -1) {
        listOfStn.push(stn);
      }
    });
    return listOfStn;
  }
}