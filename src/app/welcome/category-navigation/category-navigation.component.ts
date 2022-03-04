import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
  styleUrls: ['./category-navigation.component.scss'],
})
export class CategoryNavigationComponent {
  categories = [
    { name: 'ACCOMMODATION', icon: 'bed', path: '/szukaj-pomocy/accommodation', disabled: false },
    { name: 'MATERIAL_HELP', icon: 'interests_outline', path: '', disabled: false },
    { name: 'TRANSPORT', icon: 'directions_car_outline', path: '', disabled: false },
    { name: 'HEALTH', icon: 'local_hospital', path: '', disabled: true },
    { name: 'LEGAL_HELP', icon: 'gavel', path: '', disabled: true },
    { name: 'WORK', icon: 'work_outline', path: '', disabled: true },
    { name: 'TRANSLATIONS', icon: 'translate', path: '', disabled: true },
    { name: 'MISC', icon: 'lan', path: '', disabled: true },
  ];
}

@NgModule({
  declarations: [CategoryNavigationComponent],
  exports: [CategoryNavigationComponent],
  imports: [CommonModule, TranslateModule, MatIconModule, RouterModule],
})
export class CategoryNavigationComponentModule {}
