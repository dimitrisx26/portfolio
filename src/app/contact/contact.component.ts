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
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  constructor(private http: HttpClient) {}

  submitErrorMessage = '';
  submitSuccessMessage = '';

  onSubmit() {
    if (this.contactForm.valid) {
      // Send form data to server or handle it in some other way
      // ...
      const formData = this.contactForm.value;

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
  }
}
