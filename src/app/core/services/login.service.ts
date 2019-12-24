import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { NavBarService } from './nav-bar.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

	private user: IUser; // = {username: "", password: "", email: ""};

	constructor(
		private navbarService: NavBarService
	) { }
	
	getUser(): IUser {
		return this.user;
	}

	signIn(user: IUser): void {
		this.user = user;
		this.navbarService.replaceNavItem('log-in', 'user');
	}

	createAccount(user: IUser): void {
		this.user = user;
		this.navbarService.replaceNavItem('log-in', 'user');
	}

	logout() {
		this.user = undefined;
		this.navbarService.replaceNavItem('user', 'log-in');
	}
}
