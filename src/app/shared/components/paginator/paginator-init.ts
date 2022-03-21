import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';

let translateLabel = '';

const matRangeLabelIntl = (page: number, pageSize: number, length: number) => {
  if (length === 0 || pageSize === 0) {
    return `1 ${translateLabel} 1`;
  }
  length = Math.max(length, 0);
  return `${page + 1} ${translateLabel} ${Math.ceil(length / pageSize)}`;
};

export function MyPaginatorIntl(translateService: TranslateService) {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = translateService.instant('ITEM_OF_PAGE');
  paginatorIntl.nextPageLabel = translateService.instant('NEXT_PAGE');
  paginatorIntl.previousPageLabel = translateService.instant('PREVIOUS_PAGE');
  translateLabel = translateService.instant('PAGE_OF');
  paginatorIntl.getRangeLabel = matRangeLabelIntl;

  return paginatorIntl;
}
