import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isSticky = false;
  constructor(private router: Router,
  ) {}

  ngOnInit() {
     }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.pageYOffset >= 64; // Adjust the offset value according to the height of your sticky header
  }

  toggleSidenav() {
    console.log('hello')
    if (this.sidenav) {
      console.log('are you here')
      this.sidenav.toggle();
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
