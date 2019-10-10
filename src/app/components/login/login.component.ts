import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule, MatDialogModule, MatToolbarModule, MatMenuModule } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm = new FormGroup({
		email: new FormControl(''),
		username: new FormControl('')
	});

  constructor(private articlesService: ArticlesService, private router: Router) { if(sessionStorage.getItem('credentials')) { this.router.navigate(['articles']); } }

  ngOnInit() {
  }

  login() : void {
    if(this.loginForm.value.email == 'admin' && this.loginForm.value.username == 'admin'){
     let key = 'credentials';
     let cred = {
     	email: this.loginForm.value.email,
     	username: this.loginForm.value.username
     };
     sessionStorage.setItem(key, JSON.stringify(cred));
     this.router.navigate(["articles"]);
    }else {
      alert("Invalid credentials");
    }
  }

}
