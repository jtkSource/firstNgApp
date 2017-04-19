import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    PeopleComponent
  ],
  declarations: [PeopleComponent, ProfileComponent]
})
export class PeopleModule { }
