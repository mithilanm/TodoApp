export class Task{
    public task: string;
    public checked: boolean = false;

    constructor(task: string, checked: boolean){
        this.task = task;
        this.checked = checked;
    }
}