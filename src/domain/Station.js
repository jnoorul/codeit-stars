export default class Station {
  constructor(name, numOfPassengers, lines) {
    this.getName = () => {
      return name;
    };
    this.getNumOfPassengers = () => {
      return numOfPassengers;
    };
    this.getLines = () => {
      return lines;
    };
    this._connectedStations = [];
  }

  set connectedStations(list) {
    this._connectedStations = list;
  }

  get connectedStations() {
    return this._connectedStations;
  }

  equals(station) {
    return this.getName() === station.getName();
  }
}