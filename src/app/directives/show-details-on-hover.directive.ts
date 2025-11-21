import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appShowDetailsOnHover]',
  standalone: true
})
export class ShowDetailsOnHoverDirective {

  @Input('appShowDetailsOnHover') tooltipText: string = '';
  private tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltipText) {
      return;
    }

    this.tooltipElement = document.createElement('div');
    this.tooltipElement.innerText = this.tooltipText;

    this.tooltipElement.style.position = 'fixed';
    this.tooltipElement.style.background = '#91acc7';
    this.tooltipElement.style.color = 'black';
    this.tooltipElement.style.padding = '5px';
    this.tooltipElement.style.zIndex = '1000';

    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const top = hostPos.top - 30;
    const left = hostPos.left;

    this.tooltipElement.style.top = `${top}px`;
    this.tooltipElement.style.left = `${left}px`;

    document.body.appendChild(this.tooltipElement);
  }

  @HostListener('mouseleave') onMouseLeave() {

    if (this.tooltipElement) {
      this.tooltipElement.remove();
      this.tooltipElement = null;
    }
  }
}
