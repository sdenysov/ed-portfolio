import { Injectable, signal } from '@angular/core';

export type ToastType = 'warning' | 'success';

export interface ToastMessage {
  show: boolean;
  type: ToastType;
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toast = signal<ToastMessage>({
    show: false,
    type: 'warning',
    title: '',
    message: ''
  });

  showToast(type: ToastType, title: string, message: string) {
    this.toast.set({ show: true, type, title, message });
    
    // Auto-hide after 4 seconds
    setTimeout(() => {
      this.hideToast();
    }, 4000);
  }

  hideToast() {
    this.toast.set({ show: false, type: 'warning', title: '', message: '' });
  }
}
