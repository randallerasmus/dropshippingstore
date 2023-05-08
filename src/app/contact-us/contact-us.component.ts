import {AfterViewInit, Component, OnInit} from '@angular/core';

declare const google: any;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {
    const mapOptions = {
      center: new google.maps.LatLng(37.7749, -122.4194), // Set your desired coordinates here
      zoom: 10, // Set the initial zoom level
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const marker = new google.maps.Marker({
      position: mapOptions.center,
      map: map,
      title: 'Our Location'
    });
  }

}
