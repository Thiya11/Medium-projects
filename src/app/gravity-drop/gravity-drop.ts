import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-gravity-drop',
  template: `
    <div class="simulation">
      <div class="ball" [style.transform]="transform()"></div>
      <button (click)="start()">Start</button>
    </div>
  `,
  styles: [`
    .simulation { position: relative; height: 400px; border: 1px solid #ccc; }
    .ball { width: 30px; height: 30px; background: red; border-radius: 50%; position: absolute; }
  `]
})
export class GravityDrop {
  positionY = signal(0); // in pixels
  time = signal(0); // seconds
  gravity = 9.8; // m/s²
  pixelPerMeter = 50; // scaling for display

  transform = signal('');

  constructor() {
    // Auto-update transform when position changes
    effect(() => {
      this.transform.set(`translateY(${this.positionY()}px)`);
    });
  }

  start() {
    this.time.set(0);
    const interval = setInterval(() => {
      const t = this.time() + 0.05; // increment by 50ms
      this.time.set(t);
      const yMeters = 0.5 * this.gravity * t * t;
      this.positionY.set(yMeters * this.pixelPerMeter);

      if (this.positionY() >= 370) { // hit the ground
        clearInterval(interval);
      }
    }, 50);
  }
}