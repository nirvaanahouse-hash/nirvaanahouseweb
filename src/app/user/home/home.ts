import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  @ViewChild('mainVideos') mainVideos!: ElementRef<HTMLElement>



  ngAfterViewCheked() {

    this.mainVideos?.nativeElement.getBoundingClientRect().top
    
  }


  onPlay(event: Event) {
    (event.target as HTMLVideoElement).play();
  }

  onPause(event: Event) {
    (event.target as HTMLVideoElement).pause();
  }


}
