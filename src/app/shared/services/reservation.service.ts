import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, Subject } from 'rxjs';
import { Candidates } from '../models/reservation.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  madeReservation$: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  getAll(): Observable<Candidates[]> {
    return this.http
      .get<Candidates[]>(`${environment.baseApiURL}reservations`)
      .pipe(
      );
  }

  softDelete(reservation: Candidates): Observable<Object> {
    return this.http.patch(
      `${environment.baseApiURL}reservations/${reservation.id}`,
      {
        deletedAt: new Date().toISOString(),
      }
    );
  }

  createReservation(reservation: Candidates): Observable<Object> {
    return this.http.post(`${environment.baseApiURL}reservations`, reservation);
  }
}
