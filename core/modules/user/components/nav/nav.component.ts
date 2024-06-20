import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DiapositiveService } from '../../../../services/diapositive.service';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'bel-nav',
  standalone: true,
  styleUrl: './nav.component.scss',
  imports: [
    CommonModule,
    MatButtonModule,
    MatRippleModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
  ],
  template: `
    <audio #audioPlayer autoplay loop>
      <source src="assets/paraLaGuerraNada.mp3" type="audio/mpeg" />
    </audio>
    <nav>
      <ul class="navigation">
        <li class="logo" routerLink="./">
          <svg width="93" height="34" viewBox="0 0 93 34" fill="none">
            <g clip-path="url(#clip0_10_6)">
              <path
                class="fill-svg"
                d="M17.35 0L0 16.49L17.35 33.05H25.63L8.21 16.49L25.63 0H17.35Z"
                fill="black"
              />
              <path
                class="fill-svg"
                d="M75.61 0H67.33L81.69 13.59H60.95C59.59 6.84 53.63 1.75 46.47 1.75C38.31 1.75 31.7 8.36 31.7 16.52C31.7 24.68 38.31 31.29 46.47 31.29C53.65 31.29 59.6299 26.17 60.9599 19.38H81.6999L67.32 33.04H75.5999L92.9499 16.48L75.61 0Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_10_6">
                <rect width="92.97" height="33.05" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </li>
        <li class="navigation--actions">
          <div>
            <ul>
              @for (section of sections; track section; let i = $index) {
                <li (click)="setDiapo(i)" role="navigation">
                  <div
                    matRipple
                    class="nav"
                    [ngClass]="{ active: diapositiveNumber === i }"
                  >
                    <h4>{{ section }}</h4>
                  </div>
                </li>
              }
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  `,
})
export class NavComponent {
  @ViewChild('audioPlayer', { static: true })
  audioPlayer!: ElementRef<HTMLAudioElement>;
  diapositiveNumber?: any;

  sections: string[] = [
    'CODELATAM',
    this.translate.instant('challengesVariant'),
    this.translate.instant('ourChilds'),
    this.translate.instant('vision'),
    this.translate.instant('goals'),
  ];


  ngOnInit(): void {
    this.audioPlayer.nativeElement.volume = 0.1; // Ajusta el volumen
    this.diapoService.diapositiveNumber$.subscribe((number) => {
      this.diapositiveNumber = number;
    });
  }

  setDiapo(i: any) {
    this.diapoService.setDiapositive(i);
  }

  constructor(public diapoService: DiapositiveService, private translate: TranslateService) {}
}
