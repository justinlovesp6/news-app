import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent implements OnInit {

	public currentUser = JSON.parse(sessionStorage.getItem('credentials'));

  constructor(private router: Router) { if(!this.currentUser){ this.router.navigate(['login']) } }

  ngOnInit() {
  	console.log(this.currentUser);
  }

  logout() {
  	sessionStorage.removeItem('credentials');
  	this.router.navigate(['login']);
  }

}
