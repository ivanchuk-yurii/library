import {RouterModule, Routes} from "@angular/router";
import {DocComponent} from "./doc/doc.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: '', component: DocComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
