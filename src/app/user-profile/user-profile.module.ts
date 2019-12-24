import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [UserProfileComponent],
	imports: [
		CommonModule,
		RouterModule,
		UserProfileRoutingModule
	],
	exports: [
		UserProfileComponent
	]
})
export class UserProfileModule { }
