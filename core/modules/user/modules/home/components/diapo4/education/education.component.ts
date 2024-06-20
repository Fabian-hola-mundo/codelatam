import { Component } from '@angular/core';
import { EDUCATION2 } from './education.json';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  educationData = EDUCATION2.map((item) => {
    return {
      macroName: this.translate.instant(item.macroName),
      subItems: item.subItems.map((subItem) => {
        return this.translate.instant(subItem);
      }),
    };
  });

  constructor(private translate: TranslateService) {}
}
