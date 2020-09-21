import { SecurityService } from './../../services/security.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    nombre: '',
    password: ''
  }
  constructor(
    private security: SecurityService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onlogin() {
    this.security.login(this.user).subscribe(
      (res) => {
        if (typeof res.token !== 'undefined') {
          localStorage.setItem('token', res.token);
          this.router.navigate(['cliente']);
        } else {
          console.log(res.mensaje);
        }

      }
    )
  }
}




