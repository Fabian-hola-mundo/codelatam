import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.scss']
})
export class InfrastructureComponent {

  imageNumber: any = 0;

  images = [
    'assets/images/places/aula.jpg',
    'assets/images/places/coffe-min.jpg',
    'assets/images/places/dormitorio-min.jpg',
    'assets/images/places/gym-min.jpg',
    'assets/images/places/lab1-min.jpg',
    'assets/images/places/lab2-min.jpg',
    'assets/images/places/verde-min.jpg',
    'assets/images/places/work-min.jpg',
    'assets/images/places/tennis.jpg',
    'assets/images/places/basketball.jpg',
  ];

  phrases = [
    'Classroom',
    'Cafeteria',
    'Dormitories',
    'Gymnasium',
    'Technology Labs',
    'Mechatronics Labs',
    'Green Areas',
    'Lounge',
    'Deportive areas',
    'Coliseum',
  ];

  public changeDiapo(i: any) {
    this.imageNumber = i;
  }

}
