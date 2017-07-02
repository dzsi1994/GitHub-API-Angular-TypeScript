import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestService{
  constructor(private http: Http){
    console.log('Request service aninitalized');
  }
getRequests(){
  return this.http.get('https://api.github.com/repos/Microsoft/TypeScript/pulls?state=open')
  .map(res => res.json());
}
}
