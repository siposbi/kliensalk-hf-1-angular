import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowsComponent} from './shows/shows.component';
import {ShowDetailComponent} from './show-detail/show-detail.component';
import {Four04Component} from './four04/four04.component';
import {ShowEditComponent} from './show-edit/show-edit.component';

const routes: Routes = [
  {path: '', component: ShowsComponent},
  {path: 'shows', redirectTo: '', pathMatch: 'full'},
  {path: 'shows/:id', component: ShowDetailComponent},
  {path: 'shows/:id/edit', component: ShowEditComponent},
  {path: '**', component: Four04Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
