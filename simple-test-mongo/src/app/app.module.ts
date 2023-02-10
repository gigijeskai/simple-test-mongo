import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { InputComponent } from './input/input/input.component';
import { ListComponent } from './list/list/list.component';
import { PagePage } from './pages/page/page.page';
import { Page1Page } from './pages/page1/page1.page';
import { Page2Page } from './pages/page2/page2.page';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent,
    PagePage,
    Page1Page,
    Page2Page,
  ],
  providers: [],
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
