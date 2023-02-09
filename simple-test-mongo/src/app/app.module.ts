import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './users/user/user.component';
import { AddUserComponent } from './addUser/add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersSrvService } from './services/users-srv.service';

@NgModule({
  declarations: [AppComponent, UserComponent, AddUserComponent],
  providers: [UsersSrvService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class AppModule {}
