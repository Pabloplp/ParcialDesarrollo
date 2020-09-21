import { Component } from '@angular/core';
import { SecurityService } from './services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private securityService: SecurityService, private router: Router) { }

  OnSalir() {
    this.securityService.logout();
    this.router.navigate(['login']);
  }

  OnVerificar() {
    return this.securityService.logedin();
  }
}
