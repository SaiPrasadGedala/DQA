import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-mentor-mentee-setup',
  templateUrl: './mentor-mentee-setup.component.html',
  styleUrls: ['./mentor-mentee-setup.component.scss']
})

export class MentorMenteeSetupComponent {
  tabledata: boolean = false;
  constructor(public router:Router) { }
  search(): void
  {
  }
  add():void
  {
    // this.router.navigate(['./searchview']);
  }
  refresh(){
    
  }
}
