/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './footer.scss';

export class Footer extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    return `
    <footer>
    <address>PET Company ©</address>
    </footer>
    `;
  }
}
