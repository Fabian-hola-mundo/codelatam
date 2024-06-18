import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { NavComponent } from '../components/nav/nav.component';

@Component({
  selector: 'bel-layout',
  standalone: true,
  styleUrl:  './layout.component.scss',
  imports: [
    RouterModule,
    MatButtonModule,
    NavComponent
  ],
  template: `
  <bel-nav/>
  <router-outlet></router-outlet>
  <div class="backColor">
    <div class="circle circle1"></div>
    <div class="circle circle2"></div>
    <div class="circle circle3"></div>
  </div>
  `,
})
export class LayoutComponent{

}
