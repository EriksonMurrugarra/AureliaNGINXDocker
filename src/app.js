import environmentConfig from './environment'

export class App {
  constructor() {
    this.appTitle = environmentConfig.appTitle;
  }
}
