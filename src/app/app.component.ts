import { Component,OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  mockData: any;
  taskList: Task[] = [];

  constructor (
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.getMockData().subscribe(
      data => {
        this.mockData = data;
        this.taskList = this.mockData.todos;
      }
    );
  }

}
