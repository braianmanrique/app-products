import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
const base_url = environment.base_url;

@Pipe({
  name: 'logo'
})
export class LogoPipe implements PipeTransform {

  transform(logo: string): string {
    // if(!logo){
    //   return 'no image'
    // }else(logo){
    //   return 'El logo'
    // }
    return 'logo va'
  
  }

}
