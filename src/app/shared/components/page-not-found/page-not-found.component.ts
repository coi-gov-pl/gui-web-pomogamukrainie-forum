import { Component } from '@angular/core';
import { CorePath } from '@app/shared/models';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  corePath = CorePath;
}
