import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

   id! : number;
  postForm : FormGroup = {} as FormGroup
  constructor( private fb : FormBuilder, private postservice: PostService, private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.cretePostForm()
  }

  OnPostSubmit(){
    console.log(this.postForm.value);
    let userId = Math.floor(Math.random() * 10)
    let obj = {
      UserId : userId,
      ...this.postForm.value
    }

    this.postservice.CreatePost(obj)
            .subscribe(res =>{
            })

            this.router.navigate(['/allpost'])
  }
  cretePostForm(){
    this.postForm = this.fb.group({
      title : ['',[Validators.required]],
      body : ['', [Validators.required]]
    })
  }

}
