import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { RenderComponent } from '../render/render.component';
import { Diapo3Component } from '../diapo3/diapo3.component';
import { DiapositiveService } from '../../../../../../services/diapositive.service';
import { Diapo4Component } from '../diapo4/diapo4.component';
import { Diapo5Component } from '../diapo5/diapo5.component';
import { TranslateService } from '@ngx-translate/core';

export interface CARDDIAPO1 {
  name: string;
  departaments?: string;
  images?: string[];
}

@Component({
  selector: 'bel-above-the-fold',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    RouterModule,
    RenderComponent,
    Diapo3Component,
    Diapo4Component,
    Diapo5Component,
  ],
  templateUrl: './above.the.fold.component.html',
  styleUrls: ['./above.scss'],
})
export class AboveTheFoldComponent implements OnInit {
  test = '';

  text = {
    challenge: this.translate.instant('challenges'),
    forgeTitle: this.translate.instant('forgeTitle'),
  };

  diapositive: any;
  cardOnDiapositive1?: CARDDIAPO1;

  defaultImages = [
    'assets/images/violenciaSkelet.png',
    'assets/images/fullover.png',
  ];

  ngOnInit(): void {
    this.diapoService.diapositiveNumber$.subscribe((number) => {
      this.diapositive = number;
    });
  }

  constructor(
    private diapoService: DiapositiveService,
    private translate: TranslateService,
  ) {}

  nextDiapositive() {
    this.diapoService.nextDiapositive();
  }

  setCardOnHover(index: CARDDIAPO1) {
    this.cardOnDiapositive1 = index;
  }

  cardsDiapositive1: CARDDIAPO1[] = [
    {
      name: this.translate.instant('cardsViolenceTitle'),
      departaments: this.translate.instant('cardsViolenceDepartment'),
      images: [
        'assets/images/violenciaSkelet.png',
        'assets/images/violenciaOver.png',
      ],
    },
    {
      name: this.translate.instant('cardsPovertyTitle'),
      departaments: this.translate.instant('cardsPovertyDepartment'),
      images: [
        'assets/images/violenciaSkelet.png',
        'assets/images/pobrezaOver.png',
      ],
    },
    {
      name: this.translate.instant('cardsEducationTitle'),
      departaments: this.translate.instant('cardsEducationDepartment'),
      images: [
        'assets/images/violenciaSkelet.png',
        'assets/images/bajoLogroEducativoOver.png',
      ],
    },
    {
      name: this.translate.instant('cardWeMustTitle'),
      images: ['assets/images/latam-min.png'],
    },
  ];
}
