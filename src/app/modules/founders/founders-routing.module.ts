import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FoundersListComponent} from "./founders-list/founders-list.component";

const routes: Routes = [
  { path: '', component: FoundersListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoundersRoutingModule { }
