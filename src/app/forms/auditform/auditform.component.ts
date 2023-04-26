import { Component } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-auditform',
  templateUrl: './auditform.component.html',
  styleUrls: ['./auditform.component.scss']
})
export class AuditformComponent {
    tabledata: boolean = false;
  constructor(public router:Router) { }
  Load(): void
  {
  }
  volumeBase():void
  {
  }
  dataSets():void{}
  volumeOthers():void{}
}

