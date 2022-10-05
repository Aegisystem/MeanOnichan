import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { MongodbComponent } from './mongodb/mongodb.component';

const routes: Route[] = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'mongodb',
    component: MongodbComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    MongodbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
