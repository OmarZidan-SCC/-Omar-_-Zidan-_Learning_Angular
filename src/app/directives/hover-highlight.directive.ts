import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {

  // Helps passing colour from template ig?
  @Input() appHoverHighlight = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {

    this.highlight(this.appHoverHighlight || '#3a3f44');
  }

  @HostListener('mouseleave') onMouseLeave() {

    this.highlight('');
  }

  private highlight(color: string) {

    this.el.nativeElement.style.backgroundColor = color;
  }
}
