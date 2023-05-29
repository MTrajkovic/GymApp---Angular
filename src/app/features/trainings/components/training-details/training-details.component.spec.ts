import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDetails } from './training-details.component';

describe('TrainingDetails', () => {
  let component: TrainingDetails;
  let fixture: ComponentFixture<TrainingDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingDetails ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
