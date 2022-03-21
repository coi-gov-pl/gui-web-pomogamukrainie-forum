import { Component } from '@angular/core';
import { CategoryRoutingName } from '@app/shared/models';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
    categoryRouteName = CategoryRoutingName.NOT_FOUND;
}
