import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { DateAdapter } from '@angular/material/core';
import { Moment } from 'moment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnDestroy {
  @Input()
  date: string | undefined;
  @Input() required = false;

  @Output()
  dateChange = new EventEmitter<string>();

  dateModel: Date | undefined;

  langChangeSub: Subscription;

  constructor(private translate: TranslateService, private dateAdapter: DateAdapter<Date>) {
    const currentLang = translate.currentLang ?? translate.getBrowserCultureLang();
    this.setLocale(currentLang.split('_')[0]);
    this.langChangeSub = translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setLocale(event.lang.split('_')[0]);
    });
  }

  setLocale(locale: string) {
    this.dateAdapter.setLocale(locale);
  }

  onDatePickerChange({ value }: MatDatepickerInputEvent<Moment>) {
    if (value?.isValid()) {
      this.dateModel = value?.toDate();
      this.dateChange.emit(value?.format('YYYY-MM-DD'));
    } else {
      this.dateChange.emit(undefined);
    }
  }

  ngOnDestroy() {
    this.langChangeSub.unsubscribe();
  }
}
