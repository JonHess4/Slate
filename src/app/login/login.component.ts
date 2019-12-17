import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

	constructor() { }

	ngOnInit() {
	}

	onSubmit() {
		console.log('User Embarking!');
	}

}
