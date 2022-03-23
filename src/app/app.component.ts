import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from '@app/core/translations';
import { StoreUrlService } from '@app/core/store-url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private translateService: TranslateService,
    private storeUrlService: StoreUrlService
  ) {}

  getContentClass() {
    return this.router.url === '/' ? 'only-footer-padding' : 'header-footer-padding';
  }

  ngOnInit() {
    this.translateService.use(LanguageCode.pl_PL);
    this.storeUrlService.setPreviousUrl();
  }
}
