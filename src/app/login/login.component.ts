import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';
import { AppComponent } from '../app.component';
import { Alert } from 'selenium-webdriver';
import { ITask } from '../tasklist';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginError = false;
  fullname: string;

  constructor(private _router: Router, private _taskService: TaskServiceService) { }

  ngOnInit() {
  }

  onLogin() {
    this._taskService.login(this.fullname)
      .subscribe((data) => {
        /* on login set userbio in local storage and after login get userbio from local storage */
        localStorage.setItem('currentUser', JSON.stringify(data));
        console.log(data);
        this._router.navigate(['/mainpage']);
      },
        (error: Response) => {
          this.isLoginError = true;
        });
  }

  loadHomePage() {
    this._router.navigate(['/mainpage']);
  }
}
