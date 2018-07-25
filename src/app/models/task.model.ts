import { ITask } from '../tasklist';

export class Task implements ITask {
  ID: number;
  Task: string;
  Status: boolean;
  FullName: string;
  UserID: number;

}
