import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
    access_key: new FormControl('63df0468-8da4-493f-a5f7-185595443042'),
  });

  constructor(private http: HttpClient) {}

  submitErrorMessage = '';
  submitSuccessMessage = '';

  onSubmit() {
    console.log('Form validity:', this.contactForm.valid);

    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form data:', formData);

      this.http.post('https://api.web3forms.com/submit', formData).subscribe({
        next: (response) => {
          console.log(response);
          this.submitSuccessMessage = 'Form submission successful!';
          this.submitErrorMessage = '';
        },
        error: (error) => {
          console.log(error);
          this.submitErrorMessage = 'Error sending message!';
          this.submitSuccessMessage = '';
        },
      });

      this.submitSuccessMessage = 'Form submission successful!';
      this.submitErrorMessage = '';
    } else {
      this.submitErrorMessage = 'Error sending message!';
      this.submitSuccessMessage = '';
    }
    this.contactForm.reset();
  }
}
