import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ContentItemConfig {
  name: string;
  itemTitle?: string;
  images: string[];
}

@Component({
  selector: 'app-content-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-item.component.html',
  styleUrl: './content-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentItemComponent {
  @Input({ required: true }) item!: ContentItemConfig;
}

// Made with Bob
