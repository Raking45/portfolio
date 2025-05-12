import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tech: string[];
  links: { label: string; url: string; icon: string }[];
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Title 1',
      description: 'Project Description 1',
      imageUrl: '',
      tech: ['Tech1', 'Tech2', 'Tech3', 'Tech4'],
      links: [
        { label: 'Code', url: '#', icon: '#' },
        { label: 'Live', url: '#', icon: '#' }
      ]
    },
    {
      title: 'Title 2',
      description: 'Project Description 2',
      imageUrl: '',
      tech: ['Tech1', 'Tech2', 'Tech3', 'Tech4'],
      links: [
        { label: 'Code', url: '#', icon: '#' },
        { label: 'Live', url: '#', icon: '#' }
      ]
    },
    {
      title: 'Title 3',
      description: 'Project Description 3',
      imageUrl: '',
      tech: ['Tech1', 'Tech2', 'Tech3', 'Tech4'],
      links: [
        { label: 'Code', url: '#', icon: '#' },
        { label: 'Live', url: '#', icon: '#' }
      ]
    },
    {
      title: 'Title 4',
      description: 'Project Description 4',
      imageUrl: '',
      tech: ['Tech1', 'Tech2', 'Tech3', 'Tech4'],
      links: [
        { label: 'Code', url: '#', icon: '#' },
        { label: 'Live', url: '#', icon: '#' }
      ]
    },
    {
      title: 'Title 5',
      description: 'Project Description 5',
      imageUrl: '',
      tech: ['Tech1', 'Tech2', 'Tech3', 'Tech4'],
      links: [
        { label: 'Code', url: '#', icon: '#' },
        { label: 'Live', url: '#', icon: '#' }
      ]
    },
    {
      title: 'Title 6',
      description: 'Project Description 6',
      imageUrl: '',
      tech: ['Tech1', 'Tech2', 'Tech3', 'Tech4'],
      links: [
        { label: 'Code', url: '#', icon: '#' },
        { label: 'Live', url: '#', icon: '#' }
      ]
    }
  ];
}
