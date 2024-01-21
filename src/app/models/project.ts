import { Sprint } from "./Sprint"

export class Project {
    Id:number
    Libelle:string
    Description:string
    SprintDays:number
    DateDebut:Date 
    DateFin :Date
    Sprints:Sprint[]=[]
}
