import { take } from 'rxjs';
import { GymService } from 'src/app/shared/services/training.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Training } from 'src/app/shared/models/training.model';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss'],
})
export class TrainingDetails implements OnInit {
  training?: Training;

  private trainingId!: number;

  constructor(
    private gymService: GymService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.trainingId = Number(
      this.activeRoute.snapshot.paramMap.get('trainingId')
    );
    this.getOneTraining(this.trainingId);
  }

  private getOneTraining(id: number) {
    this.gymService
      .getTrainingByID(id)
      .pipe(take(1))
      .subscribe((training) => (this.training = training));
  }
}
