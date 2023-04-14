import { Etheme } from 'src/app/utils/enums/etheme';
import { Component } from '@angular/core';
import {
  IconDefinition,
  faMoon,
  faSun,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  themeText: string;
  themeIcon: IconDefinition;
  menuIcon: IconDefinition;

  constructor() {
    this.themeText = Etheme.THEME_TEXT_DARK;
    this.themeIcon = faMoon;
    this.menuIcon = faBars;
  }

  openMenu() {
    const menuEl = document.getElementsByTagName('menu')[0];
    const defVw = '-1.2vw';

    if (menuEl.style.right == defVw) {
      menuEl.style.removeProperty('right');
    } else {
      menuEl.style.right = defVw;
    }
  }

  activate(event: MouseEvent) {
    const aElList = document.querySelectorAll('menu > ul > li > a');
    const target = <HTMLElement>event.target;

    aElList.forEach((el) => {
      el.removeAttribute('class');
    });

    target.classList.add('active');
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
