import { Message } from 'src/app/models/message';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup

  constructor(private fb: FormBuilder, private messageService: MessageService, private toastr: ToastrService) {
    let formControls = {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      subject: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      content: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(10)
      ]),
    }
    this.contactForm = this.fb.group(formControls);
  }

  get name() { return this.contactForm.get('name') }
  get email() { return this.contactForm.get('email') }
  get subject() { return this.contactForm.get('subject') }
  get content() { return this.contactForm.get('content') }

  ngOnInit(): void {
  }

  sendMessage() {

    let data = this.contactForm.value;

    let message = new Message(data.name, data.email, data.subject, data.content);

    this.messageService.addMessage(message).subscribe(
      {
        next: res => {
          this.toastr.info(res.message);
          this.contactForm.reset()
        },
        error: err => {
          console.log(err);
        }
      }
    )

  }

}
