import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import enGBTranslations from './en_GB';
import plPlTranslations from './pl_PL';
import ruRUTranslations from './ru_RU';
import ukUATranslations from './uk_UA';

export enum LanguageCode {
  pl_PL = 'pl_PL',
  uk_UA = 'uk_UA',
  en_GB = 'en_GB',
  ru_RU = 'ru_RU',
}

export enum LanguageNames {
  POLISH = 'POLISH',
  UKRAINIAN = 'UKRAINIAN',
  ENGLISH = 'ENGLISH',
  RUSSIAN = 'RUSSIAN',
}

export enum LengthOfStayLabels {
  WEEK_1 = 'WEEK_1',
  WEEK_2 = 'WEEK_2',
  MONTH_1 = 'MONTH_1',
  MONTH_2 = 'MONTH_2',
  MONTH_3 = 'MONTH_3',
  LONGER = 'LONGER',
}

export enum LawHelpModeLabels {
  Stationary = 'IN_FACILITY',
  WithAccess = 'WITH_ACCESS',
  Online = 'ONLINE',
  Email = 'BY_EMAIL',
  Phone = 'BY_PHONE',
}

export enum LawHelpKindLabels {
  Labour = 'LABOUR_LAW',
  Immigration = 'IMMIGRATION_LAW',
  Family = 'FAMILY_LAW',
  Tax = 'TAX_LAW',
  Civil = 'CIVIL_LAW',
  Other = 'OTHER',
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
