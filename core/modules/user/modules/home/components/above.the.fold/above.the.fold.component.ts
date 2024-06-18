import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import * as THREE from 'three';
import { GLTFLoader, ThreeMFLoader } from 'three-stdlib';
import { RenderComponent } from '../render/render.component';
import { Diapo3Component } from '../diapo3/diapo3.component';
import { DiapositiveService } from '../../../../../../services/diapositive.service';
import { Diapo4Component } from '../diapo4/diapo4.component';
import { Diapo5Component } from '../diapo5/diapo5.component';

export interface CARDDIAPO1 {
  name: string,
  departaments?: string,
  images? : string[]
}

@Component({
  selector: 'bel-above-the-fold',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatRippleModule, RouterModule,
    RenderComponent, Diapo3Component, Diapo4Component, Diapo5Component
  ],
  templateUrl: './above.the.fold.component.html',
  styleUrls: ['./above.scss'],
})
export class AboveTheFoldComponent {

  test = ''

  diapositive : any
  next: any
  cardOnDiapositive1?: CARDDIAPO1
  defaultImages = [
    'assets/images/violenciaSkelet.png',
    'assets/images/fullover.png'
  ]

  ngOnInit(): void {
    this.diapoService.diapositiveNumber$.subscribe(number => {
      this.diapositive = number;
    });
  }

  constructor(
    private diapoService: DiapositiveService
  ){
  }

  nextDiapositive() {
    this.diapoService.nextDiapositive();
  }

  setCardOnHover(index: CARDDIAPO1) {
    this.cardOnDiapositive1 = index
    console.log(this.cardsDiapositive1);
  }

  cardsDiapositive1 : CARDDIAPO1 [] = [
    {
      name: 'Violence',
      departaments: 'Nariño, Cauca, Chocó, Valle del Cauca, Bolívar, Norte de Santander, Risaralda, Magdalena, Córdoba, Putumayo, Arauca y Antioquia',
      images: [
        'assets/images/violenciaSkelet.png',
        'assets/images/violenciaOver.png'
      ]
    },
    {
      name: 'Multidimensional poverty',
      departaments: 'Guajira, Vichada and Chocó among the poorest',
      images: [
        'assets/images/violenciaSkelet.png',
        'assets/images/pobrezaOver.png'
      ]
    },
    {
      name: 'Low educational attainment',
      departaments: 'Boyacá and Norte de Santander within the departments with the lowest educational achievement',
      images: [
        'assets/images/violenciaSkelet.png',
        'assets/images/bajoLogroEducativoOver.png'
      ]
    },
    {
      name: 'We must change all of Latam',
      images: [
        'assets/images/latam-min.png',
      ]
    },
  ]
}
