import { Component, Input, NgModule } from '@angular/core';
import { Category, CategoryNameKey, CategoryRoutingName, CorePath } from '@app/shared/models';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { Params, Router, RouterModule } from '@angular/router';
import { TypeOfHelpComponentModule } from '@app/shared/components';
import { StoreUrlService } from '@app/core/store-url';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions, MatTooltipModule } from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
  styleUrls: ['./category-navigation.component.scss'],
})
export class CategoryNavigationComponent {
  @Input() outputPath: CorePath = CorePath.Find;
  @Input() inactive: boolean = false;
  routingCategoryName = CategoryRoutingName;

  categories: Category[] = [
    { name: CategoryNameKey.ACCOMMODATION, icon: 'bed' },
    { name: CategoryNameKey.MATERIAL_HELP, icon: 'interests_outline' },
    { name: CategoryNameKey.TRANSPORT, icon: 'directions_car_outline' },
    { name: CategoryNameKey.HEALTH, icon: 'local_hospital', disabled: true },
    { name: CategoryNameKey.LEGAL_HELP, icon: 'gavel', disabled: true },
    { name: CategoryNameKey.JOB, icon: 'work_outline' },
    { name: CategoryNameKey.TRANSLATIONS, icon: 'translate', disabled: true },
    { name: CategoryNameKey.MISC, icon: 'lan', disabled: true },
  ];

  selectedCategory: Category | { name: string; icon: string };

  constructor(private router: Router, private storeUrlService: StoreUrlService) {
    const selectedCategory = this.categories.find((category) => this.isActive(category));
    this.selectedCategory = selectedCategory ? { ...selectedCategory } : { name: '', icon: '' };
  }

  isActive(category: Category): boolean {
    return this.router.url.includes(`/${CategoryRoutingName[category.name]}`);
  }

  queryParams(): Params {
    return this.storeUrlService.getDefaultQueryParams();
  }
}

// tooltip blocks touch actions
// https://github.com/angular/components/issues/4892#issuecomment-649108017
export const matTooltipCustomConfig: MatTooltipDefaultOptions = {
  showDelay: 5,
  hideDelay: 5,
  touchendHideDelay: 5,
  touchGestures: 'off',
};

@NgModule({
  declarations: [CategoryNavigationComponent],
  exports: [CategoryNavigationComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatIconModule,
    RouterModule,
    TypeOfHelpComponentModule,
    MatTooltipModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
  ],
  providers: [{ provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: matTooltipCustomConfig }],
})
export class CategoryNavigationComponentModule {}
