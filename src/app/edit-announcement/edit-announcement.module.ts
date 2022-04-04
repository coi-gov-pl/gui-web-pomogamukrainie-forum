import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAnnouncementComponent } from './edit-announcement.component';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { CategoryNavigationComponentModule } from '@app/shared/components';
import { EditAnnouncementRoutingModule } from './edit-announcement-routing.module';

@NgModule({
  declarations: [EditAnnouncementComponent],
  imports: [
    EditAnnouncementRoutingModule,
    CommonModule,
    SharedModule,
    TranslateModule,
    CategoryNavigationComponentModule,
    MatCardModule,
  ],
})
export class EditAnnouncementModule {}
