import { Component } from '@angular/core';
import { ContentListItemComponent } from '../content-list-item/content-list-item.component';
import {NgClass, NgForOf} from "@angular/common";
import {Restaurants} from "../restaurants";
import {MOCK_RESTAURANTS} from "../Data/mock-content";

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [ContentListItemComponent, NgClass, NgForOf],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})

export class ContentListComponent {
  contentItems: Restaurants[] = MOCK_RESTAURANTS;
}
