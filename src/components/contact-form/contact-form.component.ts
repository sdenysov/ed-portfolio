import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;
  submitButtonText = 'Send message';

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitButtonText = 'Sending...';
      this.submitMessage = '';
      this.cdr.markForCheck();

      // Encode form data for Netlify
      const encode = (data: any) => {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&');
      };

      const formData = {
        'form-name': 'contact',
        'fullName': this.contactForm.value.fullName,
        'email': this.contactForm.value.email,
        'phone': this.contactForm.value.phone || '',
        'message': this.contactForm.value.message
      };

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(formData)
      })
        .then(() => {
          this.submitSuccess = true;
          this.submitMessage = 'Thank you! Your message has been sent successfully.';
          this.submitButtonText = 'Send message';
          this.contactForm.reset();
          this.isSubmitting = false;
          this.cdr.markForCheck();
          
          // Clear success message after 5 seconds
          setTimeout(() => {
            this.submitMessage = '';
            this.cdr.markForCheck();
          }, 5000);
        })
        .catch((error) => {
          console.error('Form submission error:', error);
          this.submitSuccess = false;
          this.submitMessage = 'Oops! Something went wrong. Please try again.';
          this.submitButtonText = 'Send message';
          this.isSubmitting = false;
          this.cdr.markForCheck();
        });
    }
  }
}
