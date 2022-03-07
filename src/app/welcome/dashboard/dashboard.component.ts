import { Component } from '@angular/core';
import { HelpTypePath } from '../../core/help-direction.enum';
import { CategoryRoutingName } from '../../core/routing-category-name.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  helpTypePath = HelpTypePath;
  categoryRoutingName = CategoryRoutingName;
}
