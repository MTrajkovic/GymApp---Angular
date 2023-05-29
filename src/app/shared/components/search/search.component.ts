import { GymService } from 'src/app/shared/services/training.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private gymService: GymService) {}

  onSearch(searchValue: string): void {
    this.gymService.searchedValue$.next(searchValue);
  }
}
