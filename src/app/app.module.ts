import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { AllPostsComponent } from './shared/component/all-posts/all-posts.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { CreatePostComponent } from './shared/component/create-post/create-post.component';
import { UpdateComponent } from './shared/component/update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    DashboardComponent,
    SidebarComponent,
    PageNotFoundComponent,
    CreatePostComponent,
    UpdateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
