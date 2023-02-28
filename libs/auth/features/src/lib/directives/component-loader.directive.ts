import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[componentLoader]',
  standalone: true
})
export class ComponentLoaderDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
