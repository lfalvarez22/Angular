import { Pipe, PipeTransform } from '@angular/core';
import { SuperheroData } from '../../../shared/models/superhero.model';

@Pipe({
  name: 'filterSuperheros',
})
export class FilterSuperherosPipe implements PipeTransform {
  transform(
    items: Array<SuperheroData>,
    nameToSearch: string = ''
  ): Array<SuperheroData> {
    if (!nameToSearch) {
      return items;
    }

    return items.filter((item) => {
      return `${item.name}`.toLowerCase().indexOf(nameToSearch.toLowerCase()) > -1;
    });
  }
}
