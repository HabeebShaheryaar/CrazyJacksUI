import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required])


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  Login(email, password) {  
    console.log("User Logged in")
  }

}

