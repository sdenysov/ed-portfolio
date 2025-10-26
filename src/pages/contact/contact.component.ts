import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { SECTION } from '../../components/section-header/section-header.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  SECTION = SECTION;
}

