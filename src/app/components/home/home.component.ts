import { Component } from '@angular/core';
import {
  bounceInAnimation,
  bounceInOnEnterAnimation,
  fadeInOnEnterAnimation,
  flashAnimation,
  flipInXOnEnterAnimation,
  flipOnEnterAnimation,
  headShakeAnimation,
  hueRotateAnimation,
  zoomInOnEnterAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    flashAnimation({ duration: 1000 }),
    headShakeAnimation({ duration: 1000, delay: 3000 }),
    fadeInOnEnterAnimation(),
    flipInXOnEnterAnimation(),
    zoomInOnEnterAnimation(),
    flipOnEnterAnimation(),
  ],
})
export class HomeComponent {
  expandMoreState = false;
  downloadResumeState = false;

  constructor() {}

  animDone(type: string) {
    switch (type) {
      case 'expandMore':
        this.expandMoreState = !this.expandMoreState;
        break;
      case 'downloadResume':
        this.downloadResumeState = !this.downloadResumeState;
        break;
      default:
        break;
    }
  }
}
