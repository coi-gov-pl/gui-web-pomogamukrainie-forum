import { Component, Input, NgModule } from '@angular/core';
import { Category, CategoryNameKey, CategoryRoutingName, CorePath } from '@app/shared/models';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { Event, NavigationEnd, PRIMARY_OUTLET, Router, RouterModule } from '@angular/router';
import { TypeOfHelpComponentModule } from '@app/shared/components';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
  styleUrls: ['./category-navigation.component.scss'],
})
export class CategoryNavigationComponent {
  @Input() outputPath: CorePath = CorePath.Find;
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

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const tree = this.router.parseUrl(event.url);
        const children = tree.root.children[PRIMARY_OUTLET];
        const segments = children?.segments;

        this.categories.forEach((element) => (element.selected = false));

        if (segments && segments.length == 2) {
          const path = segments[1].path;
          let activeCategory = this.categories.find((element) => this.routingCategoryName[element.name] === path);
          if (activeCategory) {
            activeCategory.selected = true;
          }
        }
      }
    });
  }
}

@NgModule({
  declarations: [CategoryNavigationComponent],
  exports: [CategoryNavigationComponent],
  imports: [CommonModule, TranslateModule, MatIconModule, RouterModule, TypeOfHelpComponentModule],
})
export class CategoryNavigationComponentModule {}
