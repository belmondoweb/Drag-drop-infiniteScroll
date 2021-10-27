import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public show:boolean = false;
  public buttonName:any = 'Show List';
 constructor(private service:DataService){}
 items$:any=[];
  ngOnInit () { 
  
   }





 
}
