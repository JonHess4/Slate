import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';

@NgModule({
	declarations: [PostComponent, PostListComponent, PostListItemComponent],
	imports: [
		CommonModule,
		PostRoutingModule
	],
	exports: [
		PostComponent
	]
})
export class PostModule { }
