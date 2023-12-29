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
  });

  submitErrorMessage = '';
  submitSuccessMessage = '';

  onSubmit() {
    if (this.contactForm.valid) {
      // Send form data to server or handle it in some other way
      // ...

      this.submitSuccessMessage = 'Form submission successful!';
      this.submitErrorMessage = '';
    } else {
      this.submitErrorMessage = 'Error sending message!';
      this.submitSuccessMessage = '';
    }
  }

}
