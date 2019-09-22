import { Directive, ElementRef, Renderer, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResalta]'
})
export class ResaltaDirective {

  constructor(el:ElementRef,renderer:Renderer2) {
    renderer.setStyle(el.nativeElement,'backgroundColor','yellow');
   }

}
