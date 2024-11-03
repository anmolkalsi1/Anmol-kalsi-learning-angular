import { Router } from '@angular/router';
import {Component, OnInit} from "@angular/core";
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import {NgClass, NgForOf, NgStyle} from "@angular/common";
import {Restaurants} from "../restaurants";
import {RestaurantService} from "../services/restaurant.service";  // Import Router

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [ContentListItemComponent, NgClass, NgForOf, NgStyle],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contentItems: Restaurants[] = [];

  constructor(private restaurantService: RestaurantService, private router: Router) {}

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe({
      next: (data: Restaurants[]) => this.contentItems = data,
      error: err => console.error("Error fetching restaurant", err),
      complete: () => console.log("Restaurant data fetch complete!")
    });
  }

  editRestaurant(item: number) {
    this.router.navigate(['/modify'], { state: { restaurant: item } });
  }

  deleteRestaurant(id: number) {
    this.restaurantService.removeRestaurant(id).subscribe({
      next: () => {
        this.contentItems = this.contentItems.filter(restaurant => restaurant.id !== id);
        console.log("Restaurant deleted successfully");
      },
      error: err => console.error("Error deleting restaurant", err)
    });
  }
}
