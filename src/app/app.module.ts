import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ShowsComponent} from './shows/shows.component';
import {FormsModule} from '@angular/forms';
import {ShowDetailComponent} from './show-detail/show-detail.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './model/api/in-memory-data.service';
import {HttpClientModule} from '@angular/common/http';
import {Four04Component} from './four04/four04.component';
import {ShowEditComponent} from './show-edit/show-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    ShowEditComponent,
    ShowDetailComponent,
    Four04Component,
    ShowEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
