import { Component } from '@angular/core';
import { EDUCATION2 } from './education.json';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  educationData = EDUCATION2;
  hola = 'holaa';
}
