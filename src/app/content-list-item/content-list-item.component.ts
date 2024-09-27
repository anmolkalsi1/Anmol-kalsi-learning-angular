import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [],
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.css']  // Correct the typo (styleUrls)
})
export class ContentListItemComponent {
  @Input() contentItem: any;
}
