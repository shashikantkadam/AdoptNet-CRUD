import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPost } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postBaseUrl = environment.baseUrl;
  constructor( private http : HttpClient) { }

  getAllPosts(): Observable<IPost[]>{
    let httpheaders = new HttpHeaders({
      'content-type': 'application/json',
      'Autherization' : 'JWT Token qwerty'
    })
    return this.http.get<IPost[]>(this.postBaseUrl)
  }

  CreatePost(post : IPost):Observable<IPost>{
    return this.http.post<IPost>(this.postBaseUrl, post)
  }
  getSinglePost(id:number):Observable<IPost>{
    let SinglePostUrl =`${this.postBaseUrl}/${id}`
   return this.http.get<IPost>(SinglePostUrl)
  }
  UpdatePost(id:number, obj:IPost):Observable<IPost>{
    let updateUrl = `${this.postBaseUrl}/${id}`
    return this.http.patch<IPost>(updateUrl,obj)
  }

  DeletePost(id:number):Observable<IPost>{
    let DeleteUrl = `${this.postBaseUrl}/${id}`
    return this.http.delete<IPost>(DeleteUrl)
  }
}
