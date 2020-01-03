import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		LoginRoutingModule,
		MatSnackBarModule,
		ReactiveFormsModule
	],
	exports: [
		LoginComponent
	]
})
export class LoginModule { }
