import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'founders', loadChildren: () => import('./modules/founders/founders.module').then(m => m.FoundersModule) },
  { path: 'books', loadChildren: () => import('./modules/books/books.module').then(m => m.BooksModule) },
  { path: 'doc', loadChildren: () => import('./modules/documentation/documentation.module').then(m => m.DocumentationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
