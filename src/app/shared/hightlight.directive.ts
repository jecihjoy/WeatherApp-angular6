import { Directive, ElementRef, HostListener, OnChanges, Input } from "@angular/core";

@Directive({
    selector: '[highlight]'
})

export class HighlightDirective {

    defaultColor = 'margenta';

    constructor(private el: ElementRef) {
    }
    @Input('highlight') color: string;
    
    @HostListener('mouseenter') onmouseenter() {
        this.highlightText('pink');
    }

    @HostListener('mouseleave') onmouseleave() {
        this.highlightText(null);
    }
    private highlightText(color: string) {
        this.el.nativeElement.style.color = color;
    }
    /*
    ngOnChanges(){
        el.nativeElement.style.customProperty = true;
        this.el.nativeElement.style.color = this.color || this.defaultColor;
    }*/
}