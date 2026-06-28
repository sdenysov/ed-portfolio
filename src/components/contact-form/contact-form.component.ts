import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TextArrowButtonComponent } from '../text-arrow-button/text-arrow-button.component';
import { ToastService } from '../../services/toast.service';

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
  submitSuccess = false;
  submitButtonText = 'Send message';

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private toastService: ToastService
  ) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', [Validators.required]]
    });
  }

  private showValidationErrors(): void {
    this.toastService.showToast(
      'warning',
      'Looks like a few fields are missing',
      'Please complete all required fields before submitting'
    );
    
    // Mark all fields as touched to show error messages
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key)?.markAsTouched();
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.showValidationErrors();
      return;
    }
    
    if (!this.isSubmitting) {
      this.isSubmitting = true;
      this.submitButtonText = 'Sending...';
      this.cdr.markForCheck();

      // Netlify Forms submission
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
          this.submitButtonText = 'Send message';
          this.contactForm.reset();
          this.isSubmitting = false;
          this.cdr.markForCheck();
          
          // Show success toast
          this.toastService.showToast(
            'success',
            'All done',
            'Your message has been sent successfully'
          );
        })
        .catch((error) => {
          console.error('Form submission error:', error);
          this.submitSuccess = false;
          this.submitButtonText = 'Send message';
          this.isSubmitting = false;
          this.cdr.markForCheck();
          
          // Show error toast
          this.toastService.showToast(
            'warning',
            'Oops! Something went wrong',
            'Please try again'
          );
        });
    }
  }
}
