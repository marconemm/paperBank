import { Etheme } from './../../enums/etheme';
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
    this.themeText = Etheme.THEME_TEXT_DARK;
    this.themeIcon = faMoon;
  }

  changeTheme() {
    const isDark = document.body.classList.toggle('dark-theme');

    if (isDark) {
      this.themeText = Etheme.THEME_TEXT_LIGTH;
      this.themeIcon = faSun;
    } else {
      this.themeText = Etheme.THEME_TEXT_DARK;
      this.themeIcon = faMoon;
    }
  }
}
