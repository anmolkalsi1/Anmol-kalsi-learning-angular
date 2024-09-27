import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentListComponent} from "./content-list/content-list.component";
import {ContentListItemComponent} from "./content-list-item/content-list-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContentListComponent,ContentListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anmol-kalsi-Learning-Angular';
  name : string = 'anmol kalsi';
  age : number = 20;
}
