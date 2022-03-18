import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from '@app/core/translations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pomagamukrainie';

  constructor(private router: Router, private translateService: TranslateService) {}

  getContentClass() {
    return this.router.url === '/' ? '' : 'header-padding';
  }

  ngOnInit() {
    this.translateService.use(LanguageCode.pl_PL);
  }
}
