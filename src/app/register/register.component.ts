import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';
import { Http } from '@angular/http';
import { ITask } from '../tasklist';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {


  isRegistered = false;
  user;

  constructor(private _router: Router, private _taskService: TaskServiceService, private _http: Http) {
    this.user = new Task(); {
      this.user.FullName = '';
    }
  }

  ngOnInit() { }

  redirectLogin() {
    this._router.navigate(['/']);
  }

  onSubmit() {
    this._taskService.addUser(this.user)
      .subscribe((response) => {
        this.isRegistered = true;
      },
        (error: Response) => {
          console.log(error);
        });
  }

}


