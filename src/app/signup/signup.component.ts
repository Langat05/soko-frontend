import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {
  [x: string]: any;
  register;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.register = {
      username: '',
      password: '',
      email: ''
    };
  }
  registerUser() {
    this.userService.registerNewUser(this.register).subscribe(
      response => {
        alert('User' + this.register.username + 'has been registered')
      },
      error => console.log('error', error)

    );
 
  }
}


