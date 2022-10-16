import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { ExpressjsComponent } from './expressjs/expressjs.component';
import { AngularComponent } from './angular/angular.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { CrudComponent } from './crud/crud.component';

const routes: Route[] = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'mongodb',
    component: MongodbComponent
  },
  {
    path: 'expressjs',
    component: ExpressjsComponent
  },
  {
    path: 'angular',
    component: AngularComponent
  },
  {
    path: 'nodejs',
    component: NodejsComponent
  },
  {
    path: 'crud',
    component: CrudComponent
  },
  
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    MongodbComponent,
    ExpressjsComponent,
    AngularComponent,
    NodejsComponent,
    CrudComponent
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
