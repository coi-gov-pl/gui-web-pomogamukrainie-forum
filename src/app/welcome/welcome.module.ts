import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { CategoryNavigationComponent } from './category-navigation/category-navigation.component';
import { HeroComponent } from './hero/hero.component';
import { TypeOfHelpComponentModule } from '../shared/components/type-of-help/type-of-help.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WelcomeComponent, CategoryNavigationComponent, HeroComponent],
  imports: [CommonModule, TypeOfHelpComponentModule, WelcomeRoutingModule, MatIconModule, TranslateModule],
})
export class WelcomeModule {}
