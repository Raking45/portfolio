import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface BlogPost {
  title: string,
  author: string,
  snippet: string;
  imageUrl: string;
  imageUrlAlt: string;
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
      title: 'Frameworks & Libraries vs. Plain HTML, CSS, and JavaScript',
      author: 'Robert A. King',
      snippet: "Frameworks & Libraries vs. Plain HTML, CSS, & JavaScript: What is Best for Your Project? In today's web development world, the decision between using a full-featured framework like React or sticking with plain HTML, CSS, and JavaScript isn't always straightforward.  Frameworks can supercharge productivity and scalability, but they come with complexity and overhead.  On the other hand, vanilla web technologies offer simplicity, speed, and control, perfect for small projects or learning the fundamentals.  This article dives into the pros and cons of both approaches to help you make the right choice for your next project.",
      imageUrl: 'assets/images/programming.jpg',
      imageUrlAlt: 'programming on computer screen',
      link: '../pages/article1'
    },
    {
      title: "The Pros and Cons of Using Node.js in Your Web Development Project",
      author: 'Robert A. King',
      snippet: "Is Node.js Right for Your Web Project? Here's What You Need to Know. Node.js is a game-changer in server-side development, allowing JavaScript to power both the client and server. Known for speed and scalability, it's ideal for building real-time apps and APIs.  But it's not without trade-offs, CPU bound tasks and asynchronous complexity can pose challenges. This article breaks down the pros and cons of using Node.js to help you decide whether it's the right fit for your next project.",
      imageUrl: 'assets/images/nodejs.png',
      imageUrlAlt: 'pros and cons of Node.js',
      link: '../pages/article2'
    },
    {
      title: 'The Pros and Cons of Using Angular in Web Development',
      author: 'Robert A. King',
      snippet: "Is Angular the Right Choice for Your Next Web App? Angular is a powerful framework backed by Google that enables the development of robust and scalable web applications.  With its component-based architecture, TypeScript support, and built-in tooling, it's a favorite among enterprise developers. But it's not without challenges, steep learning curves and performance concerns can slow down smaller teams or simpler projects. In this article, we weigh the key pros and cons of Angular to help you decide if it fits your project goals.",
      imageUrl: 'assets/images/angular-svgrepo-com.svg',
      imageUrlAlt: 'pros and cons of Angular',
      link: '../pages/article3'
    },
    {
      title: 'Implementing Accessibility in Web Design',
      author: 'Robert A. King',
      snippet: "Accessibility isn't optional, it's essential. Learn how to implement accessibility features the right way and create inclusive, user-friendly websites.  From semantic HTML to ARIA roles, this guide covers practical tips to make your site accessible to everyone.",
      imageUrl: 'assets/images/accessibility.jpg',
      imageUrlAlt: 'implementing web accessibility',
      link: '../pages/article4'
    },
    {
      title: 'Full-Stack Development Checklist',
      author: 'Robert A. King',
      snippet: "Don't launch without it! This comprehensive Full-Stack Development Checklist walks you through each essential phase of building a web application, from planning and frontend to backend, security, and deployment. Whether you're solo or on a team, use this guide to stay organized and ship with confidence.",
      imageUrl: 'assets/images/checklist.jpg',
      imageUrlAlt: 'full-stack development checklist',
      link: '../pages/article5'
    },
    {
      title: 'Website SEO Checklist',
      author: 'Robert A. King',
      snippet: 'Use this all-in-one Website SEO Checklist to ensure your site is technically sound, content-rich, and optimized for search engines.  From technical foundations to content strategy and user experience, this guide covers every aspect needed to boost visibility, rankings, and traffic.',
      imageUrl: 'assets/images/seoperformance.jpg',
      imageUrlAlt: 'search engine optimization checklist',
      link: '../pages/article6'
    }
  ];
}
