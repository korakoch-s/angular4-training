import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyUnless]'
})
export class MyUnlessDirective {
  private hasView = false;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set appMyUnless(condition: boolean) {
   if (!condition && !this.hasView) {
     this.viewContainer.createEmbeddedView(this.templateRef);
     this.hasView = true;
   } else if (condition && this.hasView) {
     this.viewContainer.clear();
     this.hasView = false;
   }
 }

}
