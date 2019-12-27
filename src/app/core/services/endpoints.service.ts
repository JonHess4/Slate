import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

	private readonly baseURL = environment.baseUrl;

  public readonly POST_SIGN_UP: string = this.baseURL + "login-service/sign-up";

	public readonly POST_SIGN_IN: string = this.baseURL + "login-service/sign-in";
	
	public readonly GET_USERNAME_TAKEN: string = this.baseURL + "login-service/usernames/${username}";

	public readonly GET_EMAIL_TAKEN: string = this.baseURL + "login-service/emails/${email}";

  constructor() { }
}
