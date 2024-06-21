import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { AppTranslateModule } from './trasnlate.module';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppTranslateModule, MatIconModule, CommonModule, MatRippleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  disable = false;
  title = 'initiative-w';
  selectedLang = 'en';

  constructor(private translate: TranslateService) {
    const storedLang = localStorage.getItem('language');
    const defaultLang = storedLang || 'en';
    this.selectedLang = defaultLang;
    translate.setDefaultLang(defaultLang);
    translate.use(defaultLang);
  }

  disableLenguage(){
    this.disable = !this.disable
  }

  switchLanguage(event: any) {
    const lang = event.target as HTMLSelectElement;

    this.translate.use(lang.value);
    localStorage.setItem('language', lang.value);
    window.location.reload();
  }
}
