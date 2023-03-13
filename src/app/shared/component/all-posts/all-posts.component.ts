import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/data';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

  postArray : IPost[] =[]
  constructor(private postservice : PostService) { }

  ngOnInit(): void {
    this.getAllposts()
  }

  getAllposts(){
    this.postservice.getAllPosts().subscribe(res=>{
      this.postArray = res
    }
    )
            
  }

  OnPostDelete(id:number){
    this.postservice.DeletePost(id)
            .subscribe(res=>{
              this.postArray = this.postArray.filter(post => post.id !== id)
            })
  }

}
