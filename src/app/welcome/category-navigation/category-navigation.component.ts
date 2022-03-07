import { Component, Input, NgModule } from '@angular/core';
import { CategoryRoutingName } from '../../core/routing-category-name.enum';
import { CategoryNameKey } from '../../core/category-name-key.enum';
import { Category } from '../../core/category';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TypeOfHelpComponentModule } from '../../shared/components/type-of-help/type-of-help.component';
import { HelpTypePath } from '../../core/help-direction.enum';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
  styleUrls: ['./category-navigation.component.scss'],
})
export class CategoryNavigationComponent {
  @Input() outputPath: HelpTypePath = HelpTypePath.Find;
  routingCategoryName = CategoryRoutingName;

  categories: Category[] = [
    { name: CategoryNameKey.ACCOMMODATION, icon: 'bed' },
    { name: CategoryNameKey.MATERIAL_HELP, icon: 'interests_outline' },
    { name: CategoryNameKey.TRANSPORT, icon: 'directions_car_outline' },
    { name: CategoryNameKey.HEALTH, icon: 'local_hospital', disabled: true },
    { name: CategoryNameKey.LEGAL_HELP, icon: 'gavel', disabled: true },
    { name: CategoryNameKey.WORK, icon: 'work_outline', disabled: true },
    { name: CategoryNameKey.TRANSLATIONS, icon: 'translate', disabled: true },
    { name: CategoryNameKey.MISC, icon: 'lan', disabled: true },
  ];
}

@NgModule({
  declarations: [CategoryNavigationComponent],
  exports: [CategoryNavigationComponent],
  imports: [CommonModule, TranslateModule, MatIconModule, RouterModule, TypeOfHelpComponentModule],
})
export class CategoryNavigationComponentModule {}
