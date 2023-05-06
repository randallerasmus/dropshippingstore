import {Component, OnInit} from '@angular/core';

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
  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.startSlideshow();
  }

  startSlideshow() {
    this.interval = setInterval(() => {
      this.showNextImage();
    }, 5000); // Adjust the interval time (in milliseconds) as desired
  }

  stopSlideshow() {
    clearInterval(this.interval);
  }

  showNextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  showPreviousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
