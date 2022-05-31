import {RouterModule, Routes} from "@angular/router";
import {BooksListComponent} from "./books-list/books-list.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: '', component: BooksListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }

