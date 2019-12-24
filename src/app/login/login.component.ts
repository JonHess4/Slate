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
		loginType: new FormControl('Create Account!'),
		username: new FormControl(''),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required]),
		confPassword: new FormControl(''),
		rememberBox: new FormControl('checked')
	});

	showPassword: boolean;

	constructor(
		private loginService: LoginService,
		private router: Router
	) { }

	ngOnInit() {
		this.showPassword = false;
	}

	togglePasswordVisibility(): void {
		this.showPassword = !this.showPassword;
	}

	onSubmit() {

		let user: IUser = {
			username: this.loginForm.value.username,
			email: this.loginForm.value.email,
			password: this.loginForm.value.password
		}

		if (this.loginForm.value.loginType === 'Sign In!') {
			this.loginService.signIn(user);
		} else if (this.loginForm.value.loginType === 'Create Account!' && this.loginForm.value.password == this.loginForm.value.confPassword) {
			this.loginService.createAccount(user);
		}
		this.router.navigate(['/']);
	}

}
