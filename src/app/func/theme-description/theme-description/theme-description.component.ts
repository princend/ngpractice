import { Component, Inject, OnInit } from '@angular/core';
import { Theme } from '../../dark-theme/theme';
import { THEME } from './token';

@Component({
  selector: 'app-theme-description',
  templateUrl: './theme-description.component.html',
  styleUrls: ['./theme-description.component.scss']
})
export class ThemeDescriptionComponent implements OnInit {

  constructor(@Inject(THEME) readonly currentTheme: Theme) { }

  ngOnInit(): void {
  }

}
