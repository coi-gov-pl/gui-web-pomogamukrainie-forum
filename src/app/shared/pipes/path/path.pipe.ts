import { Pipe, PipeTransform } from '@angular/core';
import { UrlHelperService } from '@app/core/url';

export type PathType = 'basePath' | 'imagesPath';

@Pipe({
  name: 'path',
})
export class PathPipe implements PipeTransform {
  constructor(protected urlHelperService: UrlHelperService) {}

  public transform(url: string, type: PathType): string {
    switch (type) {
      case 'basePath':
        return this.urlHelperService.basePath() + url;
      case 'imagesPath':
        return this.urlHelperService.imagesPath() + url;
      default:
        throw new Error(`PathPipe: Invalid resources type specified: ${type}`);
    }
  }
}
