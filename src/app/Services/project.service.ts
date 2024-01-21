import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  api="https://mani-api.ma/api/Projets"
  constructor(private http:HttpClient) { }

  getAllProjects():Observable<any>{
    return this.http.get(this.api);
  }
  getById(id:number):Observable<any>{
    return this.http.get(this.api+'/'+id);

  }
  updateProject(id:number,project:Project) :Observable<any>{
   return  this.http.put(this.api+'/'+id,project);

  }
  addProject(project:Project) :Observable<any>{
    return  this.http.post(this.api,project);
 
   }
   deleteProject(id:number) :Observable<any>{
    return  this.http.delete(this.api+'/'+id);
 
   }
}
