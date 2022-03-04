import { Observable, of } from "rxjs";
import { TranslateLoader } from "@ngx-translate/core";
import { Injectable } from "@angular/core";

import plPlTranslations from '../../translations/pl_PL';

export enum Language {
  pl_PL = 'pl_PL'
}

export interface Translations {
  [Language.pl_PL]: {
    [key: string]: string;
  }
}

const LANG: Translations = {
  pl_PL: plPlTranslations,
};

@Injectable()
export class PomTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<{[key: string]: string}> {
    return of(LANG[lang as keyof Translations]);
  }
}
