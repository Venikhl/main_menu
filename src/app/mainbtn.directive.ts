import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMainbtn]'
})
export class MainbtnDirective {
  @Input() appMainbtn: string;

  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = this.appMainbtn;
   }

   @HostListener('click') onClick(){
    alert('Clicked!');
}

}
