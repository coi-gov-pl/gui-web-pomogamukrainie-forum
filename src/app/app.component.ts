import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pomagamukrainie';

  constructor(private router: Router) {}

  getHeaderClass() {
    return this.router.url === '/' ? 'transparent' : '';
  }

  getContentClass() {
    return this.router.url === '/' ? '' : 'header-padding';
  }
}
