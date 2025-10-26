import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SECTION, SECTION_HEADER_CONFIG } from './section-header.config';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
  @Input() section?: SECTION;
  @Input() title: string = '';
  @Input() label: string = '';
  @Input() textButton: string = '';
  @Output() textButtonClick = new EventEmitter<void>();
  @Output() arrowButtonClick = new EventEmitter<void>();

  get config() {
    if (this.section) {
      return SECTION_HEADER_CONFIG[this.section];
    }
    return { label: this.label, title: this.title, textButton: this.textButton };
  }
}
