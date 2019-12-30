import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IUser } from '../models/user';
import { NavBarService } from './nav-bar.service';

import { EndpointsService } from './endpoints.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

	private headers = new HttpHeaders({'Content-Type': 'application/json'});

	private user: IUser; // = {username: "", password: "", email: ""};

	constructor(
		private navbarService: NavBarService,
		private http: HttpClient,
    private endpointsService: EndpointsService
	) { }
	
	getUser(): IUser {
		return this.user;
	}
	
	setUser(user: IUser): void {
		this.user = user;
	}

	signUp(user: IUser): Observable<IUser> {
		
		const url: string = this.endpointsService.POST_SIGN_UP;
    const body = JSON.stringify(user);

    return this.http.post(url, body, {headers: this.headers, withCredentials: true }).pipe(
      map(resp => resp as IUser)
    );
	}

	signIn(user: IUser): Observable<IUser> {

		const url: string = this.endpointsService.POST_SIGN_IN;
    const body = JSON.stringify(user);

    return this.http.post(url, body, {headers: this.headers, withCredentials: true }).pipe(
      map(resp => resp as IUser)
    );
	}

	checkUsernameTaken(username: string): Observable<boolean> {
		const url: string = this.endpointsService.GET_USERNAME_TAKEN;

		return this.http.get(url.replace('${username}', username)).pipe(
			map(resp => resp as boolean)
		);
	}

	checkEmailTaken(email: string): Observable<boolean> {
		const url: string = this.endpointsService.GET_EMAIL_TAKEN;

		return this.http.get(url.replace('${email}', email)).pipe(
			map(resp => resp as boolean)
		);
	}

	logout() {
		this.user = undefined;
		this.navbarService.replaceNavItem('user', 'log-in');
	}
}
