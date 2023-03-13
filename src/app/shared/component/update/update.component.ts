import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  updatepostform : FormGroup = {} as FormGroup
  constructor( private fb : FormBuilder, private route: ActivatedRoute, private postservice: PostService) { }

  ngOnInit(): void {
    this.CreateUpdateForm()
    this.OnUpdatePost()
   this.getEditPostValue()

  }
  getEditPostValue(){
    this.route.queryParams
    .subscribe((param : Params)=>{
         let id =param['id']
         this.postservice.getSinglePost(id)
              .subscribe(res=>{
                 this.updatepostform.setValue({
                  title : res.title,
                  body : res.body
                }) 
              })
  
  })
  }
  CreateUpdateForm(){
    this.updatepostform = this.fb.group({
      title : ['', [Validators.required]],
      body : ['', [Validators.required]]

    })
  }
  OnUpdatePost(){
    this.route.queryParams
    .subscribe((param : Params)=>{
         let id = param['id']
         this.postservice.UpdatePost(id,this.updatepostform.value)
                  .subscribe(res =>{
                  })
        })
    
  }

}
