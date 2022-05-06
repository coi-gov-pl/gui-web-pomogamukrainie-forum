import { Component, OnInit } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JobOffer, JobResourceService } from '@app/core/api';

@Component({
  selector: 'app-view-offer-job',
  templateUrl: './view-offer-job.component.html',
  styleUrls: ['./view-offer-job.component.scss'],
})
export class ViewOfferJobComponent implements OnInit {
  offerId!: number;
  data = defaults<JobOffer>();
  categoryRouteName = CategoryRoutingName.JOB;
  centered = false;
  disabled = false;
  unbounded = false;
  radius!: number;
  color!: string;
  redirectedFromAccount: boolean;
  originalAccountQueryParams?: Params;

  constructor(private route: ActivatedRoute, private jobsResourceService: JobResourceService, private router: Router) {
    // https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    // in constructor, because null will be returned in ngOnInit
    this.redirectedFromAccount = !!this.router.getCurrentNavigation()?.extras?.state?.['redirectFromAccount'];
    this.originalAccountQueryParams = this.router.getCurrentNavigation()?.extras?.state?.['queryParams'];
  }

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getJobOffer();
  }

  getJobOffer() {
    this.jobsResourceService.getJob(this.offerId).subscribe(
      (response) => {
        this.data = response;
      },
      () => {
        this.router.navigate([CorePath.Find, CategoryRoutingName.JOB, CategoryRoutingName.NOT_FOUND]);
      }
    );
  }
}
