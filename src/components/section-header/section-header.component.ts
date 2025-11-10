import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextArrowButtonComponent } from '../text-arrow-button/text-arrow-button.component';
import { SECTION, SECTION_HEADER_CONFIG } from './section-header.config';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule, TextArrowButtonComponent],
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
  @Input() section?: SECTION;
  @Input() title: string = '';
  @Input() label: string = '';
  @Input() textButton: string = '';
  @Output() textButtonClick = new EventEmitter<void>();

  get config() {
    if (this.section) {
      return SECTION_HEADER_CONFIG[this.section];
    }
    return { label: this.label, title: this.title, textButton: this.textButton };
  }
}
