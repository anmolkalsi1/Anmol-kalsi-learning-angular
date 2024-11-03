import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifyComponent } from './modify/modify.component';
import { ContentListComponent } from './content-list/content-list.component';

const routes: Routes = [
  { path: 'list', component: ContentListComponent },
  { path: 'modify', component: ModifyComponent },
  { path: '**', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
