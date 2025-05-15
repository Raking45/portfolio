import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MessagesComponent } from './admin/messages/messages.component';
import { Article1Component } from './pages/article1/article1.component';
import { Article2Component } from './pages/article2/article2.component';
import { Article3Component } from './pages/article3/article3.component';
import { Article4Component } from './pages/article4/article4.component';
import { Article5Component } from './pages/article5/article5.component';
import { Article6Component } from './pages/article6/article6.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'admin/messages',
    component: MessagesComponent
  },
  {
    path: 'pages/article1',
    component: Article1Component
  },
  {
    path: 'pages/article2',
    component: Article2Component
  },
  {
    path: 'pages/article3',
    component: Article3Component
  },
  {
    path: 'pages/article4',
    component: Article4Component
  },
  {
    path: 'pages/article5',
    component: Article5Component
  },
  {
    path: 'pages/article6',
    component: Article6Component
  }
];
