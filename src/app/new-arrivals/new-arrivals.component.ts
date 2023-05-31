import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit{
  images = [
    'assets/images/logos/homeSlide2.jpg',
    'assets/images/logos/homeSlide6.jpg',
    'assets/images/logos/homeSlide8.jpg',
    // Add more image URLs here
  ];

  @ViewChild('dropdownButton') dropdownButton!: ElementRef;
  @ViewChild('dropdownContent') dropdownContent!: ElementRef;


  currentIndex = 0;
  interval: any;
  isImageResponsive = false;

  ngOnInit() {
    this.startSlideshow();
    this.checkImageResponsive();
  }

  startSlideshow() {
    this.interval = setInterval(() => {
      this.showNextImage();
    }, 5000); // Adjust the interval time (in milliseconds) as desired
  }

  showNextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  checkImageResponsive() {
    this.isImageResponsive = window.innerWidth <= 768; // Adjust the breakpoint as needed
    window.addEventListener('resize', () => {
      this.isImageResponsive = window.innerWidth <= 768; // Adjust the breakpoint as needed
    });
  }
}
