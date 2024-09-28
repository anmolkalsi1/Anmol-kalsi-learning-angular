import { Component } from '@angular/core';
import { ContentListItemComponent } from '../content-list-item/content-list-item.component';
import {NgClass, NgForOf} from "@angular/common";
import {Restaurants} from "../restaurants";

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [ContentListItemComponent, NgClass, NgForOf],   // Import the child component here
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']  // Correct the typo (styleUrls)
})
export class ContentListComponent {
  contentItems: Restaurants[] =  [
    { id: 1, type: 'American', yearReleased: 2021, Company: 'Kfc' },
    { id: 1, type: 'Chinese', yearReleased: 2020, Company: 'Tenko-sushi' },
    { id: 1, type: 'Italian', yearReleased: 2010, Company: 'Cobs-bread' },
    { id: 1, type: 'Indian', yearReleased: 2009, Company: 'Indian-swaad' },
  ];
}
