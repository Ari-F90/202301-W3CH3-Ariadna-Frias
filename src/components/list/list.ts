/* eslint-disable no-unused-vars */
import { PetStructure } from '../../models/pet';
import { Component } from '../component/component';

import './list.scss';

export class Pets extends Component {
  constructor(public selector: string, public pets: PetStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('beforebegin');
  }

  createTemplate() {
    const items = this.pets
      .map(
        (item) =>
          `<li>
          <img src="../../../public/${item.name}.jpeg" alt="Dog">
          <div>ID: ${item.id}</div>
          <div>Nombre de la mascota: ${item.name}</div>
          <div>Raza: ${item.breed}</div>
          <div>Adoptado: ${item.isAdopted}</div>

        </li>`
      )
      .join('\n');

    return `
      <section><ul>${items}</ul></section>
    `;
  }
}
