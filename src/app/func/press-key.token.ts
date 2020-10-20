import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const PRESSED_KEY = new InjectionToken<Observable<string>>('keyboard press stream');