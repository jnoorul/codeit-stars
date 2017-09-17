export default class Station {
  constructor(name, numOfPassengers) {
    this.getName = () => {
      return name;
    };
    this.getNumOfPassengers = () => {
      return numOfPassengers;
    };
    this._connections = [];
  }

  set connections(list) {
    this._connections = list;
  }

  get connections() {
    return this._connections;
  }

  equals(station) {
    return this.getName() === station.getName();
  }
}