import { Component } from '@angular/core';
import { ContentListItemComponent } from './content-list-item/content-list-item.component'; // Import here
import { ContentListComponent } from './content-list/content-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentListComponent, ContentListItemComponent], // Import here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anmol-kalsi-Learning-Angular';
  name: string = 'anmol kalsi';
  age: number = 20;
}
