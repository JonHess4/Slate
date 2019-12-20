import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [NavBarComponent, FooterComponent],
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule
	],
	exports: [
		NavBarComponent,
		FooterComponent
	]
})
export class CoreModule { }
