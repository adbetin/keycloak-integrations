import { Component, Prop, h, ComponentInterface, State } from '@stencil/core';
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

  @State() authenticated: boolean;

  async connectedCallback() {
    this.authenticated = await authenticate(this.token, this.refreshToken);
  }

  render() {
    return (
      <div>
        {
          this.authenticated ? `Hello, World! I'm authenticated` : <b> `You are not authenticated` </b>
        }
      </div>);
  }
}
