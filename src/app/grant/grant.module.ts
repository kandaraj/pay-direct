import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrantRoutingModule } from './grant-routing.module';
import { GrantComponent } from './grant.component';

@NgModule({
  imports: [
    CommonModule,
    GrantRoutingModule
  ],
  declarations: [GrantComponent]
})
export class GrantModule { }
