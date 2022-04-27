import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Pipe extends default ngx-translate pipe to freely use with array of translations
 */
@Pipe({
  name: 'translateArray',
})
export class TranslateArrayPipe extends TranslatePipe implements PipeTransform {
  override transform(value: string | string[], ...args: unknown[]): string {
    if (Array.isArray(value)) {
      const [separator] = args;
      return value.map((val) => super.transform(val)).join(<string>separator);
    } else {
      return super.transform(value);
    }
  }
}
