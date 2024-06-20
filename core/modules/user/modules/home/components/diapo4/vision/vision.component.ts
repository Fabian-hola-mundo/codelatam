import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {TranslateService} from "@ngx-translate/core";

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


  constructor(
    private translate: TranslateService,
  ) {
  }

  buttons = [
    this.translate.instant('vision'),
    this.translate.instant('infrastructure'),
    'HR',
    this.translate.instant('education'),
    this.translate.instant('marketing'),
    this.translate.instant('growth'),
    this.translate.instant('logistics'),
  ];

  changeDiapoStep(i: number) {
    this.diapoStep = i;
    this.changeDiapoStepEmitter.emit(this.diapoStep);
  }
}
