import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PostsService{
  constructor(private http: Http){
    console.log('Posts service aninitalized');
  }
getPosts(){
  return this.http.get('https://api.github.com/repos/Microsoft/TypeScript/pulls?state=all')
  .map(res => res.json());
}

}
