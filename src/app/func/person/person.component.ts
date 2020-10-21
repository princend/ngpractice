import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit, AfterViewInit {

  @Input() person: { firstName: string, lastName: string };

  constructor() { }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }





  fullName() {
    console.log('call method');

    return this.person.firstName + ' ' + this.person.lastName
  }

  onClick() {
    console.log('Button was clicked');
  }

}
