import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ITask } from './tasklist';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TaskServiceService {

  subject = new Subject<any>();

  taskList: ITask[];
  user: ITask[];

  private _url: any = 'http://localhost/taskapi/api/task/'; /* for task CRUD */
  private account_url: any = 'http://localhost/taskapi/api/user/';  /* for user CRUD */
  readonly login_url: any = 'http://localhost/taskapi/api/login/';  /* for login */

  constructor(private _http: Http) { }

  broadcastTask(task: ITask): void {
    this.subject.next(task);
  }

  subscribeTask(): Observable<any> {
    return this.subject.asObservable();
  }

  login(FullName: string) {
    const body = { FullName: FullName };
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers, body: body });
    return this._http.post(this.login_url, body, options)
      .map(result => result.json());
  }

  getTasks(): Observable<ITask[]> {
    return this._http.get(this._url)
      .map((response: Response) => <ITask[]>response.json());

  }

  addTask(task: any): Observable<ITask> {
    const body = JSON.stringify(task);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this._url, task)
      .map((response) => <ITask>response.json());
  }

  updateTaskStatus(task: ITask) {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.put(this._url, task)
      .map((response: Response) => response);
    /* .catch(this.handleError); */
  }

  deleteTask(task: ITask) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.delete(this._url, { body: task })
      .map((response => response));
  }

  getUser(): Observable<ITask[]> {
    return this._http.get(this.account_url)
      .map((response: Response) => <ITask[]>response.json());

  }

  addUser(user) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.account_url, user)
      .map((response) => response)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error(error);
    return Observable.throw(error);
  }
}























  /*
  addUser(user): Observable<ITaskList> {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.account_url, user, options)
      .map((response: Response) => <ITaskList[]>response.json())
      .catch(this.handleError);
  } */






