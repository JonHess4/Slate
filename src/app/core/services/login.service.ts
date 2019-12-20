import { Injectable } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

	private user: IUser; // = {username: "", password: "", email: ""};

	constructor() { }
	
	getUser(): IUser {
		return this.user;
	}

	login(user: IUser): void {
		this.user = user;
	}
}
