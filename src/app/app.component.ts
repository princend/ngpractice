import { AfterViewInit, Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { last } from 'rxjs/operators';
import { Person } from './func/person/person';
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
export class AppComponent implements AfterViewInit {

  person = { firstName: 'huang', lastName: 'Tim' };
  objs: Array<Person> = [];
  userInfo = {
    name: 'Mike',
    age: 18
  };

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


  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.person.firstName = 'Lin'
    // }, 5000);
  }

  changeFirstName() {
    this.person.firstName = Math.random().toString() + 'Lin';
  }


  /**
   *
   *新增一個名字
   * @param {*} firstName
   * @param {*} lastName
   * @param {*} show
   * @memberof AppComponent
   */
  append(firstName, lastName, show) {
    this.objs.push({ firstName: firstName, lastName: lastName, show: show == '1' ? true : false });
  }


  /**
   *
   *變更obj的參考位址
   * @memberof AppComponent
   */
  changeRef() {
    this.objs = JSON.parse(JSON.stringify(this.objs));
  }


  log(event) {
    console.log(event);
  }
}
