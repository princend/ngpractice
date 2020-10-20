import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './func/api-token';
import { PRESSED_KEY } from './func/press-key.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   *
   */
  constructor(@Inject(API_URL) readonly apiUrl: string, @Inject(PRESSED_KEY) readonly pressedKey$: Observable<string>) {
    console.log(this.apiUrl);
    this.pressedKey$.subscribe(e => console.log(e));

  }
  userInfo = {
    name: 'Mike',
    age: 18
  };

  log(event) {
    console.log(event);
  }
}
