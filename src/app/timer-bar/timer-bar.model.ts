import { Time } from "@angular/common";

export class ScheduleNote{
    static count:number=1;
    start:string;
    end:string;
    startHrs:number;
    startMins:number;
    endHrs:number;
    endMins:number;
    note:string;
    duration:number;
    color:string;
    id:number;

    /**
     *
     */
    constructor(start:string,end:string,note:string,color:string) {
        this.id=ScheduleNote.count;

        this.start=start;
        this.end=end;

        this.startHrs=parseInt(start.split(":")[0]);
        this.startMins=parseInt(start.split(":")[1]);

        this.endHrs=parseInt(end.split(":")[0]);
        this.endMins=parseInt(end.split(":")[1]);

        this.duration =(
                        (parseInt(end.split(":")[0])- parseInt(start.split(":")[0]))
                        +(parseInt(end.split(":")[1])-parseInt(start.split(":")[1]))/60
                        )*96;
                     

        this.note=note;
        this.color=color;

        ScheduleNote.count++;
    }

}