import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) { 

   }
   // using "any" type for Object
   @Input('appClass') set classNames(classObj: any) {
    // for-in loop to iterate through object
    for (let key in classObj) {
      if (classObj[key]){
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
   }

}
 