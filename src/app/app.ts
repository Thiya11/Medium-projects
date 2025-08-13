import { Component, signal } from '@angular/core';
import { EXAMPLES } from './shared/configs/common-configs';
import {RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mediumProjects');

}
