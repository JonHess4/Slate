import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

	navItems: string[] = ['home', 'book', 'search', 'log-in', 'user']

	constructor(
		private loginService: LoginService,
		private router: Router
	) { }

	ngOnInit() {
	}

}
