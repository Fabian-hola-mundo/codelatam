import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss'],
})
export class VisionComponent {
  @Input() diapoStep = 0;
  @Output() changeDiapoStepEmitter = new EventEmitter<number>();

  buttons = [
    'THE VISION',
    'INFRASTRUCTURE',
    'HR',
    'EDUCATION',
    'MARKETING',
    'GROWTH',
    'LOGISTICS',
  ];

  changeDiapoStep(i: number) {
    this.diapoStep = i;
    this.changeDiapoStepEmitter.emit(this.diapoStep);
  }
}
