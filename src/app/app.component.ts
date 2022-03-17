import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackAlertComponent } from './shared/components/snackbar/snackbar.component';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from '@app/core/translations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pomagamukrainie';
  constructor(private router: Router, private translateService: TranslateService, private snackBar: MatSnackBar) {}

  getContentClass() {
    return this.router.url === '/' ? '' : 'header-padding';
  }

  // showSnackbar(content: any) {
  //   this.snackBar.open(content);
  // }
  // showSnackbarAction(content: any, action: any) {
  //   let snack = this.snackBar.open(content, action);
  //   snack.afterDismissed().subscribe(() => {
  //     console.log('This will be shown after snackbar disappeared');
  //   });
  //   snack.onAction().subscribe(() => {
  //     console.log('This will be called when snackbar button clicked');
  //   });
  // }
  // showSnackbarDuration(content: any, action: any, duration: any) {
  //   this.snackBar.open(content, action, duration);
  // }
  // showSnackbarTopPosition(content: any, action: any, duration: any) {
  //   this.snackBar.open(content, action, {
  //     duration: 2000,
  //     verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
  //     horizontalPosition: 'right', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
  //   });
  // }
  // showSnackbarCssStyles(content: any, action: any, duration: any) {
  //   let sb = this.snackBar.open(content, action, {
  //     duration: duration,
  //     horizontalPosition: 'right',
  //     verticalPosition: 'top',
  //     panelClass: ['custom-style'],
  //   });
  //   sb.onAction().subscribe(() => {
  //     sb.dismiss();
  //   });
  // }
  // showBasicComponent(message: string, panelClass: string) {
  //   this.snackBar.openFromComponent(SnackbarComponent, {
  //     data: this.data,
  //     duration: 10000,
  //     horizontalPosition: 'right',
  //     verticalPosition: 'top',
  //     panelClass: ['snackbar-alert'],
  //   });
  // }

  ngOnInit() {
    this.translateService.use(LanguageCode.pl_PL);
  }
}
