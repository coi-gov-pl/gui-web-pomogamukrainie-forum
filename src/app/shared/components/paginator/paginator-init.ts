import { MatPaginatorIntl } from '@angular/material/paginator';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

let translateLabel = '';
export let langChangeSub$!: Subscription;

const matRangeLabelIntl = (page: number, pageSize: number, length: number) => {
  if (length === 0 || pageSize === 0) {
    return `1 ${translateLabel} 1`;
  }
  length = Math.max(length, 0);
  return `${page + 1} ${translateLabel} ${Math.ceil(length / pageSize)}`;
};

export function MyPaginatorIntl(translateService: TranslateService) {
  const paginatorIntl = new MatPaginatorIntl();

  const setTranslations = () => {
    paginatorIntl.itemsPerPageLabel = translateService.instant('ITEM_OF_PAGE');
    paginatorIntl.nextPageLabel = translateService.instant('NEXT_PAGE');
    paginatorIntl.previousPageLabel = translateService.instant('PREVIOUS_PAGE');
    translateLabel = translateService.instant('PAGE_OF');
    paginatorIntl.getRangeLabel = matRangeLabelIntl;
  };

  setTranslations();

  langChangeSub$ = translateService.onLangChange.subscribe((event: LangChangeEvent) => {
    setTranslations();
    paginatorIntl.changes.next();
  });

  return paginatorIntl;
}
