import { Component } from '@angular/core';
import { ContentListItemComponent } from '../content-list-item/content-list-item.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [ContentListItemComponent],   // Import the child component here
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']  // Correct the typo (styleUrls)
})
export class ContentListComponent {
  contentItems = [
    { id: 1, title: 'Item 1', description: 'Description 1' },
    { id: 2, title: 'Item 2', description: 'Description 2' },
    { id: 3, title: 'Item 3', description: 'Description 3' },
    { id: 4, title: 'Item 4', description: 'Description 4' }
  ];
}
