import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from "./welcome-routing.module";
import { CategoryNavigationComponent } from "./category-navigation/category-navigation.component";
import { HeroComponent } from "./hero/hero.component";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { Language, PomTranslateLoader } from "../core/translate-loader.service";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    WelcomeComponent, CategoryNavigationComponent, HeroComponent,
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: Language.pl_PL,
      loader: {
        provide: TranslateLoader,
        useClass: PomTranslateLoader,
      },
    }),
    MatIconModule,
  ]
})
export class WelcomeModule { }
