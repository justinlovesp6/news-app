import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './sharedUIComponents/header-navbar/header-navbar.component';
import { CreateArticleFormComponent } from './sharedUIComponents/create-article-form/create-article-form.component';
import { LoginComponent } from './components/login/login.component';
import { AllArticlesComponent } from './components/all-articles/all-articles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule, MatDialogModule, MatToolbarModule, MatMenuModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    CreateArticleFormComponent,
    LoginComponent,
    AllArticlesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule
  ],
  entryComponents: [CreateArticleFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
