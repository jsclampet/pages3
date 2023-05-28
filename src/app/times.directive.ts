import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }
  
  //@Input expects data from Parent
  //"appTimes" allows us to use this binding [appTimes]
  //"set" is for change detection
  //the name "render" is the property of appTimes that we're changing
    // -- the purpose of this is to have more readable code
    // -- it'll be more readable to us and other dev's
  @Input('appTimes') set render(times: number) {
    // clear viewContainer ... "clean-slate"
    this.viewContainer.clear();

    //iterate "times" amount of iterations
    for (let i = 0; i < times; i++) {
      //this.viewContainer --> look at "viewContainer"
      //createEmbeddedView --> create some type of html inside
      //this.templateRef --> represent HTML inside of view container
        //--viewContainer is WHERE we use this directive
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  } 
}
