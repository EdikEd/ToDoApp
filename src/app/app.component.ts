import { Component,OnInit} from '@angular/core';
import { DataService } from './service/data.service';
import { Task } from './interface/task';
import { MatCheckboxChange } from '@angular/material/checkbox';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  mockData: any;
  taskList: Task[] = [];
  completedTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  matToolTipText: string;

  date: Date = new Date();
  


  constructor (
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.getMockData().subscribe(
      data => {
        this.mockData = data;
        this.taskList = this.mockData.todos;
        this.classifyTasks();
      }
    );
  }

  classifyTasks() {
    this.taskList.filter(task => {
      if(task.completed) 
        this.completedTasks.push(task);
      else 
        this.inProgressTasks.push(task);
    });
  }

  onCompleteChange(event: MatCheckboxChange, taskChange: Task) {
    let task = this.taskList.filter(task => task.id === taskChange.id)[0];
    task.completed = event.checked;
    task.date = new Date();
    if(event.checked) {
      let elemIndex = this.inProgressTasks.indexOf(task);
      this.inProgressTasks.splice(elemIndex,1);
      this.completedTasks.push(task);
    } else {
      let elemIndex = this.completedTasks.indexOf(task);
      this.completedTasks.splice(elemIndex,1);
      this.inProgressTasks.push(task);
    }
  }

}
