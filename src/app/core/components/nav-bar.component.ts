import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { NavBarService } from '../services/nav-bar.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

	constructor(
		private loginService: LoginService,
		private navbarService: NavBarService,
		private router: Router
	) { }

	ngOnInit() {
		this.setNavItems(!!this.loginService.getUser(), environment.navItemsLoggedIn, environment.navItemsLoggedOut);
	}

	setNavItems(loggedIn: boolean, loggedInNavItems: string[], loggedOutNavItems: string[]): void {
		let navItems: string[];
		if (loggedIn) {
			navItems = loggedInNavItems;
		} else {
			navItems = loggedOutNavItems;
		}
		this.navbarService.setNavItems(navItems);
	}

}
