import { Component } from '@angular/core';
import {
  IconDefinition,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  themeText: string;
  themeIcon: IconDefinition;

  constructor() {
    this.themeText = 'Escuro';
    this.themeIcon = faMoon;
  }

  changeTheme() {
    if (this.themeText == 'Escuro') {
      this.themeText = 'Claro';
    } else {
      this.themeText = 'Escuro';
    }
  }
}
