import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
		private loginService: LoginService,
		private navbarService: NavBarService,
		private router: Router
	) { }

	ngOnInit() {
	}

	get isRegistering(): any { return this.loginForm.get('isRegistering'); }

	get username(): any { return this.loginForm.get('username'); }

	get email(): any { return this.loginForm.get('email'); }

	get password(): any { return this.loginForm.get('password'); }

	get confPassword(): any { return this.loginForm.get('confPassword'); }

	get rememberBox(): any { return this.loginForm.get('rememberBox'); }

	passValidator() {
		return this.loginForm.value.password === this.loginForm.value.confPassword;
	}

	checkUsernameTaken(): void {

		if (this.loginForm.value.username) {

			let usernameTaken = this.loginForm.value.username;

			this.loginService.checkUsernameTaken(this.loginForm.value.username).subscribe(user => {
				this.usernameTaken = user.username ? usernameTaken : "";
			});
		}
	}

	checkEmailTaken(): void {

		if (this.loginForm.value.email) {

			let emailTaken = this.loginForm.value.email;

			this.loginService.checkEmailTaken(this.loginForm.value.email).subscribe(user => {
				this.emailTaken = user.email ? emailTaken : "";
			})
		}
	}

	togglePasswordVisibility(): void {
		this.showPassword = !this.showPassword;
	}

	onSubmit(): void {

		let user: IUser = {
			id: 0,
			username: this.loginForm.value.username,
			email: this.loginForm.value.email,
			password: this.loginForm.value.password
		}

		if (!this.loginForm.value.isRegistering) {

			this.signIn(user);

		} else if (this.loginForm.value.isRegistering && !this.usernameTaken && !this.emailTaken && this.passValidator) {

			this.signUp(user);

		}
	}

	signUp(user: IUser): void {
		this.loginService.signUp(user).subscribe(user => {

			console.log(user);

			if (user) {
				this.loginSuccess(user);
			} else {
			}
		});
	}

	signIn(user: IUser): void {
		this.loginService.signIn(user).subscribe(user => {

			console.log(user);

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
		this.router.navigate(['/']);
	}

}
