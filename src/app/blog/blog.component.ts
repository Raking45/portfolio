import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface BlogPost {
  title: string,
  snippet: string;
  imageUrl: string;
  link: string;
}
@Component({
  selector: 'app-blog',
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      title: 'Title1',
      snippet: 'Snippet for blog post 1',
      imageUrl: '',
      link: '/blog'
    },
    {
      title: 'Title2',
      snippet: 'Snippet for blog post 2',
      imageUrl: '',
      link: '/blog'
    },
    {
      title: 'Title3',
      snippet: 'Snippet for blog post 3',
      imageUrl: '',
      link: '/blog'
    },
    {
      title: 'Title4',
      snippet: 'Snippet for blog post 4',
      imageUrl: '',
      link: '/blog'
    },
    {
      title: 'Title5',
      snippet: 'Snippet for blog post 5',
      imageUrl: '',
      link: '/blog'
    },
    {
      title: 'Title6',
      snippet: 'Snippet for blog post 6',
      imageUrl: '',
      link: '/blog'
    }
  ];
}
