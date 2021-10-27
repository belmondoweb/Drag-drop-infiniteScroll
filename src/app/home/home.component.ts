import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemList } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public show:boolean = false;
  public page=1
  throttle = 0;
  distance = 2;
 
  public buttonName:any = 'Show List';

 constructor(private service:DataService){}
 
 @Input()items$:Observable<ItemList[]>|any;
 item:any=[];

  ngOnInit () { 
    this.fetchList();
   }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show List";
  }
 fetchList(){
  this.items$= this.service.getItems().subscribe(
        arg => {
          return this.item=arg;
          console.log(arg)
          console.log("ItemList news"+arg)
        })   }

        onScroll(): void {
          this.service.getItems
            ().subscribe((item:[]) => {
              this.item.push(...item);
            });
        }
   
  
}


