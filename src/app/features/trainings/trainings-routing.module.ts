import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingDetails } from './components/training-details/training-details.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { TrainingCompoment } from './components/trainings/trainings.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingCompoment,
    canActivate: [AuthGuard],
  },
  {
    path: ':trainingId',
    canActivate: [AuthGuard],
    component: TrainingDetails,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingsRoutingModule {}
