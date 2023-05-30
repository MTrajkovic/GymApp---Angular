import { ReservationService } from '../../services/reservation.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Candidates } from '../../models/reservation.model';
import { Subject, take, takeUntil } from 'rxjs';
import { GymService } from '../../services/training.service';
import { Training } from '../../models/training.model';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-table-of-reservations',
  templateUrl: './reservation-fields.component.html',
  styleUrls: ['./reservation-fields.component.scss'],
})
export class TableOfReservationsComponent implements OnInit, OnDestroy {

  dataSource!: Candidates[];

  trainings?: Training[];

  isAdmin: boolean = false;

  private subscription$: Subject<void> = new Subject<void>();

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'training',
    'dateFrom',
    'dateTo',
    'delete',
  ];

  constructor(
    private reservationService: ReservationService,
    private gymService: GymService,
    private authService: AuthorizationService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.getAlltrainings();
    this.getAllCandidates();
    this.isReservationSaved();
  }

  ngOnDestroy(): void {
    this.subscription$.next();
    this.subscription$.complete();
  }

  onDelete(reservation: Candidates): void {
    this.reservationService
      .softDelete(reservation)
      .pipe(take(1))
      .subscribe(() => this.getAllCandidates());
  }

  private getAllCandidates(): void {
    this.reservationService
      .getAll()
      .pipe(takeUntil(this.subscription$))
      .subscribe((reservations) => (this.dataSource = reservations));
  }
  private getAlltrainings(): void {
    this.gymService
      .getAll()
      .pipe(take(1))
      .subscribe((trainings) => (this.trainings = trainings));
  }

  private isReservationSaved(): void {
    this.reservationService.madeReservation$
      .pipe(takeUntil(this.subscription$))
      .subscribe(() => {
        this.getAllCandidates();
      });
  }
}
