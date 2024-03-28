import { Project } from '@/interfaces/project';
import { ProjectCardComponent } from '@/shared/project-card/project-card.component';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lobby',
  standalone: true,
  imports: [ProjectCardComponent, NgFor],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.css',
})
export class LobbyComponent {
  projects: Project[] = [
    {
      day: 1,
      title: 'Project 1',
      description: 'This is project 1',
      image: 'https://portafolio-kcts.vercel.app/images/projects/landing.webp',
      link: '/',
    },
    {
      day: 2,
      title: 'Project 2',
      description: 'This is project 2',
      image: 'https://portafolio-kcts.vercel.app/images/projects/landing.webp',
      link: '/',
    },
    {
      day: 3,
      title: 'Project 3',
      description: 'This is project 3',
      image: 'https://portafolio-kcts.vercel.app/images/projects/landing.webp',
      link: '/',
    },
  ];
}
