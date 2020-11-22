import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../../sharedlibs/auth.service';

import { User } from '../../../sharedlibs/interface/index'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() loggedIn : boolean = false;
  @Input() isAdmin : boolean  = false;


  @Input() user: User | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  logout(): void {
    this.authService.signOut();
    this.router.navigateByUrl('/auth/login');
  }

  ngOnInit(){}



}
