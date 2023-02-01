/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './header.scss';

import './header.scss';

export class Header extends Component {
  constructor(public selector: string, public title: string = 'Pet World') {
    super();
    this.template = this.createTemplate();
    this.render('beforebegin');
  }

  private createTemplate() {
    return `
      <header class="header">
        <h1>${this.title}</h1>
        <p>Come and meet our pets!</p>
      </header>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
