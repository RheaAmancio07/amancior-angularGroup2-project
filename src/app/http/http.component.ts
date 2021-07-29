import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Post, User } from '../models';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  showDetails:boolean = false;

  // posts: Post[];
  users: User[];

  selectedUser: User;
  
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getUsers().subscribe(users =>{
      this.users = users as User[];
      console.log(users);
      
    })

    // this.http.getPosts().subscribe(posts =>{
    //   this.posts = posts as Post[];
    //   console.log(this,posts);
    //   // console.log(posts)
      ;
      
    // })
  }

  viewDetails(id: number){
    this.showDetails = true;
    this.http.id = this.users.id;
    console.log("USER_ID " + id);
    let index = this.users.findIndex(users=>users.id === id);
    this.selectedUser = this.users[index];
    console.log(this.selectedUser);
    
  }

  backToUsers(){
    this.showDetails = false;
  }

}
