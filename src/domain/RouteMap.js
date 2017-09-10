import Station from './Station';

export default class RouteMap {
  constructor(input) {
    this.stations = [];
    input.stations.forEach((stn) => {
      this.stations.push(new Station(stn.name, stn.passengers, stn.lines));
    });

    input.stations.forEach((stn) => {
      const station = this.findStationByName(stn.name);
      station.connectedStations = this.findListOfStations(stn.connectedStations);
    });

  };

  getTotalPassengers(station, lastVisitedStn, destination) {
    let totalPassenger = 0;
    station.connectedStations.forEach((stn) => {
      if (!stn.equals(lastVisitedStn) && !stn.equals(destination)) {
        const nextStnInShortestRoute = this.getNextStationOfShortestRoute(stn, destination);
        if(nextStnInShortestRoute.equals(station)) {
          totalPassenger += this.getTotalPassengers(stn, station, destination);
        }
      }
    });

    totalPassenger += station.getNumOfPassengers();
    return totalPassenger;
  }

  findListOfRoutes(src, dest, route, listOfRoutes) {
    src.connectedStations.forEach((stn) => {
      const newRoute = route.slice();
      if (route.length > 0 && stn.equals(newRoute[newRoute.length - 1])) {
        return;
      }
      newRoute.push(src);
      if (stn.equals(dest)) {
        newRoute.push(dest);
        listOfRoutes.push(newRoute);
      } else {
        this.findListOfRoutes(stn, dest, newRoute, listOfRoutes);
      }
    });
    return listOfRoutes;
  }

  getNextStationOfShortestRoute(src, dest) {
    if (src.connectedStations.length === 1) {
      return src.connectedStations[0];
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