import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable, map, Subject } from 'rxjs';
import { Training } from 'src/app/shared/models/training.model';

@Injectable({
  providedIn: 'root',
})
export class GymService {
  searchedValue$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  getAll(): Observable<Training[]> {
    return this.http.get<Training[]>(`${environment.baseApiURL}trainings`);
  }

  getTrainingByID(id: number): Observable<Training> {
    return this.http.get<Training>(`${environment.baseApiURL}trainings/${id}`);
  }

}
