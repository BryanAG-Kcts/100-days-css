import { Component, ElementRef, ViewChild, afterRender } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  @ViewChild('heroHeading')
  private _heroHeading!: ElementRef<HTMLHeadingElement>;

  @ViewChild('leaf1')
  private _leaf1!: ElementRef<HTMLImageElement>;

  @ViewChild('leaf2')
  private _leaf2!: ElementRef<HTMLImageElement>;

  @ViewChild('mount1')
  private _mount1!: ElementRef<HTMLImageElement>;

  @ViewChild('mount2')
  private _mount2!: ElementRef<HTMLImageElement>;

  @ViewChild('bush2')
  private _bush2!: ElementRef<HTMLImageElement>;

  constructor() {
    afterRender(() => {
      window.addEventListener('scroll', () => {
        const clientY = window.scrollY;
        this._heroHeading.nativeElement.style.marginTop = `${
          clientY / 16 + 2.5
        }rem`;

        this._leaf2.nativeElement.style.marginLeft = `${clientY / 16}rem`;
        this._leaf1.nativeElement.style.marginLeft = `${-clientY / 16}rem`;
        this._mount1.nativeElement.style.marginBottom = `${-clientY / 16}rem`;
        this._mount2.nativeElement.style.marginBottom = `${-clientY / 16}rem`;
        this._bush2.nativeElement.style.marginBottom = `${-clientY / 16}rem`;
      });
    });
  }
}
