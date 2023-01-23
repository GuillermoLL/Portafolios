import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  emailService = 'service_i8n1fwq'
  emailTemplate = 'template_gpwvdo6'
  publicKey = 'Z50nctPyZ8YkZHfES'

  contactForm: FormGroup;
  sending = false;

  constructor(private formBuilder: FormBuilder){
    this.contactForm = formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(9),Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    })
  }

  onSubmit(e: Event){
    e.preventDefault();
    if (this.contactForm.valid) {
      this.sending = true
      emailjs.sendForm(this.emailService, this.emailTemplate, e.target as HTMLFormElement, this.publicKey)
        .then((result: EmailJSResponseStatus) => {
          this.sending = false;
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu email se ha enviado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          this.contactForm.reset();
        }, (error) => {
          this.sending = false
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Oops...',
            text: 'Algo a salido mal, intentalo de nuevo mas tarde',
            showConfirmButton: false,
            timer: 1500
          })
      });
    }
  }

}
