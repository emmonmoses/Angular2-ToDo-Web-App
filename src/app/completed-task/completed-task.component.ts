import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';
import { ITask } from '../tasklist';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.css']
})
export class CompletedTaskComponent implements OnInit {

  selectedRadioButtonValue = 'All';

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  all: number;

  @Input()
  complete: number;

  @Input()
  incomplete: number;

  taskList: ITask[];

  constructor(private _router: Router, private _taskservice: TaskServiceService) { }

  ngOnInit() {
  }

  goBack(): void {
    this._router.navigate(['/taskpage']);
  }

  onRadioButtonSelectionChange() {
   /*  console.log(this.selectedRadioButtonValue); */
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }

}
