import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, pipe} from 'rxjs';
import { ItemList } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api_key:'Hz2Igwdc481qVKhu3u77mpGGUtE7XzEG'|any
  constructor(private http:HttpClient) { }

fetchNews():Observable<any>{
  return this.http.get<ItemList[]>(`https://api.nytimes.com/svc/topstories/v2/food.json?api-key=Hz2Igwdc481qVKhu3u77mpGGUtE7XzEG`)
  
}
  getItems():Observable<any>{
    return this.http.get<ItemList[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getAS(page: number): Observable<any> {
    return this.http
      .get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
      .pipe(delay(200));

  }
}


