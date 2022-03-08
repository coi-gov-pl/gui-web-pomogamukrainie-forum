import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss'],
})
export class SiteHeaderComponent {
  isOpen: boolean = false;
  scrolled: boolean = false;

  languages = [
    { code: 'ua', text: 'український' },
    { code: 'ru', text: 'русский' },
    { code: 'en', text: 'English' },
    { code: 'pl', text: 'Polski' },
  ];
  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  getHeaderClass() {
    return {
      transparent: this.router.url === '/',
      solid: this.router.url !== '/' || this.isOpen || this.scrolled,
    };
  }

  getMenuClass() {
    return {
      opened: this.isOpen,
    };
  }

  onToggle() {
    this.isOpen = !this.isOpen;
  }
}
