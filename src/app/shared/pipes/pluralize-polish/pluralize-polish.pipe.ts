import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralizePolish',
})
export class PluralizePolishPipe implements PipeTransform {
  // See https://github.com/mmiszy/polish-plurals/blob/5d2dc0cdea93e68e0a320a0201f0acb7a53206d0/index.mjs
  transform(count: number, one: string, few: string, many: string) {
    count = Math.abs(count);
    if (count === 1) {
      return one;
    } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
      return few;
    } else {
      return many;
    }
  }
}
