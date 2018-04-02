import { Directive, ElementRef, HostListener, Input , OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAuth]'
})
export class AuthDirective  {



  @Input() set appAuth(auth: string) {
    if (auth =='admin') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor( 
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }

  // ngOnInit() {
  //   if(this.appAuth != "admin") {
  //     this.viewContainer.clear();
  //   } else {
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //   } 
  // }



 
}