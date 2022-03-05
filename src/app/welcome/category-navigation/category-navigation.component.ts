import { Component } from '@angular/core';
import { CategoryRoutingName } from '../../core/routing-category-name.enum';
import { CategoryNameKey } from '../../core/category-name-key.enum';
import { Category } from '../../core/category';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
  styleUrls: ['./category-navigation.component.scss'],
})
export class CategoryNavigationComponent {
  routingCategoryName = CategoryRoutingName;

  categories: Category[] = [
    { name: CategoryNameKey.ACCOMMODATION, icon: 'bed', path: '', disabled: false },
    { name: CategoryNameKey.MATERIAL_HELP, icon: 'interests_outline', path: '', disabled: false },
    { name: CategoryNameKey.TRANSPORT, icon: 'directions_car_outline', path: '', disabled: false },
    { name: CategoryNameKey.HEALTH, icon: 'local_hospital', path: '', disabled: true },
    { name: CategoryNameKey.LEGAL_HELP, icon: 'gavel', path: '', disabled: true },
    { name: CategoryNameKey.WORK, icon: 'work_outline', path: '', disabled: true },
    { name: CategoryNameKey.TRANSLATIONS, icon: 'translate', path: '', disabled: true },
    { name: CategoryNameKey.MISC, icon: 'lan', path: '', disabled: true },
  ];
}
