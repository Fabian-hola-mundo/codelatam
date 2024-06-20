import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-diapo5',
  standalone: true,
  imports: [],
  templateUrl: './diapo5.component.html',
  styleUrl: './diapo5.component.scss',
})
export class Diapo5Component {
  constructor(private traslate: TranslateService) {}

  texts = {
    goal: this.traslate.instant('goals'),
    goalEducation: this.traslate.instant('goalEducation'),
    goalMeasures: this.traslate.instant('goalMeasures'),
    goalIndustry: this.traslate.instant('goalIndustry'),
  };
}
