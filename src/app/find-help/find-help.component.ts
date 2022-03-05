import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CategoryKeyFromRoutingName, CategoryRoutingName } from '../core/routing-category-name.enum';

type CategoryRoutingNameType =
  | CategoryRoutingName.ACCOMMODATION
  | CategoryRoutingName.MATERIAL_HELP
  | CategoryRoutingName.TRANSPORT
  | CategoryRoutingName.HEALTH
  | CategoryRoutingName.LEGAL_HELP
  | CategoryRoutingName.WORK
  | CategoryRoutingName.TRANSLATIONS
  | CategoryRoutingName.MISC;

@Component({
  selector: 'app-find-get-help',
  templateUrl: './find-help.component.html',
  styleUrls: ['./find-help.component.scss'],
})
export class FindHelpComponent implements OnInit {
  activeCategoryKey$: Observable<string | null> | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeCategoryKey$ = this.route.paramMap.pipe(
      map((paramMap) => CategoryKeyFromRoutingName[paramMap.get('category') as CategoryRoutingNameType])
    );
  }
}
