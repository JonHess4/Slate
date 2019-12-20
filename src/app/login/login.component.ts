import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../core/services/login.service';
import { IUser } from '../core/models/user';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm = new FormGroup({
		username: new FormControl(''),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required]),
		loginType: new FormControl('Sign In!'),
		rememberBox: new FormControl('checked')
	});

	constructor(
		private loginService: LoginService,
		private router: Router
	) { }

	ngOnInit() {
	}

	onSubmit() {
		let user: IUser = {
			username: this.loginForm.value.username,
			email: this.loginForm.value.email,
			password: this.loginForm.value.password
		}
		this.loginService.login(user);
		this.router.navigate(['/']);
	}

}
