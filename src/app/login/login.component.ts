import { Component, OnInit } from '@angular/core';
import { UserService,CanActivate } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  input;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute, )  {}
  ) { }

  ngOnInit() {
    this.input = {
      username: '',
      password: ''
    };

    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/forums');
  }


  onLogin() {
    if (this.username && this.password) {
      this.userService.login(this.username);
      this.router.navigateByUrl(this.return);
    }

    );

  }
}

