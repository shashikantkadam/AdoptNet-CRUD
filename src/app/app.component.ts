import { Component, OnInit } from '@angular/core';
import { PostService } from './shared/services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'crudTask';
  showSidebar: boolean = false
  display! :boolean
  constructor(private postservice : PostService){}
  ngOnInit(): void {
    this.showSidebar =true
    this.display = true
    // this.getData()
  }

  // getData(){
  //   this.postservice.getData().subscribe(res => console.log(res)
  //   )
  // }
}
