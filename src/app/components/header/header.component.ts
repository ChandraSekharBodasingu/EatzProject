import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private loginService: LoginService) {}
  loginMode: boolean;
  ngOnInit(): void {
    this.loginMode = this.loginService.isLoggedIn;
  }
}