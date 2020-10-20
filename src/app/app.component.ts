import { Component, Inject } from '@angular/core';
import { API_URL } from './func/api-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   *
   */
  constructor(@Inject(API_URL) readonly apiUrl: string) {
    console.log(this.apiUrl);

  }
  userInfo = {
    name: 'Mike',
    age: 18
  };

  log(event) {
    console.log(event);
  }
}
