import { Component, Renderer2 } from '@angular/core';
import { RenderComponent } from '../render/render.component';
import { CommonModule } from '@angular/common';
import { VisionComponent } from './vision/vision.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { EducationComponent } from './education/education.component';
import { HrComponent } from './hr/hr.component';
import { MarketingComponent } from './marketing/marketing.component';
import { DevelopmentComponent } from './development/development.component';
import { LogisticComponent } from './logistic/logistic.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-diapo4',
  standalone: true,
  imports: [
    RenderComponent,
    CommonModule,
    VisionComponent,
    InfrastructureComponent,
    EducationComponent,
    HrComponent,
    MarketingComponent,
    DevelopmentComponent,
    LogisticComponent,
  ],
  templateUrl: './diapo4.component.html',
  styleUrls: ['./diapo4.component.scss'],
})
export class Diapo4Component {
  diapo: number = 4;

  text = {
    noWar: this.translate.instant('noWar'),
    torEducation: this.translate.instant('torEducation'),
    everything: this.translate.instant('everything'),
  };

  bodyElement = this.renderer.selectRootElement('body', true);
  constructor(
    private renderer: Renderer2,
    private translate: TranslateService,
  ) {}

  ngOnInit(): void {
    this.updateBackgroundImage(this.bodyElement);
  }

  public changeDiapo(i: number) {
    this.diapo = i;
  }

  private updateBackgroundImage(bodyElement: HTMLElement): void {
    /* this.renderer.setStyle(bodyElement, 'background', 'linear-gradient(120deg, rgb(20 20 25), rgb(0 0 0 / 82%)), url(./media/grain.svg)'); */
    this.renderer.setStyle(bodyElement, 'background', 'white');
  }
}
