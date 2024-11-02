import { Component, OnInit } from '@angular/core';
import { ContentListItemComponent } from './content-list-item/content-list-item.component';
import { ContentListComponent } from './content-list/content-list.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { NgForOf, NgIf } from "@angular/common";
import { RestaurantService } from "./services/restaurant.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, ContentListComponent, ContentListItemComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'anmol-kalsi-Learning-Angular';  // Define title here
  RestaurantItems: any;

  constructor(private restaurantItemsService: RestaurantService) { }

  ngOnInit(): void {
    const RestaurantCardsId = 1;

    this.restaurantItemsService.getRestaurantById(RestaurantCardsId).subscribe(item => {
      if (item) {
        this.RestaurantItems = item;
      } else {
        console.error('Item not found');
      }
    });
  }
}
