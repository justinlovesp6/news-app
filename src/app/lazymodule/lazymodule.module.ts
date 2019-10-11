import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllArticlesComponent } from '../components/all-articles/all-articles.component';

const routes: Routes = [
	{ path: 'articles', component: AllArticlesComponent },
  	{ path: 'lazymodule', loadChildren: './lazymodule/lazymodule.module#LazyModuleModule' }
];

@NgModule({
  declarations: [AllArticlesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazymoduleModule { }
