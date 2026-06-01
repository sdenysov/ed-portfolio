import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TextArrowButtonComponent } from '../text-arrow-button/text-arrow-button.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TextArrowButtonComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // TODO: Implement actual form submission logic
      // For now, just log the form data
      this.contactForm.reset();
    }
  }
}
