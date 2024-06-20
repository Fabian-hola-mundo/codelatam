import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.scss'],
})
export class InfrastructureComponent {
  constructor(private translate: TranslateService) {}

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
  ];

  phrases = [
    this.translate.instant('classroom'),
    this.translate.instant('cafeteria'),
    this.translate.instant('dormitories'),
    this.translate.instant('gymnasium'),
    this.translate.instant('technologyLabs'),
    this.translate.instant('mechatronicsLabs'),
    this.translate.instant('greenAreas'),
    this.translate.instant('lounge'),
  ];

  public changeDiapo(i: any) {
    this.imageNumber = i;
  }
}
