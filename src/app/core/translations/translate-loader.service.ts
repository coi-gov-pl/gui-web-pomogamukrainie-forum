import { Observable, of } from 'rxjs';
import { TranslateLoader } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import plPlTranslations from './pl_PL';
import ukUATranslations from './uk_UA';
import enGBTranslations from './en_GB';
import ruRUTranslations from './ru_RU';

export enum LanguageCode {
  pl_PL = 'pl_PL',
  uk_UA = 'uk_UA',
  en_GB = 'en_GB',
  ru_RU = 'ru_RU',
}

export enum GoogleLanguageCode {
  pl_PL = 'pl',
  uk_UA = 'uk',
  en_GB = 'en',
  ru_RU = 'ru',
}

export interface Translations {
  [LanguageCode.pl_PL]: {
    [key: string]: string;
  };
  [LanguageCode.uk_UA]: {
    [key: string]: string;
  };
  [LanguageCode.en_GB]: {
    [key: string]: string;
  };
  [LanguageCode.ru_RU]: {
    [key: string]: string;
  };
}

const LANG: Translations = {
  pl_PL: plPlTranslations,
  uk_UA: ukUATranslations,
  en_GB: enGBTranslations,
  ru_RU: ruRUTranslations,
};

@Injectable()
export class PomTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<{ [key: string]: string }> {
    return of(LANG[lang as keyof Translations]);
  }
}
