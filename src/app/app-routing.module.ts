import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './shared/component/all-posts/all-posts.component';
import { CreatePostComponent } from './shared/component/create-post/create-post.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { UpdateComponent } from './shared/component/update/update.component';

const routes: Routes = [
  {
    path:" ", component:DashboardComponent
  },
  {
    path:"dashboard", component:DashboardComponent
  },
  {
    path:"allpost", component:AllPostsComponent
  },
  {
    path:"createpost" , component: CreatePostComponent
  },
  {
    path : 'updatepost/:id', component : UpdateComponent
  },
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
