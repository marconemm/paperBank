import { Component } from '@angular/core';
import {
  IconDefinition,
  faAddressBook,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-contato',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContatoComponent {
  contactIcon: IconDefinition;

  constructor() {
    this.contactIcon = faAddressBook;
  }
}
