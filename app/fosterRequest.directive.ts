import {Directive, HostBinding} from '@angular/core';

@Directive({
	selector:'[tprFosterRequest]'
})
export class FosterRequestDirective{
   @HostBinding('class.is-fosterRequest') fosterRequest = true;

}