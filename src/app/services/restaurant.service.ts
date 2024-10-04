import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Restaurants } from '../restaurants';
import { MOCK_RESTAURANTS} from "../Data/mock-content";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurants = MOCK_RESTAURANTS;

  constructor() { }

  // Get the list of all restaurants
  getRestaurants(): Observable<Restaurants[]> {
    return of(this.restaurants);  // Return an observable of the array
  }

  // Get a restaurant by ID
  getRestaurantById(id: number): Observable<Restaurants | undefined> {
    const restaurant = this.restaurants.find(item => item.id === id);
    return of(restaurant);
  }

  // Add a new restaurant
  addRestaurant(newRestaurant: Restaurants): Observable<Restaurants[]> {
    this.restaurants.push(newRestaurant);
    return of(this.restaurants);  // Return the updated array
  }

  // Update an existing restaurant
  updateRestaurant(updatedRestaurant: Restaurants): Observable<Restaurants[]> {
    const index = this.restaurants.findIndex(item => item.id === updatedRestaurant.id);
    if (index !== -1) {
      this.restaurants[index] = updatedRestaurant;
    }
    return of(this.restaurants);  // Return the updated array
  }

  // Delete a restaurant by ID
  deleteRestaurant(id: number): Observable<Restaurants | undefined> {
    const index = this.restaurants.findIndex(item => item.id === id);
    let deletedItem;
    if (index !== -1) {
      deletedItem = this.restaurants.splice(index, 1)[0];  // Remove and return the deleted item
    }
    return of(deletedItem);
  }
}
