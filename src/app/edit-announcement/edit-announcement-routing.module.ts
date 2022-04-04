import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/auth';
import { EditAnnouncementComponent } from './edit-announcement.component';

const routes: Routes = [
  {
    path: '',
    component: EditAnnouncementComponent,
    canActivate: [AuthGuard],
    data: {
      title: null,
    },
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAnnouncementRoutingModule {}
