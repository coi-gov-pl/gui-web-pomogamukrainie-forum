import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pageable, TransportOffer, TransportOfferSearchCriteria, TransportResourceService } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transport-search',
  templateUrl: './transport-search.component.html',
  styleUrls: ['./transport-search.component.scss'],
})
export class TransportSearchComponent implements OnInit {
  results: TransportOffer[] = [];
  total?: number = undefined;
  loading = false;
  CategoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  searchCriteria: TransportOfferSearchCriteria = {};
  pagination: Pageable | undefined;
  @ViewChild('transportResultsStart', { read: ElementRef }) resultsStart!: ElementRef;

  constructor(private transportResourceService: TransportResourceService, private route: ActivatedRoute) {}

  ngOnInit() {
    const { page, size, capacity, transportDate, originCity, originRegion, destinationCity, destinationRegion } =
      this.route.snapshot.queryParams;
    const searchCriteria: TransportOfferSearchCriteria = {
      capacity,
      transportDate,
      origin: {
        region: originRegion,
        city: originCity,
      },
      destination: {
        region: destinationRegion,
        city: destinationCity,
      },
    };
    if (
      page != null ||
      size != null ||
      capacity != null ||
      transportDate != null ||
      originCity != null ||
      originRegion != null ||
      destinationCity != null ||
      destinationRegion != null
    ) {
      this.search(searchCriteria);
    }
  }

  search(searchCriteria?: TransportOfferSearchCriteria) {
    this.loading = true;

    const { page, size, sort } = this.route.snapshot.queryParams;

    if (searchCriteria) {
      this.searchCriteria.origin = searchCriteria?.origin;
      this.searchCriteria.destination = searchCriteria?.destination;
      this.searchCriteria.capacity = searchCriteria?.capacity;
      this.searchCriteria.transportDate = searchCriteria?.transportDate;
    }

    const pageRequest: Pageable = {
      page,
      size,
      sort,
    };

    this.transportResourceService.listTransport(pageRequest, this.searchCriteria).subscribe({
      next: (results) => {
        this.results = results.content ?? [];
        this.total = results.totalElements ?? 0;
        this.loading = false;
        this.resultsStart?.nativeElement?.scrollIntoView();
      },
      error: () => {
        this.results = [];
        this.total = undefined;
        this.loading = false;
      },
    });
  }
}
