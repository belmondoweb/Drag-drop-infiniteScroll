import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dra-drop',
  templateUrl: './dra-drop.component.html',
  styleUrls: ['./dra-drop.component.scss']
})
export class DraDropComponent implements OnInit {
  @Output() move: EventEmitter<any> = new EventEmitter();
rows=[2]
colums=[2]
box=[0,1,2,3,4,5,6,7]
list=[0,1,2,3,4,5,6,7]

 draggable: any;


  constructor() { 
 
  }

  ngOnInit(): void {
   let rows= this.rows=new Array(8);
    this.colums=new Array(8);  
  }



// cdk
// drop(event: CdkDragDrop<any[]>) {
//   moveItemInArray(this.box,  event.previousIndex, event.currentIndex);
// }

drop(event: CdkDragDrop<any[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
  }
}


}

