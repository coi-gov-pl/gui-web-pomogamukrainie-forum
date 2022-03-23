import { Component } from '@angular/core';
import { CorePath } from '@app/shared/models';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  corePath = CorePath;
}
