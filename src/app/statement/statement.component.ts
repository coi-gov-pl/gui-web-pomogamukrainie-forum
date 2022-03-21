import { Component, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { TranslateService } from '@ngx-translate/core';
import { CategoryRoutingName, CorePath, StatementAnchors } from '@app/shared/models';
import { merge, Subscription } from 'rxjs';

type Statement = {
  id: string;
  title: string;
  content: string;
  isExpanded: boolean;
  icon: string;
};

const isExpanded = (allExpanded: boolean, panelId: string, activePanel: string | null) =>
  allExpanded || panelId === activePanel;

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss'],
})
export class StatementComponent implements OnInit, AfterViewInit, OnDestroy {
  categoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  accordionList: Array<Statement> = [];
  activePanel: string | null = null;

  langAndRouteSub$!: Subscription;

  @ViewChild('accordion') accordion!: MatAccordion;

  constructor(private route: ActivatedRoute, private translateService: TranslateService) {}

  ngOnInit() {
    this.loadStatements();
    this.langAndRouteSub$ = merge(this.translateService.onLangChange, this.route.fragment).subscribe((res) => {
      // fragment -> string, onLangChange -> object
      if (!(res instanceof Object)) {
        this.activePanel = Object.values(StatementAnchors).find((statementAnchor) => statementAnchor === res) || null;
      }
      this.loadStatements();
    });
  }

  loadStatements() {
    const allExpanded = !this.activePanel;
    this.accordionList = [
      {
        id: StatementAnchors.MOST_IMPORTANT,
        title: this.translateService.instant('INFORMATOR_MOST_IMPORTANT_HEADER'),
        content: this.translateService.instant('INFORMATOR_MOST_IMPORTANT_DESC'),
        isExpanded: isExpanded(allExpanded, StatementAnchors.MOST_IMPORTANT, this.activePanel),
        icon: 'info',
      },
      {
        id: StatementAnchors.PHONES,
        title: this.translateService.instant('INFORMATOR_PHONES_HEADER'),
        content: this.translateService.instant('INFORMATOR_PHONES_DESC'),
        isExpanded: isExpanded(allExpanded, StatementAnchors.PHONES, this.activePanel),
        icon: 'phone',
      },
      {
        id: StatementAnchors.ACCOMMODATION,
        title: this.translateService.instant('ACCOMMODATION'),
        content: this.translateService.instant('INFORMATOR_ACCOMMODATION_DESC'),
        isExpanded: isExpanded(allExpanded, StatementAnchors.ACCOMMODATION, this.activePanel),
        icon: 'bed',
      },
      {
        id: StatementAnchors.MATERIAL_AID,
        title: this.translateService.instant('MATERIAL_HELP'),
        content: this.translateService.instant('INFORMATOR_MATERIAL_HELP_DESC'),
        isExpanded: isExpanded(allExpanded, StatementAnchors.MATERIAL_AID, this.activePanel),
        icon: 'interests_outline',
      },
      {
        id: StatementAnchors.TRANSPORT,
        title: this.translateService.instant('TRANSPORT'),
        content: this.translateService.instant('INFORMATOR_TRANSPORT_DESC'),
        isExpanded: isExpanded(allExpanded, StatementAnchors.TRANSPORT, this.activePanel),
        icon: 'directions_car_outline',
      },
      {
        id: StatementAnchors.HEALTH,
        title: this.translateService.instant('HEALTH'),
        content: this.translateService.instant('INFORMATOR_HEALTH_DESC'),
        isExpanded: isExpanded(allExpanded, StatementAnchors.HEALTH, this.activePanel),
        icon: 'local_hospital',
      },
      {
        id: StatementAnchors.LEGAL_HELP,
        title: this.translateService.instant('LEGAL_HELP'),
        content: this.translateService.instant('INFORMATOR_LEGAL_HELP_DESC'),
        isExpanded: isExpanded(allExpanded, StatementAnchors.LEGAL_HELP, this.activePanel),
        icon: 'gavel',
      },
      {
        id: StatementAnchors.TRANSLATIONS,
        title: this.translateService.instant('TRANSLATIONS'),
        content: this.translateService.instant('INFORMATOR_TRANSLATIONS_DESC'),
        isExpanded: isExpanded(allExpanded, StatementAnchors.TRANSLATIONS, this.activePanel),
        icon: 'translate',
      },
      {
        id: StatementAnchors.WORK,
        title: this.translateService.instant('WORK'),
        content: this.translateService.instant('INFORMATOR_WORK_DESC'),
        isExpanded: isExpanded(allExpanded, StatementAnchors.WORK, this.activePanel),
        icon: 'work_outline',
      },
      {
        id: StatementAnchors.EDUCATION,
        title: this.translateService.instant('INFORMATOR_EDUCATION_HEADER'),
        content: this.translateService.instant('INFORMATOR_EDUCATION_DESC'),
        isExpanded: isExpanded(allExpanded, StatementAnchors.EDUCATION, this.activePanel),
        icon: 'lan',
      },
    ];
  }

  ngAfterViewInit() {
    if (this.activePanel) {
      this.scroll(this.activePanel);
    }
  }

  scroll(id: string) {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView();
    }
  }

  ngOnDestroy(): void {
    if (this.langAndRouteSub$) {
      this.langAndRouteSub$.unsubscribe();
    }
  }
}
