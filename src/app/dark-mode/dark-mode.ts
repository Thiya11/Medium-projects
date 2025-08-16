import { Component } from '@angular/core';
import { DarkModeService } from '../shared/services/dark-mode.service';

@Component({
  selector: 'app-dark-mode',
  imports: [],
  templateUrl: './dark-mode.html',
  styleUrl: './dark-mode.scss'
})
export class DarkMode {

  constructor(
    public darkThemeService: DarkModeService
  ){}

  toggleTheme() {
    this.darkThemeService.toggleDarkMode();
  }

}
