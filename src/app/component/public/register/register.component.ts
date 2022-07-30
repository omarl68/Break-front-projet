import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  selectedFile: any;
  imageUrl = 'assets/img/avatar.png';
  constructor(

    private fb: FormBuilder, private router: Router, private userService: UserService,
   

  ) {

    let formControls = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
      adress: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      state: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      zipe: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]"),
        Validators.minLength(4),
        Validators.maxLength(5)
      ]),
      file: new FormControl('', [
        Validators.required,

      ]),
    }

    this.registerForm = this.fb.group(formControls)
  }
  get file() { return this.registerForm.get('file') }
  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get phone() { return this.registerForm.get('phone') }
  get adress() { return this.registerForm.get('adress') }
  get state() { return this.registerForm.get('state') }
  get zipe() { return this.registerForm.get('zipe') }


  ngOnInit(): void {

  }
  save(event: any) {
    let reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => {
      // called once readAsDataURL is completed
      this.imageUrl = (event.target as FileReader).result!.toString();
    };

    this.selectedFile = event.target.files[0];
  }

  register() {
    let data = this.registerForm.value;
    let formData = new FormData();

    formData.append('firstname', data.firstname)
    formData.append('lastname', data.lastname)
    formData.append('email', data.email)
    formData.append('password', data.password);
    formData.append('phone', data.phone);
    formData.append('adress', data.adress);
    formData.append('state', data.state);
    formData.append('zipe', data.zipe);
    formData.append('picture', this.selectedFile);

    this.userService.addUser(formData).subscribe({
      next: (result) => {
        console.log(result);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      },
    });

  }


}
