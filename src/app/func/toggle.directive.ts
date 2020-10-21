import { Directive, Input, OnInit, TemplateRef, ViewContainerRef, } from '@angular/core';

@Directive({
  selector: '[toggle]',
})
export class ToggleDirective implements OnInit {

  on = true;
  @Input('toggleOn') initialState = true;


  constructor(private tpl: TemplateRef<{ $implicit: Toggle }>,
    private vcr: ViewContainerRef) {
  }

  ngOnInit() {
    this.on = this.initialState;

    this.vcr.createEmbeddedView(this.tpl, {
      $implicit: {
        on: this.on,
        setOn: this.setOn,
        setOff: this.setOff,
        toggle: this.toggle,
      }
    });
  }

  setOn() { this.on = true }

  setOff() { this.on = false }

  toggle() { this.on = !this.on }

}


type Toggle = {
  on: boolean;
  setOn: Function;
  setOff: Function;
  toggle: Function;
}