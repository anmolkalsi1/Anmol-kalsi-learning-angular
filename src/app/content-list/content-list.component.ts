import { Component, OnInit } from '@angular/core';  // Import OnInit
import { ContentListItemComponent } from '../content-list-item/content-list-item.component';
import { NgClass, NgForOf } from "@angular/common";
import { Restaurants } from "../restaurants";
import { RestaurantService } from "../services/restaurant.service";  // Import the service

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [ContentListItemComponent, NgClass, NgForOf],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contentItems: Restaurants[] = [];

  constructor(private restaurantService: RestaurantService) {}


  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe({
      next: (data: Restaurants[]) =>this.contentItems = data,
      error:err => console.error("Error fetching restaurant", err),
      complete:() => console.log("restaurant data fetch complete!")
    });
  }
}
