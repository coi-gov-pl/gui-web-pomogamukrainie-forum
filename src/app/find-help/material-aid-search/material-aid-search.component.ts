import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pageable, MaterialAidOfferSearchCriteria, MaterialAidResourceService, MaterialAidOffer } from '../../../api';

@Component({
  selector: 'app-material-aid-search',
  templateUrl: './material-aid-search.component.html',
  styleUrls: ['./material-aid-search.component.scss'],
})
export class MaterialAidSearchComponent {
  results: MaterialAidOffer[] = [];
  total?: number = undefined;
  loading = false;
  constructor(private http: HttpClient, private materialAidResourceService: MaterialAidResourceService) {}

  search(searchCriteria: MaterialAidOfferSearchCriteria) {
    this.loading = true;

    const pageRequest: Pageable = {
      // page?: number;
      // size?: number;
      // sort?: Array<string>;
    };

    // TODO a proper request
    this.materialAidResourceService.listMaterialAid(pageRequest, searchCriteria).subscribe({
      next: (results) => {
        this.results = results.content ?? [];
        this.total = results.totalElements ?? 0;
        this.loading = false;
      },
      error: () => {
        this.results = [];
        this.total = undefined;
        this.loading = false;
      },
    });
  }
}
