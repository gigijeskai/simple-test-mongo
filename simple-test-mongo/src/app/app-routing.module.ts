import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePage } from './pages/page/page.page';
import { Page1Page } from './pages/page1/page1.page';
import { Page2Page } from './pages/page2/page2.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page',
  },
  { path: 'page', component: PagePage },
  { path: 'page1', component: Page1Page },
  { path: 'page2', component: Page2Page },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
