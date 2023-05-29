import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingCompoment } from './components/trainings/trainings.component';
import { TrainingDetails } from './components/training-details/training-details.component';
import { TrainingCardComponent } from './components/central-part/central-part.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { TrainingsRoutingModule } from './trainings-routing.module';

const COMPONENTS = [
  TrainingCompoment,
  TrainingDetails,
  TrainingCardComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, SharedModule, RouterModule, TrainingsRoutingModule],
  exports: [...COMPONENTS],
})
export class GymModule {}
