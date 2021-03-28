import { Component, Prop, h, ComponentInterface, State } from '@stencil/core';
import { getWeatherForecast } from "../../services/weatherService";
import { authenticate } from '../../utils/utils';

@Component({
  tag: 'demo-microfrontent-auth',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent implements ComponentInterface {

  /**
   * security token
   */
  @Prop() token: string;
  @Prop() refreshToken: string;

  @State() authenticated: any;
  @State() weather: Array<any>;

  async connectedCallback() {
    this.authenticated = await authenticate(this.token, this.refreshToken);
    if (this.authenticated) {
      this.weather = await getWeatherForecast(this.authenticated?.token);
    }
  }

  renderWeatherList() {
    if (this.weather) {
      return this.weather.map(_w => <div>
        <p><b>{_w.summary}</b>: {_w.temperatureC}c ({_w.temperatureF}f)</p>
      </div>)
    }
  }

  render() {
    return (
      <div>
        {this.authenticated ? "Hello, World! I'm authenticated" : <b> You are not authenticated </b>}
        {this.renderWeatherList()}
      </div>);
  }
}
