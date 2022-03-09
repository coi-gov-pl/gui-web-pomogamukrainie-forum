import { Component } from '@angular/core';
import { CategoryRoutingName, HelpTypePath } from '@app/shared/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  helpTypePath = HelpTypePath;
  categoryRoutingName = CategoryRoutingName;
}
