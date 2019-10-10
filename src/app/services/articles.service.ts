import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions } from '@angular/http';
// import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

	private apiUrl = "http://jsonplaceholder.typicode.com/";
	private posts = "posts";

  constructor(private http: Http) { }

  getAllArticles() {
  	return this.http
  		.get(this.apiUrl + this.posts)
  		.pipe(map(res => res.json()));
  }

  insertArticle(data) {
	return this.http.post(this.apiUrl + this.posts, data)
	    .pipe(map(res => res.json()));
  }

  updateArticle(id, data) {
  	return this.http.put(this.apiUrl + this.posts + '/' + id, data)
	    .pipe(map(res => res.json()));
  }
}
