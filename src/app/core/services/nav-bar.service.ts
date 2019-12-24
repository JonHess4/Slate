import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NavBarService {

	private navItems: string[];

	constructor() { }

	getNavItems(): string[] {
		return this.navItems;
	}
	
	setNavItems(navItems: string[]): void {
		this.navItems = navItems;
	}

	replaceNavItem(oldNavItem: string, newNavItem: string): void {
		let index = this.navItems.indexOf(oldNavItem);
		if (index > -1) {
			this.navItems[index] = newNavItem;
		}
	}
}
