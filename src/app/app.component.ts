import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './func/provide/api-token';
import { PRESSED_KEY } from './func/provide/press-key.token';
import { AnimalService } from './func/providers/animal.service';
import { FlowerService } from './func/providers/flower.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [{ provide: AnimalService, useValue: { emoji: '🦔' } }]
})
export class AppComponent {

  person = { firstName: 'huang', lastName: 'Tim' }
  /**
   *
   */
  constructor(
    @Inject(API_URL) readonly apiUrl: string,
    @Inject(PRESSED_KEY) readonly pressedKey$: Observable<string>,
    public animal: AnimalService, public flower: FlowerService) {
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
