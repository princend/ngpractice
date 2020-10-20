import { Directive, forwardRef, HostBinding } from '@angular/core';
import { THEME } from '../theme-description/theme-description/token';

@Directive({
  selector: '[darkTheme]',
  providers: [{
    provide: THEME,
    useExisting: forwardRef(() => DarkThemeDirective)
  }]
})
export class DarkThemeDirective {
  readonly description = 'a dark theme';

  @HostBinding('style.color')
  readonly color = 'whitesmoke';

  @HostBinding('style.background')
  readonly background = '#2b2b2b';

  constructor() { }

}
