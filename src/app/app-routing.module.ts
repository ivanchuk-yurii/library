import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'founders', loadChildren: () => import('./modules/founders/founders.module').then(m => m.FoundersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
