import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'posts', loadChildren: () => import('./post/post.module').then(m => m.PostModule) },
	{ path: 'search', loadChildren: () => import('./search/search.module').then(m=> m.SearchModule) },
	{ path: 'profile', loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule) },
	{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
