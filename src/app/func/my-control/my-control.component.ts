import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const MY_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MyControlComponent),
  multi: true
};
export interface Info {
  name
  age
}

@Component({
  selector: 'app-my-control',
  templateUrl: './my-control.component.html',
  styleUrls: ['./my-control.component.scss'],
  providers: [MY_CONTROL_VALUE_ACCESSOR]
})
export class MyControlComponent implements OnInit, ControlValueAccessor {

  info = <Info>{};

  // 用來接收 setDisabledState 的狀態
  disabled = false;

  // 用來接收 registerOnChange 和 onTouched 傳入的方法
  onChange: (value) => {};
  onTouched: () => {};

  constructor() { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  writeValue(obj: any): void {
    this.info = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // 元件內必須找一個時機觸發 change 方法
  userInfoChange() {
    this.onChange(this.info);
  }

}


export class aa{
  
}