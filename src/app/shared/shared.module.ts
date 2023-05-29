import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionLimitPipe } from './pipes/description-limit.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TableOfReservationsComponent } from './components/reservation-fields/reservation-fields.component';
import { SearchComponent } from './components/search/search.component';
import { MaterialModule } from './material/material.module';

const PIPES = [DescriptionLimitPipe,];
const COMPONENTS = [
  NotFoundComponent,
  TableOfReservationsComponent,
  SearchComponent,
];

@NgModule({
  declarations: [...PIPES, ...COMPONENTS],
  imports: [CommonModule, MaterialModule],
  exports: [...PIPES, ...COMPONENTS],
})
export class SharedModule {}
