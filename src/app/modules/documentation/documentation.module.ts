import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocComponent } from './doc/doc.component';
import {DocumentationRoutingModule} from "./documentation-routing.module";



@NgModule({
  declarations: [
    DocComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule
  ],
  bootstrap: [DocComponent]
})
export class DocumentationModule { }
