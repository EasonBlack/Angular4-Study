import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import {AccountService} from "../services/account.service"

@Directive({
  selector: '[appHighlight1]'
})
export class HighlightServiceDirective {

  @Input() appHighlight1: string;

  constructor(
    private el: ElementRef,
    private accountservice: AccountService
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.accountservice.getAccountColor(this.appHighlight1));
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}