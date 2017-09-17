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
    let busiestConnection = destStn.connections[0];

    destStn.connections.forEach((conn) => {
      const totalPassengers = routeMap.getTotalPassengers(conn.station, destStn, destStn);
      if(totalPassengers > maxPassengers) {
        busiestConnection = conn;
        maxPassengers = totalPassengers;
      }
    });

    return {
      line: busiestConnection.line,
      totalNumOfPassengers: maxPassengers,
      reachingVia: busiestConnection.station.getName()
    };
  }
}