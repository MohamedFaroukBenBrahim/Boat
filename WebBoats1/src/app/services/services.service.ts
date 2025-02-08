import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { boats } from '../model/boats';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { messagecontact } from '../model/message';
import { User } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private http : HttpClient,private snack : MatSnackBar) { }

  public getboats() : Observable<boats[]> {
    return this.http.get<boats[]>("http://localhost:8080/BOATS/all",);
  }

  public updateboats(boat : boats) : Observable<boats> {
    return this.http.put<boats>(`http://localhost:8080/BOATS/update`,boat);
  }

  public deleteboats(id :number) : Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/BOATS/delete/${id}`,);
  }

  public findboat(id : number) : Observable<boats> {
    return this.http.get<boats>(`http://localhost:8080/BOATS/find/${id}`,);
  }

  public addboats(boat : boats ) : Observable<boats> {
    return this.http.post<boats>("http://localhost:8080/BOATS/add",boat);
  }
  public addmessagecontact(msg : messagecontact  ) : Observable<messagecontact>{
    return this.http.post<messagecontact>("http://localhost:8080/contact/send",msg);
  }
  public allmessages() : Observable<messagecontact[]>{
    return this.http.get<messagecontact[]>("http://localhost:8080/contact/message")
  }
  public register(user : User): Observable<User>{
    return this.http.post<User >("http://localhost:8080/boat/signup/reg",user)
  }

  showAlert(alert : string) {
    this.snack.open(alert, 'Close', {
      duration: 30000,
      panelClass: 'custom-snackbar' 
    });
  }
}
