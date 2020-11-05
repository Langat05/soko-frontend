import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  input;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.input = {
      username: '',
      password: ''
    };
  }


  onLogin() {
    this.userService.loginUser(this.input).subscribe(
      response => {
        console.log(response);
        alert(this.input.username + ' logged in successfully')
      },
      error => {
        console.log('error', error);
      }

    );

  }
}

