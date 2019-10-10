import { Injectable } from '@angular/core';
import { MatDialogModule, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CreateArticleFormComponent } from '../sharedUIComponents/create-article-form/create-article-form.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  public addArticleModal(){
        let config = new MatDialogConfig();
        let addArticleDialogRef = this.dialog.open(CreateArticleFormComponent, config);
        addArticleDialogRef.componentInstance.addArticleDialog = addArticleDialogRef;
        addArticleDialogRef.componentInstance.updating = false;
    }

  public editArticleModal(article){
  		let config = new MatDialogConfig();
        let addArticleDialogRef = this.dialog.open(CreateArticleFormComponent, {
          height: '400px',
          width: '600px'
        });
        addArticleDialogRef.componentInstance.addArticleDialog = addArticleDialogRef;
        addArticleDialogRef.componentInstance.selectedArticle = article;
        addArticleDialogRef.componentInstance.updating = true;
  }
}
