import { Component } from '@angular/core';
import { CorePath } from '@app/shared/models';
import { LanguageCode } from '@app/core/translations';
import { LocalStorageKeys } from '@app/shared/models';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss'],
})
export class SiteFooterComponent {
  corePath = CorePath;
  constructor() {}

  getSuffixForTranslatedResource(): string {
    const code = localStorage.getItem(LocalStorageKeys.LangOption) || LanguageCode.pl_PL;
    switch (code) {
      case LanguageCode.en_GB:
        return '_EN';
      case LanguageCode.uk_UA:
        return '_UK';
      case LanguageCode.ru_RU:
        return '_RU';
      default:
        // Polish translation handled as a spec-rule. Aligning: TODO in MVP2.
        return '';
    }
  }
}
