import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArticlesService } from '../../services/articles.service';
import { DialogService } from '../../services/dialog.service';
import { HeaderNavbarComponent } from '../../sharedUIComponents/header-navbar/header-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.scss'],
  providers: [ArticlesService, DialogService]
})
export class AllArticlesComponent implements OnInit {

	name = new FormControl('');
	private allArticles = [];

  constructor(private articlesService: ArticlesService, private dialogService: DialogService) { }

  ngOnInit() {
  	this.articlesService.getAllArticles().subscribe(res => {
  		this.allArticles = res;
  	});
  }

  addArticleBtn() {
  	this.dialogService.addArticleModal();
  }

  viewArticle(article) {
  	this.dialogService.editArticleModal(article);
  }

}
