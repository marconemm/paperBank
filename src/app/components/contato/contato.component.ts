import { Component } from '@angular/core';
import {
  IconDefinition,
  faAddressBook,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
})
export class ContatoComponent {
  contactIcon: IconDefinition;

  constructor() {
    this.contactIcon = faAddressBook;
  }
}
