 import {Directive,HostBinding} from '@angular/core';

 @Directive({
  selector:'[tprfosterRequest]'
})
export class FosterRequestDirective{
  @HostBinding('class.is-fosterRequest') fosterRequest=true;
}