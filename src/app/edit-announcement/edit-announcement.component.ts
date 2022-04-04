import { Component } from '@angular/core';
import { CorePath } from '@app/shared/models';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.scss'],
})
export class EditAnnouncementComponent {
  corePath = CorePath;

  constructor() {}
}
