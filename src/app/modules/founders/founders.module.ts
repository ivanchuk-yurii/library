import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoundersListComponent } from './founders-list/founders-list.component';
import {FoundersRoutingModule} from "./founders-routing.module";
import { FounderComponent } from './founder/founder.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    FoundersListComponent,
    FounderComponent
  ],
  imports: [
    CommonModule,
    FoundersRoutingModule,
    MatIconModule
  ]
})
export class FoundersModule { }
