import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbarModule
  ],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {}
