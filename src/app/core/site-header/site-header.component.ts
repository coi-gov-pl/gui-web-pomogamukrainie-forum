import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from '@app/core/translations';

interface Language {
  code: LanguageCode;
  text: string;
}

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss'],
})
export class SiteHeaderComponent {
  isOpen: boolean = false;
  scrolled: boolean = false;

  languages: Language[] = [
    { code: LanguageCode.uk_UA, text: 'український' },
    { code: LanguageCode.ru_RU, text: 'русский' },
    { code: LanguageCode.en_GB, text: 'English' },
    { code: LanguageCode.pl_PL, text: 'Polski' },
  ];
  constructor(private router: Router, private translateService: TranslateService) {}

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

  useLanguage(langCode: string) {
    this.translateService.use(langCode);
  }
}
