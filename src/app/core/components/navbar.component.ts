import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {

	navbarItems = ['home', 'book', 'search', 'log-in'];

	constructor(
	) { }

	ngOnInit() {
	}

}
