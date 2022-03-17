import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { MatAccordion } from '@angular/material/expansion';

type Statement = {
  id: string;
  title: string;
  content: string;
  isExpanded: boolean;
};

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss'],
})
export class StatementComponent implements AfterViewInit {
  categoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  accordionList: Array<Statement>;
  shouldScroll: boolean;

  @ViewChild('accordion') accordion!: MatAccordion;

  constructor(private translateService: TranslateService) {
    this.shouldScroll = false; // TODO: should be retrieved from the passed parameters
    const shouldBeExpanded = !this.shouldScroll;

    this.accordionList = [
      {
        id: 'panel-1',
        title: this.translateService.instant('INFORMATOR_MOST_IMPORTANT_HEADER'),
        content: this.translateService.instant('INFORMATOR_MOST_IMPORTANT_DESC'),
        isExpanded: shouldBeExpanded,
      },
      {
        id: 'panel-2',
        title: this.translateService.instant('INFORMATOR_PHONES_HEADER'),
        content: this.translateService.instant('INFORMATOR_PHONES_DESC'),
        isExpanded: shouldBeExpanded,
      },
      {
        id: 'panel-3',
        title: this.translateService.instant('ACCOMMODATION'),
        content: this.translateService.instant('INFORMATOR_ACCOMMODATION_DESC'),
        isExpanded: shouldBeExpanded,
      },
      {
        id: 'panel-4',
        title: this.translateService.instant('MATERIAL_HELP'),
        content: this.translateService.instant('INFORMATOR_MATERIAL_HELP_DESC'),
        isExpanded: shouldBeExpanded,
      },
      {
        id: 'panel-5',
        title: this.translateService.instant('TRANSPORT'),
        content: this.translateService.instant('INFORMATOR_TRANSPORT_DESC'),
        isExpanded: shouldBeExpanded,
      },
      {
        id: 'panel-6',
        title: this.translateService.instant('HEALTH'),
        content: this.translateService.instant('INFORMATOR_HEALTH_DESC'),
        isExpanded: shouldBeExpanded,
      },
      {
        id: 'panel-7',
        title: this.translateService.instant('LEGAL_HELP'),
        content: this.translateService.instant('INFORMATOR_LEGAL_HELP_DESC'),
        isExpanded: shouldBeExpanded,
      },
      {
        id: 'panel-8',
        title: this.translateService.instant('TRANSLATIONS'),
        content: this.translateService.instant('INFORMATOR_TRANSLATIONS_DESC'),
        isExpanded: shouldBeExpanded,
      },
      {
        id: 'panel-9',
        title: this.translateService.instant('WORK'),
        content: this.translateService.instant('INFORMATOR_WORK_DESC'),
        isExpanded: shouldBeExpanded,
      },
      {
        id: 'panel-10',
        title: this.translateService.instant('INFORMATOR_EDUCATION_HEADER'),
        content: this.translateService.instant('INFORMATOR_EDUCATION_DESC'),
        isExpanded: shouldBeExpanded,
      },
    ];
  }

  ngAfterViewInit() {
    if (this.shouldScroll) {
      this.scroll('panel-10');
    }
  }

  scroll(id: string) {
    let el = document.getElementById(id);

    if (el) {
      el.scrollIntoView();
    }
  }
}
