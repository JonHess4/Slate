import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/services/login.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

	constructor(
		private loginService: LoginService,
		private router: Router
	) { }

	ngOnInit() {
	}

	logout() {
		this.loginService.logout();
		this.router.navigate(['/']);
	}

}
