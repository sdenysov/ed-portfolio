import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
  @Input() title: string = '';
  @Input() subtitle: string | undefined = '';
  @Input() subtitleHeader: string | undefined = '';
  @Input() label: string = '';
  @Input() textButton: string = '';
  @Output() textButtonClick = new EventEmitter<void>();
  @Output() arrowButtonClick = new EventEmitter<void>();
}
