/* eslint-disable no-unused-vars */
import { PetStructure } from '../../models/pet';
import { Component } from '../component/component';

export class Pets extends Component {
  constructor(public selector: string, public pets: PetStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    const items = this.pets
      .map(
        (item) =>
          `<li>
          <span>ID: ${item.id}</span>
          <span>Nombre de la mascota: ${item.name}</span>
          <span>Raza: ${item.breed}</span>
          <span>Adoptado: ${item.isAdopted}</span>
        </li>`
      )
      .join('\n');

    return `
      <section><ul>${items}</ul></section>
    `;
  }
}
