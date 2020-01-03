import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [NavBarComponent, FooterComponent],
	imports: [
		CommonModule,
		RouterModule,
		HttpClientModule
	],
	exports: [
		NavBarComponent,
		FooterComponent
	]
})
export class CoreModule { }
