import { InjectionToken } from '@angular/core';
import { Theme } from '../../dark-theme/theme';

export const THEME = new InjectionToken<Theme>('Contains a current theme info');
