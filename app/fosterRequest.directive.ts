import {Directive, HostBinding,Input} from '@angular/core';
 
@Directive({
	selector:'[tprFosterRequest]'
})
export class FosterRequestDirective{
   @HostBinding('class.is-fosterRequest') fosterRequest = true;
   @Input() set tprFosterRequest(value) {
    this.fosterRequest = value;
  }
}