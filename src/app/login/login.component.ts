import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { LoginService } from '../core/services/login.service';
import { IUser } from '../core/models/user';
import { Router } from '@angular/router';
import { NavBarService } from '../core/services/nav-bar.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

	loginForm = new FormGroup({
		isRegistering: new FormControl('true'),
		username: new FormControl('', Validators.maxLength(24)),
		email: new FormControl('', [Validators.required, Validators.email, , Validators.maxLength(24)]),
		password: new FormControl('', [Validators.required, , Validators.maxLength(24)]),
		confPassword: new FormControl(''),
		rememberBox: new FormControl('checked')
	});

	usernameTaken: string;

	emailTaken: string;

	showPassword: boolean;

	constructor(
		private location: Location,
		private loginService: LoginService,
		private navbarService: NavBarService,
		private router: Router
	) { }

	ngOnInit() {
	}

	get isRegistering(): AbstractControl { return this.loginForm.get('isRegistering'); }

	get username(): AbstractControl { return this.loginForm.get('username'); }

	get email(): AbstractControl { return this.loginForm.get('email'); }

	get password(): AbstractControl { return this.loginForm.get('password'); }

	get confPassword(): AbstractControl { return this.loginForm.get('confPassword'); }

	get rememberBox(): AbstractControl { return this.loginForm.get('rememberBox'); }

	passValidator() {
		return this.loginForm.value.password === this.loginForm.value.confPassword;
	}

	checkUsernameTaken(username: string): void {
		if (username) {
			this.loginService.checkUsernameTaken(username).subscribe(bool => {
				this.usernameTaken = bool ? username : '';
			});
		}
	}

	checkEmailTaken(email: string): void {
		if (email) {
			this.loginService.checkEmailTaken(email).subscribe(bool => {
				this.emailTaken = bool ? email : '';
			});
		}
	}

	togglePasswordVisibility(): void {
		this.showPassword = !this.showPassword;
	}

	onSubmit(username: string, email: string, password: string): void {

		let user: IUser = {
			id: 0,
			username: username,
			email: email,
			password: password
		}

		if (this.isRegistering.value) {
			this.signUp(user);
		} else {
			this.signIn(user);
		}
	}

	signUp(user: IUser): void {
		this.loginService.signUp(user).subscribe(user => {

			if (user) {
				this.loginSuccess(user);
			} else {
				console.log("Could not create user.");
			}

		});
	}

	signIn(user: IUser): void {
		this.loginService.signIn(user).subscribe(user => {

			if (user) {
				this.loginSuccess(user);
			} else {
				console.log('User not found.');
			}

		});
	}

	loginSuccess(user: IUser): void {
		this.loginService.setUser(user);
		this.navbarService.replaceNavItem('log-in', 'user');
		this.location.back();
	}

}
