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

  getContentClass() {
    return this.router.url === '/' ? '' : 'header-padding';
  }
}
