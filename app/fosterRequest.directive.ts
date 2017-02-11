import {Directive, HostBinding,HostListener, Input} from '@angular/core';
 
@Directive({
	selector:'[tprFosterRequest]'
})
export class FosterRequestDirective{
  @HostBinding('class.is-fosterRequest') fosterRequest = true;
  @HostBinding('class.is-fosterRequest-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }

   @Input() set tprFosterRequest(value) {
    this.fosterRequest = value;
  }
}