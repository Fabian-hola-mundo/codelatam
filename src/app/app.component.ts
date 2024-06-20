import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { AppTranslateModule } from './trasnlate.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppTranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'initiative-w';

  constructor(private translate: TranslateService) {
    const storedLang = localStorage.getItem('language');
    const defaultLang = storedLang || 'en';
    translate.setDefaultLang(defaultLang);
    translate.use(defaultLang);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
    window.location.reload();
  }
}
