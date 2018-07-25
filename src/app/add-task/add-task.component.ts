import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';
import { ITask } from '../tasklist';
import { Http, Response, Headers } from '@angular/http';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {

  taskList: ITask[];
  task;
  isAdded = false;

  constructor(private _router: Router, private _taskService: TaskServiceService, private _http: Http) {

  }

  ngOnInit() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.task = new Task(); {
        this.task.UserID = JSON.parse(user).ID;
        this.task.Task = '';
      }
    } else {
      // TODO: redirect to login
      this._router.navigate(['/']);
    }
  }

  addTask() {
    this._taskService.addTask(this.task)
      .subscribe((response) => {
        console.log(response);
        this.isAdded = true;
      },
        (error: Response) => {
          console.log(error);
        });
  }

  goBack() {
    this._router.navigate(['/mainpage']);
  }

}
