import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCompoment } from './trainings.component';

describe('TrainingCompoment', () => {
  let component: TrainingCompoment;
  let fixture: ComponentFixture<TrainingCompoment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCompoment ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingCompoment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
