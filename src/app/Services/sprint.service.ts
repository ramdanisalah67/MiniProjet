import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Sprint } from '../models/Sprint';

@Injectable({
  providedIn: 'root'
})
export class SprintService {
  api="https://mani-api.ma/api/Sprints"
  constructor(private http:HttpClient) { }

  getAllSprints():Observable<any>{
    return this.http.get(this.api);
  }
  getById(id:number):Observable<any>{
    return this.http.get(this.api+'/'+id);

  }
  updateSprint(id:number,sprint:Sprint) :Observable<any>{
   return  this.http.put(this.api+'/'+id,sprint);

  }
  addSprint(sprint:Sprint) :Observable<any>{
    return  this.http.post(this.api,sprint);
 
   }
   deleteSprint(id:number) :Observable<any>{
    return  this.http.delete(this.api+'/'+id);
 
   }
}
