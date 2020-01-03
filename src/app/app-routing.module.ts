import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
	{ path: 'book', loadChildren: () => import('./posts/posts.module').then(m => m.PostModule) },
	{ path: 'search', loadChildren: () => import('./search/search.module').then(m=> m.SearchModule) },
	{ path: 'user', loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule) },
	{ path: 'log-in', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
