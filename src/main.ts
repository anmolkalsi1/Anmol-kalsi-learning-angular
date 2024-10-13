import { Routes } from '@angular/router';
import { ContentListComponent} from "./app/content-list/content-list.component";
import { ContentListItemComponent} from "./app/content-list-item/content-list-item.component";
import { ModifyRestaurantComponent} from "./app/modify-restaurant/modify-restaurant.component";
import { PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  { path: 'restaurant', component: ContentListItemComponent },
  { path: 'restaurant/:id', component:  ContentListComponent},
  { path: 'modify-restaurant', component: ModifyRestaurantComponent },
  { path: '**', component: PageNotFoundComponent }
];
