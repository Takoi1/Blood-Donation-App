import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiconsumeServiceService {
  private apiUrl = 'http://localhost:3000/api/parse-pdf';

  constructor(private http:HttpClient) { }
  private userRoleSubject = new BehaviorSubject<string | null>(null);
  // to get role information
  userRole$ = this.userRoleSubject.asObservable();
  //to set role information
  updateUserRole(role: any) {
    this.userRoleSubject.next(role);
  }

  private token = new BehaviorSubject<string | null>(null);
  usertoken$ = this.token.asObservable();
  updateUsertoken(token: any) {
    this.token.next(token);
  }

  createEvent(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/createEvent", data);
  }
  
  getAllEvents():Observable<any>{
    return this.http.get<any>("http://localhost:3000/getAllEvents");
  }
  getOneEvent(id:any):Observable<any>{
    return this.http.get("http://localhost:3000/getEvent/"+id)
  }
  updateOneEvent(id:any,data:any):Observable<any>{
    return this.http.put("http://localhost:3000/putEvent/"+id,data)
  }
  deleteOneEvent(id:any):Observable<any>{
    return this.http.delete("http://localhost:3000/deleteEvent/"+id)
  }
  deletAllEvent(id:any):Observable<any>{
    return this.http.delete("http://localhost:3000/deleteById/"+id)
  }
 




  createuser(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/createuser", data);
  }
  getAllUsers():Observable<any>{
    return this.http.get<any>("http://localhost:3000/getAllUser");
  }
  getOneUser(id:any):Observable<any>{
    return this.http.get("http://localhost:3000/getUser/"+id)
  }
  updateOneUser(id:any,data:any):Observable<any>{
    return this.http.put("http://localhost:3000/updateOneUser/"+id,data)
  }
  deleteUser(id:any):Observable<any>{
    return this.http.delete("http://localhost:3000/deleteUser/"+id)
  }
  deleteAllUsers(id:any):Observable<any>{
    return this.http.delete("http://localhost:3000/deleteAllUsers/"+id)
  }




  
  createBlood(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/createBlood", data);
  }
  getAllBlood():Observable<any>{
    return this.http.get<any>("http://localhost:3000/readAll");
  }
  getOneBlood(id:any):Observable<any>{
    return this.http.get("http://localhost:3000/readById/"+id)
  }
  updateOneBlood(id:any,data:any):Observable<any>{
    return this.http.put("http://localhost:3000/event/"+id,data)
  }
  deleteOneBlood(id:any):Observable<any>{
    return this.http.delete("http://localhost:3000/deleteById/"+id)
  }
  deletAllBlood(id:any):Observable<any>{
    return this.http.delete("http://localhost:3000/deleteById/"+id)
  }
  
  
  parsePdf(filePath: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { filePath });
  }

  
 
}
