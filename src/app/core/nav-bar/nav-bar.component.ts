import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

	searchForm = new FormGroup({
		searchParam: new FormControl('')
	});

	constructor(
		private router: Router
	) { }

	ngOnInit() {
	}

	onSubmit() {
		console.log('Searching...');
	}

}
