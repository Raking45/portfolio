import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service  {
  icon: string;
  label: string;
  title: string;
  description: string;
};
@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'fas fa-code',
      label: 'Web Applications',
      title: 'Custom Web Applications',
      description: 'Built from scratch using modern technologies like Angular, React, Node.js, MySQL and MongoDB to meet your exact needs.',
    },
    {
      icon: 'fas fa-shopping-cart',
      label: 'E-Commerce',
      title: 'E-Commerce Development',
      description: 'Launch scalable, secure, and responsive online stores using platforms like Shopify, WooCommerce, or custom stacks.',
    },
    {
      icon: 'fas fa-plug',
      label: 'APIs',
      title: 'API Development & Integration',
      description: 'Design and implement RESTful or GraphQL APIs, and connect third-party services like Stripe, Twilio, and more.',
    },
    {
      icon: 'fas fa-mobile-alt',
      label: 'Frontend Design',
      title: 'Responsive Frontend Design',
      description: 'Beautiful, mobile-first UI/UX built with HTML, CSS, Tailwind, and JavaScript frameworks.',
    },
    {
      icon: 'fas fa-cloud-upload-alt',
      label: 'Cloud Hosting',
      title: 'Cloud Deployment',
      description: 'Deploy and scale your app on AWS, Vercel, Netlify, or DigitalOcean with CI/CD and serverless setups.',
    },
    {
      icon: 'fas fa-shield-alt',
      label: 'Security & Support',
      title: 'Maintenance & Security',
      description: 'Ongoing support, updates, backups, and best practices for performance and protection.',
    },
    {
      icon: 'fas fa-robot',
      label: 'AI Integration',
      title: 'AI-Powered Features',
      description: 'Integrate AI capabilities into your apps using services like OpenAI, Google Cloud AI, or custom machine learning models for chatbots, recommendations, and automation.',
    },
    {
      icon: 'fas fa-brain',
      label: 'ML Pipelines',
      title: 'Machine Learning Workflows',
      description: 'Design, train, and deploy end-to-end machine learning models using Python, TensorFlow, or PyTorch, with APIs for real-time predictions and analytics.',
    },
    {
      icon: 'fas fa-chart-line',
      label: 'Data Insights',
      title: 'AI Data Analysis & Visualizations',
      description: 'Build dashboards and tools powered by AI to analyze trends, forecast performance, and deliver actionable business intelligence using platforms like Pandas, D3.js and Power BI.',
    },
  ];
}
