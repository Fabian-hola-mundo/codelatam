import { Component, ElementRef, OnInit, Renderer2, ViewChild, viewChild } from '@angular/core';
import { DiapositiveService } from '../../../../../../services/diapositive.service';
import { CHILDSBACK, CHILDSFRONT } from '../../../../../../constants/childs';
import { CommonModule } from '@angular/common';
import { PHRASES } from '../../../../../../constants/phrases';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-diapo3',
  standalone: true,
  imports: [CommonModule, MatRippleModule],
  templateUrl: './diapo3.component.html',
  styleUrl: './diapo3.component.scss'
})
export class Diapo3Component implements OnInit {

  imagesBack = CHILDSBACK;
  imagesFront = CHILDSFRONT;
  phrases = PHRASES;
  activeImageBack?: string;
  activeImageFront?: string;
  activePhrase?: string;
  private intervalId?: number;
  public currentIndex: number = 0;
  inex = this.currentIndex
  @ViewChild('image') image!: ElementRef;
  bodyElement = this.renderer.selectRootElement('body', true);

  constructor(
    private renderer : Renderer2,
    private diapoService: DiapositiveService
  ){

  }

  ngOnInit(): void {

    // Inicializar la imagen activa
    this.activeImageBack = this.imagesBack[this.currentIndex];
    this.activeImageFront = this.imagesFront[this.currentIndex];
    this.activePhrase = this.phrases[this.currentIndex];

    // Configurar el intervalo para cambiar la imagen cada 5 segundos
    this.intervalId = window.setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imagesBack.length;
      this.activeImageBack = this.imagesBack[this.currentIndex];
      this.activeImageFront = this.imagesFront[this.currentIndex];
      this.activePhrase = this.phrases[this.currentIndex];
      this.updateBackgroundImage(this.bodyElement);
    }, 7000);

    // Suscribirse a los cambios de diapositiveNumber$
    this.diapoService.diapositiveNumber$.subscribe(diapoNumber => {
      if (diapoNumber === 2) {
        this.updateBackgroundImage(this.bodyElement);
      } else {
        this.renderer.removeStyle(this.bodyElement, 'background-image');
      }
    });
  }

  ngOnDestroy(): void {
    // Limpiar el intervalo cuando el componente se destruya
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  changeIndex(i: any){
    this.currentIndex = i
    this.updateBackgroundImage(this.bodyElement);
  }

  private updateBackgroundImage(bodyElement: HTMLElement): void {
    if (this.activeImageBack) {
      this.renderer.setStyle(bodyElement, 'background-image', `url(${this.activeImageBack})`);
      this.renderer.setStyle(bodyElement, 'background-repeat', 'no-repeat');
      this.renderer.setStyle(bodyElement, 'background-size', '140%');
      this.renderer.setStyle(bodyElement, 'background-position', 'center');
    }
  }

}
