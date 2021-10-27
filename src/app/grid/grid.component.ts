import { Component, OnInit } from '@angular/core';
import { AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
 import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

@ViewChildren('theLastList', { read: ElementRef })
theLastList: QueryList<ElementRef> | any;

// b=button 
public show:boolean = false;
public buttonName:any = 'Show List';

alSub: Subscription | any;
airlines: any = [];

totalPages: number | any;
currentPage: number = 20;

observer: any;

constructor(
  private alService: DataService,
  private spinner: NgxSpinnerService
) {}

ngOnInit() {
  this.getAirlines();
  this.intersectionObserver();
}


toggle() {
  this.show = !this.show;

  // CHANGE THE NAME OF THE BUTTON.
  if(this.show)  
    this.buttonName = "Hide";
  else
    this.buttonName = "Show List";
}
ngAfterViewInit() {
  this.theLastList.changes.subscribe((d:any) => {
    console.log(d);
    if (d.last) this.observer.observe(d.last.nativeElement);
  });
}

getAirlines() {
  this.spinner.show();
  this.alSub = this.alService.getAS(this.currentPage).subscribe((d) => {
    this.spinner.hide();
    this.totalPages = d.totalPages;
    d.data.forEach((element:any) => {
      this.airlines.push(element);
    });
    console.log("call from "+this.alSub)
  });
}

intersectionObserver() {
  let options = {
    root: null,
    rootMargin: '1px',
    threshold: 0.75,
  };

  this.observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.getAirlines();
      }
    }
  }, options);
}
}