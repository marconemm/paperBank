import { ETheme } from 'src/app/core/utils/enums/etheme';
import { Component, AfterViewInit } from '@angular/core';
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
export class HeaderComponent implements AfterViewInit {
  themeText: string;
  themeIcon: IconDefinition;
  menuIcon: IconDefinition;

  constructor() {
    this.themeText = ETheme.THEME_TEXT_DARK;
    this.themeIcon = faMoon;
    this.menuIcon = faBars;
  }

  ngAfterViewInit(): void {
    const currentPath = window.location.pathname;
    const aEl = document.querySelector(`a[href="${currentPath}"]`)

    this.clearActiveMenu();
    aEl?.classList.add('active');
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
    const target = <HTMLElement>event.target;

    this.clearActiveMenu()
    target.classList.add('active');
  }

  changeTheme() {
    const isDark = document.body.classList.toggle('dark-theme');

    if (isDark) {
      this.themeText = ETheme.THEME_TEXT_LIGHT;
      this.themeIcon = faSun;
    } else {
      this.themeText = ETheme.THEME_TEXT_DARK;
      this.themeIcon = faMoon;
    }
  }

  private clearActiveMenu() {
    const aElList = document.querySelectorAll('menu > ul > li > a');

    aElList.forEach((el) => el.removeAttribute('class'));
  }
}
