import { Component, Input, OnChanges } from '@angular/core';
import { Params, Router } from '@angular/router';
import { StoreUrlService } from '@app/core/store-url/store-url.service';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { LanguageCode } from '@app/core/translations';
import { LocalStorageKeys } from '@app/shared/models';

@Component({
  selector: 'app-policy-link',
  templateUrl: './policy-link.component.html',
  styleUrls: ['./policy-link.component.scss'],
})
export class PolicyLinkComponent {
  corePath = CorePath;

  // TODO: introduce grammatical cases, starting with denominator and accusative.
  @Input() denominator: boolean = true;
  @Input() isReply: boolean = false;
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
