import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.css']
})
export class AccountHeaderComponent {
  constructor(private router: Router) { }
}
