import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  mockDataSource: string = `https://dummyjson.com`;

  constructor(
    private http:HttpClient
  ) { }


  // Get mock data (todos)
  getMockData():Observable<any> {
    return this.http.get<any>(`${this.mockDataSource}/todos`);
  }

}
