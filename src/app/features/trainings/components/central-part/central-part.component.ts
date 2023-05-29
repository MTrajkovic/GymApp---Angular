import { Component, Input } from '@angular/core';
import { Training } from 'src/app/shared/models/training.model';

@Component({
  selector: 'app-central-part',
  templateUrl: './central-part.component.html',
  styleUrls: ['./central-part.component.scss'],
})
export class TrainingCardComponent {
  @Input() training!: Training;
}
