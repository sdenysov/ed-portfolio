import { Directive, ElementRef, Input, OnDestroy, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements AfterViewInit, OnDestroy {
  @Input() animationType: 'base' | 'fade' | 'slide-up' | 'slide-left' | 'scale' = 'slide-up';
  @Input() animationDelay: string = '0.5s';
  @Input() threshold: number = 0.1;

  private intersectionObserver?: IntersectionObserver;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    this.setupAnimation();
    this.initializeObserver();
  }

  private setupAnimation() {
    const element = this.elementRef.nativeElement;

    // Add the animation type class
    this.renderer.addClass(element, `scroll-animation-${this.animationType}`);

    // Set animation delay if provided
    if (this.animationDelay !== '0s') {
      this.renderer.setStyle(element, '--animation-delay', this.animationDelay);
    }
  }

  private initializeObserver() {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when element comes into view
            this.renderer.addClass(entry.target, 'animate-in');

            // Stop observing this element once animated
            this.intersectionObserver?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: this.threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    this.intersectionObserver?.disconnect();
  }
}
