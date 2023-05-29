import { Component, OnDestroy, OnInit } from '@angular/core';
import { take, takeUntil, Subject } from 'rxjs';
import { GymService } from 'src/app/shared/services/training.service';
import { Training } from 'src/app/shared/models/training.model';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss'],
})
export class TrainingCompoment implements OnInit, OnDestroy {
  trainings?: Training[];

  trainingsCounter?: number;

  searchedValue: string = '';

  private subscription$: Subject<void> = new Subject<void>();

  constructor(private gymService: GymService) {}

  ngOnInit(): void {
    this.getAlltrainings();
  }

  ngOnDestroy(): void {
    this.subscription$.next();
    this.subscription$.complete();
  }

  private getAlltrainings(): void {
    this.gymService
      .getAll()
      .pipe(take(1))
      .subscribe((trainings) => (this.trainings = trainings));
  }
}
