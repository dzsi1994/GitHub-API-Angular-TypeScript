import {Component} from '@angular/core';
import {RequestService} from '../services/githubRequest.service';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'request.component.html',
  providers: [PostsService]
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies = true;
  posts: Post[];
  request: Request[];

  constructor(private postsService: PostsService) {
    this.name = 'sanyika';
    this.email = 'dzsi1994@gmail.com';
    this.address = {
      street: '12 Main st',
      city: 'Boston',
      state: 'Mai'
    }
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;
    this.postsService.getPosts().subscribe(posts =>
      this.posts = posts);

  }

  /*this.reqRequestService.getRequests().subscribe(requests =>
   //console.log(requests));
   this.request = requests);
   }*/
  toggleHobbies() {
    if (this.showHobbies == true) {
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
  }
}
interface address {
  street: string;
  city: string;
  state: string;
}
interface Request {
  id: number;
  title: string;
  body: string;
}
interface Post {
  id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
  html_url: string;
  user: {
    login: string;
  }
}
