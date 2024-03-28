import { Component } from '@angular/core';
import { HeroComponent } from '@/components/home/hero/hero.component';
import { LobbyComponent } from '@/components/home/lobby/lobby.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, LobbyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
