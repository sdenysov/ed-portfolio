import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-arrow-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-arrow-button.component.html',
  styleUrl: './text-arrow-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextArrowButtonComponent {
  @Input() buttonText: string = '';
  @Output() buttonClick = new EventEmitter<void>();

  onButtonClick() {
    this.buttonClick.emit();
  }
}
