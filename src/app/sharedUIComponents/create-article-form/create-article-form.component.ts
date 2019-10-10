import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-article-form',
  templateUrl: './create-article-form.component.html',
  styleUrls: ['./create-article-form.component.scss'],
  providers: [ArticlesService]
})
export class CreateArticleFormComponent implements OnInit {
	public addArticleDialog;
	public selectedArticle;
	public updating: boolean;
	articleForm = new FormGroup({
	    title: new FormControl(''),
	    body: new FormControl(''),
	  });

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
  	if(this.selectedArticle && this.updating == true){
  		this.articleForm.setValue({
  			title: this.selectedArticle.title,
  			body: this.selectedArticle.body
  		});
  		console.log(this.articleForm);
  	}
  }

  closeDialog(){
	this.addArticleDialog.close("close");
  }

  submitArticle(){
	if(this.updating == true){
		this.editArticle();
	} else {
		this.createArticle();
	}
  }

  createArticle(){
  	this.articlesService.insertArticle(this.articleForm.value).subscribe(res=>{
		this.addArticleDialog.close(res);
		console.log(res);
	});
  }

  editArticle(){
  	this.articlesService.updateArticle(this.selectedArticle.id, this.articleForm.value).subscribe(res=>{
		this.addArticleDialog.close(res);
		console.log(res);
	});
  }

}
