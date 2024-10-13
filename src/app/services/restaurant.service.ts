import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_RESTAURANTS } from '../Data/mock-content';
import { Restaurants } from '../restaurants';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  getRestaurants(): Observable<Restaurants[]> {
    return of(MOCK_RESTAURANTS);
  }

  getRestaurantById(id: number): Observable<Restaurants | undefined> {
    const restaurant = MOCK_RESTAURANTS.find(item => item.id === id);
    return of(restaurant);
  }

  addRestaurant(restaurant: Restaurants): Observable<Restaurants[]> {
    MOCK_RESTAURANTS.push(restaurant);
    return of(MOCK_RESTAURANTS);
  }

  updateRestaurant(updatedRestaurant: Restaurants): Observable<Restaurants[]> {
    const index = MOCK_RESTAURANTS.findIndex(item => item.id === updatedRestaurant.id);
    if (index !== -1) {
      MOCK_RESTAURANTS[index] = updatedRestaurant;
    }
    return of(MOCK_RESTAURANTS);
  }

  removeRestaurant(id: number): Observable<Restaurants | undefined> {
    const index = MOCK_RESTAURANTS.findIndex(item => item.id === id);
    if (index !== -1) {
      const [removedRestaurant] = MOCK_RESTAURANTS.splice(index, 1);
      return of(removedRestaurant);
    }
    return of(undefined);
  }
}
