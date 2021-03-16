import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowsComponent} from './shows/shows.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ShowDetailComponent} from './show-detail/show-detail.component';

const routes: Routes = [
  {path: 'shows', component: ShowsComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: ShowDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
