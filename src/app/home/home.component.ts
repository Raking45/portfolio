import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const spans: NodeListOf<HTMLElement> = document.querySelectorAll('.intro-header span');
    const videoElement = document.querySelector<HTMLVideoElement>('section.intro video');
  
    // Ensure video is muted and ready before forcing playback
    if (videoElement) {
      videoElement.muted = true;
      videoElement.setAttribute('playsinline', 'true');
  
      // Try playing once the metadata is loaded
      videoElement.addEventListener('loadedmetadata', () => {
        videoElement.play().catch(err => {
          console.warn('Autoplay blocked:', err);
        });
      });
    }
  
    function restartAnimations(): void {
      spans.forEach((span: HTMLElement) => {
        span.style.animation = 'none';
        void span.offsetHeight; // trigger reflow
        span.style.animation = '';
      });
    }
  
    setInterval(restartAnimations, 7750);
  }
}

