import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';
import { ITask } from '../tasklist';
import { Http, Response, Headers } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Task } from '../models/task.model';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnDestroy {
  isDeleted = false;
  Status: boolean;
  taskList: ITask[];

  subscription: Subscription;

  private headers = new Headers({ 'Content-Type': 'appliation/json' });
  selectedTaskCountRadioButton: any = 'All';

  constructor(private _router: Router, private _taskservice: TaskServiceService) {
    this.subscription = this._taskservice.subscribeTask()
      .subscribe(task => {
        this.taskList.push(task);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {

    this._taskservice.getTasks()
      .subscribe((resTaskData) => this.taskList = resTaskData);
  }

  deleteTask(task: ITask) {
    this._taskservice.deleteTask(task)
      .subscribe(res => {
        const index: number = this.taskList.indexOf(task);
        if (index !== -1) {
          this.taskList.splice(index, 1);
        }
        this.isDeleted = true;
      }, err => console.log(err));
  }

  updateTask(task : ITask) {

    this._taskservice.updateTaskStatus(task)
      .subscribe(response => {
        console.log(response);
      });
  }

  goToPage(): void {
    this._router.navigate(['/addtaskpage']);
  }

  onTaskCountRadioButtonChange(selectedRadioButtonValue: string): void {
    switch (selectedRadioButtonValue) {
      case 'true':
        this.selectedTaskCountRadioButton = true;
        break;
      case 'false':
        this.selectedTaskCountRadioButton = false;
        break;
      default:
        this.selectedTaskCountRadioButton = selectedRadioButtonValue;
    }
  }

  getTotalTaskCount(): number {
    return this.taskList.length;
  }

  getCompleteCount(): number {
    return this.taskList.filter(c => c.Status === true).length;
  }

  getIncompleteCount(): number {
    return this.taskList.filter(i => i.Status === false).length;
  }

}




