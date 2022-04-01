import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, args: any[]): string {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
    const trail = args.length > 1 ? args[1] : '...';
    const limited = value.substring(0, limit);
    return value.length > limit ? limited.slice(0, limited.lastIndexOf(' ')) + trail : value;
  }
}
