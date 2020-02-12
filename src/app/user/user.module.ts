import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [UserComponent],
  bootstrap: []
})
export class UserModule { }
