import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
    selector: 'my-demo',
    templateUrl: './demo.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DemoComponent),
            multi: true
        }
    ]
})
export class DemoComponent implements ControlValueAccessor {
    private _data = "";
 
    writeValue(value: any) {
        this._data = value;
    }
 
    propagateChange = (_: any) => { };
 
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched() { }
 
    get msg() {
        return this._data;
    }
    set msg(value) {
        this._data = value;
        this.propagateChange(this._data);
    }
 
    constructor() { }
}

