import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

	posts: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

	constructor() { }

	ngOnInit() {
	}

	// sort: new/date, hot/activity,

	// filter: category()/tags

	// search: contains string input

}
