import RouteMap from './domain/RouteMap';

export default class TrainPlanner {
  constructor(input) {
    const routeMap = new RouteMap(input);
    this.getRouteMap = () => {
      return routeMap;
    };
  }

  getBusiestRoute(dest) {
    const routeMap = this.getRouteMap();

    const destStn = routeMap.findStationByName(dest);

    let maxPassengers = 0;
    let busiestStation = destStn.connectedStations[0];

    destStn.connectedStations.forEach((station) => {
      const totalPassengers = routeMap.getTotalPassengers(station, destStn, destStn);
      if(totalPassengers > maxPassengers) {
        busiestStation = station;
        maxPassengers = totalPassengers;
      }
    });

    return {
      line: busiestStation.getLines()[0],
      totalNumOfPassengers: maxPassengers,
      reachingVia: busiestStation.getName()
    };
  }
}