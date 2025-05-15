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
  // Font Awesome Classes Mapped
  techIcons: { [key: string]: string } = {
    Angular: 'fab fa-angular',
    'Node.js': 'fab fa-node-js',
    SQLite: 'fas fa-database',
    HTML: 'fab fa-html5',
    CSS: 'fab fa-css3-alt',
    JavaScript: 'fab fa-js'
  };

  linkIcons: { [key: string]: string } = {
    Code: 'fas fa-code',
    Live: 'fas fa-external-link-alt'
  };

  techColors: { [key: string]: string } = {
    Angular: '#dd0031',
    'Node.js': '#339933',
    SQLite: '#003b57',
    HTML: '#e34c26',
    CSS: '#264de4',
    JavaScript: '#f7df1e'
  };

  projects: Project[] = [
    {
      title: 'Portfolio',
      description: 'This portfolio is a full-stack web application built using Angular, Node.js, and SQLIte3.  Designed to function as both a personal showcase and a professional business site, it features key pages including Home, Resume, Projects, Blog, Services, About, and Contact.  The site offers a clean, responsive user interface and smooth navigation.  An integrated Admin panel (/admin/messages) provides backend functionality, allowing the site owner to securely view and manage contact messages.  This project highlights both front-end and back-end development skills in a cohesive, real-world application.',
      imageUrl: 'assets/images/portfolio.png',
      tech: ['Angular', 'Node.js', 'SQLite'],
      links: [
        { label: 'Code', url: 'https://github.com/Raking45/portfolio', icon: 'fas fa-code' }
      ]
    },
    { 
      title: 'RPG Character Builder',
      description: 'The RPG Character Builder is an immersive Angular application designed for gamers and RPG enthusiasts.  This project challenges your Angular skills by combining character customization, interactive storytelling, and dynamic user engagement.  Inspired by a love for tabletop and video games, the app allows users to create, customize, and manage their own unique collection of RPG characters.  Whether you are developing your front-end skills or diving into fantasy world-building, this project offers a fun and practical way to sharpen your coding abilities.',
      imageUrl: 'assets/images/rpg.png',
      tech: ['Angular', 'Node.js'],
      links: [
        { label: 'Code', url: 'https://github.com/Raking45/rpg-character-builder', icon: 'fas fa-code' },
        { label: 'Live', url: 'https://raking45.github.io/rpg-character-builder/', icon: 'fas fa-external-link-alt' }
      ]
    },
    {
      title: 'Virtual Taco Stand',
      description: 'A dynamic and interactive web application that simulates a real taco stand experience online.  Users can explore a digital menu, customize their tacos, place virtual orders, and enjoy engaging visuals, all built with modern web technologies.  Ideal for showcasing front-end development, UI/UX design, and e-commerce functionality in a fun, flavorful format.',
      imageUrl: 'assets/images/vtacostand.png',
      tech: ['Angular', 'Node.js'],
      links: [
        { label: 'Code', url: 'https://github.com/Raking45/virtual-taco-stand', icon: 'fas fa-code' },
        { label: 'Live', url: 'https://raking45.github.io/virtual-taco-stand/', icon: 'fas fa-external-link-alt' }
      ]
    },
    {
      title: 'Color Picker',
      description: 'This project is a web-based Color Picker and Scheme Generator built with vanilla JavaScript.  It allows users to select a base color using HSL sliders or a hex input, and instantly view the color in various formats: HEX, RGB, RGBA, HSL, and HSLA. Users can generate harmonious color schemes (monochromatic, analogous, complementary, triadic, or tetradic) based on the selected color.',
      imageUrl: 'assets/images/colorpicker.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      links: [
        { label: 'Code', url: 'https://github.com/Raking45/color-picker', icon: 'fas fa-code' },
        { label: 'Live', url: 'https://raking45.github.io/color-picker/', icon: 'fas fa-external-link-alt' }
      ]
    },
    {
      title: 'HTML JSON Converter',
      description: 'The Advanced HTML & JSON Converter is a powerful, browser-based tool that allows users to seamlessly convert between HTML markup and structured JSON representations, and vice versa.  Designed for developers, educators, and data analysts, this utility simplifies the inspection, editing, and transformation of web content.',
      imageUrl: 'assets/images/htmljson.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      links: [
        { label: 'Code', url: 'https://github.com/Raking45/html-json-converter', icon: 'fas fa-code' },
        { label: 'Live', url: 'https://raking45.github.io/html-json-converter/', icon: 'fas fa-external-link-alt' }
      ]
    },
    {
      title: 'BMI Calculator',
      description: 'This project is a responsive, interactive BMI (Body Mass Index) Calculator built with HTML, CSS, and JavaScript.  It allows users to calculate the BMI based on their age, gender, weight, height, and preferred unit system.',
      imageUrl: 'assets/images/bmi.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      links: [
        { label: 'Code', url: 'https://github.com/Raking45/bmi-calculator', icon: 'fas fa-code' },
        { label: 'Live', url: 'https://raking45.github.io/bmi-calculator/', icon: 'fas fa-external-link-alt' }
      ]
    }
  ];
}
