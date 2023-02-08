import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './addUser/addUser/addUser.component';
import { UserComponent } from './users/user/user.component';

@NgModule({
  declarations: [AppComponent, AddUserComponent, UserComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
})
export class AppModule {}
