import { Component } from '@angular/core';
import { CategoryRoutingName } from '@app/shared/models';
import { CategoryRoutingName, CorePath } from '@app/shared/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  corePath = CorePath;
  categoryRoutingName = CategoryRoutingName;
}
