import { Component, OnInit, Self, SkipSelf } from '@angular/core';
import { AnimalService } from '../providers/animal.service';
import { FlowerService } from '../providers/flower.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [{ provide: FlowerService, useValue: { emoji: '🌻' } },],
  viewProviders: [{ provide: AnimalService, useValue: { emoji: '🐶' } }]
})
export class ChildComponent implements OnInit {

  constructor(public flower: FlowerService, @SkipSelf() public animal: AnimalService) { }

  ngOnInit(): void {
  }

}
