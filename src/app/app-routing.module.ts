import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AllArticlesComponent } from './components/all-articles/all-articles.component';


const routes: Routes = [
	{ path: 'articles', component: AllArticlesComponent },
  	{ path: 'login', component: LoginComponent },
  	{ path : '', component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
