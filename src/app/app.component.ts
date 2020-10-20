import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userInfo = {
    name: 'Mike',
    age: 18
  };

  log(event) {
    console.log(event);
  }
}
