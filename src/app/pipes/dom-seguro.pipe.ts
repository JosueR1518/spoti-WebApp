import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {


  constructor(private ds: DomSanitizer) {


  }
  transform(uri: string, url?: any): any {
    return this.ds.bypassSecurityTrustResourceUrl(url + uri);
  }

}
