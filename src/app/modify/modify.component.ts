// modify.component.ts
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { RestaurantService } from '../services/restaurant.service';
import { Router } from '@angular/router';
import { Restaurants } from '../restaurants';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  restaurantForm!: FormGroup;

  constructor(private fb: FormBuilder, private restaurantService: RestaurantService, protected router: Router) {}

  ngOnInit() {
    this.restaurantForm = this.fb.group({
      id: ['', [Validators.required, Validators.min(1)]], // Validation for positive ID
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]], // No special characters in name
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.restaurantForm.valid) {
      const restaurantData = this.restaurantForm.value;
      if (restaurantData.id) {
        this.restaurantService.updateRestaurant(restaurantData).subscribe(() => {
          this.router.navigate(['/list']);
        });
      } else {
        this.restaurantService.addRestaurant(restaurantData).subscribe(() => {
          this.router.navigate(['/list']);
        });
      }
      this.restaurantForm.reset();
    }
  }
}
