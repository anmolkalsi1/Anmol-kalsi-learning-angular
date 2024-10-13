import { Component, Input,OnInit } from '@angular/core';
import {Restaurants} from "../restaurants";


@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [],
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.css']
})
export class ContentListItemComponent implements OnInit{
  @Input() restaurants!: Restaurants;
  constructor() {
  }

  ngOnInit(): void {
    console.log('restaurant list', this.restaurants);
  }
}

