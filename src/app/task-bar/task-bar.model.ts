export class Task{
    static taskCount:number=1;
    isDone:boolean;
    isImportant:boolean;
    Msg:string;
    taskId:number;

    constructor(msg:string) {
        this.taskId=Task.taskCount-1;
        this.isDone=false;
        this.isImportant=false;
        this.Msg=msg;
        Task.taskCount++;
    }
}